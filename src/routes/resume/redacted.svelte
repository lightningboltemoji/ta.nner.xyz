<script module lang="ts">
  const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';

  export const placeholderText = (length: number) =>
    LOREM_IPSUM.repeat(Math.ceil(length / LOREM_IPSUM.length)).slice(0, length);
</script>

<script lang="ts">
  import { decrypt } from '$lib/encrypt';
  import { password } from '$lib/password.svelte';

  const props = $props<{
    ciphertext: string;
    salt: string;
    iv: string;
    placeholder?: string;
    placeholderLength?: number;
  }>();

  const placeholder = $derived(props.placeholder ?? placeholderText(props.placeholderLength!));

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
  <span>{output}</span>
{:catch}
  {@render blurred()}
{/await}
