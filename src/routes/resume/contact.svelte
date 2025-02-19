<script lang="ts">
  import Redacted from './redacted.svelte';
</script>

<div>
  <h2>Contact</h2>
  <div class="pt-2 inline-grid grid-cols-[auto_1fr]">
    <span class="px-2 text-xs my-auto ml-auto opacity-60">email</span>
    <span>
      <a href="mailto:t@nner.xyz" target="_blank">t@nner.xyz</a>
    </span>
    <span class="px-2 text-xs my-auto ml-auto opacity-60">phone</span>
    <Redacted
      ciphertext="od3kPHeZPpw+1LzqYpVaXE5aMNxLRLyVMsvkuA=="
      salt="ccsSRxocaxcL2wMacCCZsg=="
      iv="zZ/epfOnnaHDJPW4"
      placeholder="321-654-0987"
    />
    <span class="px-2 text-xs my-auto ml-auto opacity-60">links</span>
    <span>
      <a href="https://ta.nner.xyz" target="_blank">https://ta.nner.xyz</a>
    </span>
    <span class="px-2 text-xs my-auto ml-auto opacity-60">where</span>
    <span>Seattle, WA</span>
  </div>
</div>
