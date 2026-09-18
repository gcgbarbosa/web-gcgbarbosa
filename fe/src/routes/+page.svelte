<script lang="ts">
  import { css } from 'styled-system/css';
  import { stack } from 'styled-system/patterns';
</script>

<svelte:head>
	<title>hoi</title>
	<meta name="description" content="chama patricinha pra dancar" />
</svelte:head>

<main
  class={css({
    p: '8',
    maxW: '2xl',
    mx: 'auto',
    minH: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  })}
>
  <div
    class={stack({
      direction: 'column',
      rounded: 'md',
      p: '4',
      border: '1px solid',
      width: '100%',
      align: 'center'
    })}
  >
    <h1 class={css({ fontSize: '3xl', fontWeight: 'bold', color: 'teal.600' })}>
      Web template
      <a
        class={css({
          color: 'blue.600',
          _hover: {
            color: 'blue.300',
            textDecoration: 'underline'
          },
          _focusVisible: {
            outline: '2px solid',
            outlineColor: 'teal.500',
            outlineOffset: '2px'
          }
        })}
        href="https://github.com/gcgbarbosa/"
      >
        @gcgbarbosa
      </a>
    </h1>
  </div>
</main>
