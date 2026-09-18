<script lang="ts">
  import { css } from '../../styled-system/css';
</script>

<main class={css({ p: '8', maxW: '2xl', mx: 'auto' })}>
  <h1 class={css({ fontSize: '3xl', fontWeight: 'bold', color: 'teal.600' })}>
    Panda CSS + SvelteKit
  </h1>
  <p class={css({ mt: '2', color: 'gray.600' })}>Zero-runtime styles running in Svelte 5!</p>
</main>
