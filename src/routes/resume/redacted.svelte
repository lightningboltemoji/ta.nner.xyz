<script lang="ts">
  import { decrypt } from '$lib/encrypt';
  import { password } from '$lib/password.svelte';

  const LOREM_IPSUM =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet volutpat sem, vitae tempor ex. Cras porttitor rhoncus lorem nec aliquet. Integer sit amet arcu elementum, malesuada mi nec, ultricies enim. Sed condimentum neque mi, quis ullamcorper mauris pellentesque in. Morbi lacinia semper tincidunt. Donec ut arcu a diam sodales euismod in commodo eros. Morbi volutpat dignissim eros, id pretium mi dapibus eu. In a sem augue. Praesent in nisi vitae leo commodo euismod. Donec vitae consectetur nunc. Pellentesque vehicula ligula lorem, non tincidunt sapien dictum tempus. ';

  const props = $props<{
    ciphertext: string;
    salt: string;
    iv: string;
    placeholder?: string;
    placeholderLength?: number;
  }>();

  const placeholder = $derived(
    props.placeholder ??
      LOREM_IPSUM.repeat(Math.ceil(props.placeholderLength! / LOREM_IPSUM.length)).slice(0, props.placeholderLength!),
  );

  const plaintext = $derived.by(async () => {
    const { ciphertext, salt, iv } = props;
    return decrypt({ ciphertext, salt, iv }, password.current);
  });
</script>

{#snippet blurred()}
  <span class="blur-xs motion-safe:animate-pulse select-none">{placeholder}</span>
{/snippet}

{#await plaintext}
  {@render blurred()}
{:then output}
  <span class="select-none">{output}</span>
{:catch}
  {@render blurred()}
{/await}
