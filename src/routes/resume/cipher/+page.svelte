<script lang="ts">
  import { decrypt, encrypt } from '$lib/encrypt';
  import { password } from '$lib/password.svelte';
  import { parse } from 'svelte/compiler';

  let plaintext = $state('');
  let placeholder = $state('');
  let redacted = $state('');

  $effect(() => {
    if (password.current) {
      onPlaintextChanged();
    }
  });

  const onPlaintextChanged = async () => {
    const enc = await encrypt(plaintext, password.current);
    const placeholderProp = placeholder ? ` placeholder="${placeholder}"` : ` placeholderLength={${plaintext.length}}`;
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
      password.current,
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
    <textarea class="border w-96" bind:value={plaintext} oninput={onPlaintextChanged}></textarea>
  </div>
  <div>
    <h2>Placeholder</h2>
    <textarea class="border w-96" bind:value={placeholder} oninput={onPlaintextChanged}></textarea>
  </div>
  <div>
    <h2>Redacted element</h2>
    <textarea class="border w-96" bind:value={redacted} oninput={onRedactedChanged}></textarea>
  </div>
</div>
