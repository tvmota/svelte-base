<script>
  import Router from './router/Router.svelte';
  export let name;
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  h1 {
    color: purple;
    text-align: center;
  }
</style>

<main>
  <h1>Hello {name}!</h1>

  <Router />
</main>
