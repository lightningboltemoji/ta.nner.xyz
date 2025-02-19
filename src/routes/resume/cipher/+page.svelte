<script lang="ts">
  import { decrypt, encrypt } from '$lib/encrypt';
  import { password } from '$lib/password.svelte';
  import { placeholderText } from '../redacted.svelte';
  import { parse } from 'svelte/compiler';

  let canvas: HTMLCanvasElement;
  let plaintext = $state('');
  let placeholder = $state('');
  let redacted = $state('');

  const passwordValidated = $derived(
    typeof password.current === 'string' && password.current.length > 20 ? password.current : '',
  );

  $effect(() => {
    passwordValidated;
    onPlaintextChanged();
  });

  const placeholderLength = $derived.by(() => {
    if (!canvas) return 0;

    const ctx = canvas.getContext('2d');
    const measure = (text: string) => ctx!.measureText(text).width;
    const targetWidth = measure(plaintext);

    let left = 0;
    let right = 10000;
    let e = 500;
    // 30 iterations of binary search to converge on what placeholder length best matches actual text
    [...Array(30)].forEach((_) => {
      e = (right - left) / 2 + left;
      const placeholderWidth = measure(placeholderText(e));
      if (placeholderWidth > targetWidth) {
        right = e;
      } else {
        left = e;
      }
    });
    return Math.round(e);
  });

  const onPlaintextChanged = async () => {
    if (!passwordValidated) {
      redacted = '';
      return;
    }
    const enc = await encrypt(plaintext, passwordValidated);
    const placeholderProp = placeholder ? `placeholder="${placeholder}"` : `placeholderLength={${placeholderLength}}`;
    redacted = `<Redacted ciphertext="${enc.ciphertext}" salt="${enc.salt}" iv="${enc.iv}" ${placeholderProp} />`;
  };

  const onRedactedChanged = async () => {
    let ast;
    try {
      ast = parse(redacted);
      if (ast.html.children?.length !== 1 || ast.html.children[0].name !== 'Redacted') {
        return;
      }
    } catch {
      return;
    }
    const attrs = ast.html.children[0].attributes;
    plaintext = await decrypt(
      {
        ciphertext: attrs.find((a: any) => a.name == 'ciphertext').value[0].data,
        salt: attrs.find((a: any) => a.name == 'salt').value[0].data,
        iv: attrs.find((a: any) => a.name == 'iv').value[0].data,
      },
      passwordValidated,
    );
    placeholder = attrs.find((a: any) => a.name == 'placeholder')?.value[0]?.data ?? '';
  };
</script>

<div class="flex flex-col p-8 *:p-4">
  <div>
    <h1>Redacted element generator</h1>
    <p class="text-xs">This is meant to be used for development only :)</p>
  </div>
  <div>
    <h2>Password</h2>
    <input
      class="border"
      type="password"
      placeholder="password"
      bind:value={password.current}
      onkeypress={onPlaintextChanged}
    />
  </div>
  <div>
    <h2>Plaintext</h2>
    <textarea class="border w-96 h-48" bind:value={plaintext} oninput={onPlaintextChanged}></textarea>
  </div>
  <div>
    <h2>Placeholder</h2>
    <textarea class="border w-96 h-48" bind:value={placeholder} oninput={onPlaintextChanged}></textarea>
  </div>
  <div>
    <h2>Redacted element</h2>
    <textarea class="border w-96 h-48" bind:value={redacted} oninput={onRedactedChanged}></textarea>
  </div>
  <canvas class="text-xs" bind:this={canvas}></canvas>
</div>
