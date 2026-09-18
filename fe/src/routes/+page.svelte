<script lang="ts">
  // Svelte has no JSX, so Panda's `styled-system/jsx` components (Box, Stack, ...) do not exist.
  // Same style props, applied as class strings from `styled-system/patterns` instead.
  import { css } from 'styled-system/css';
  import { box, circle, stack } from 'styled-system/patterns';
</script>

<main class={css({ p: '8', maxW: '2xl', mx: 'auto' })}>
  <h1 class={css({ fontSize: '3xl', fontWeight: 'bold', color: 'teal.600' })}>
    Panda CSS + SvelteKit
  </h1>
  <p class={css({ mt: '2', color: 'gray.600' })}>Zero-runtime styles running in Svelte 5!</p>

  <div class={stack({ direction: 'row', p: '4', rounded: 'md', shadow: 'lg', bg: 'white' })}>
    <div class={circle({ size: '5rem', overflow: 'hidden' })}>
      <img src="https://placehold.co/150" alt="avatar" />
    </div>
    <div class={box({ mt: '4', fontSize: 'xl', fontWeight: 'semibold' })}>John Doe</div>
    <div class={box({ mt: '2', fontSize: 'sm', color: 'gray.600' })}>john@doe.com</div>
  </div>
</main>
