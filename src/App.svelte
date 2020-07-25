<script>
  import Router from './router/Router.svelte';
  export let name;
</script>

<style>
  h1 {
    color: purple;
    text-align: center;
  }
</style>

<main>
  <h1>Hello {name}!</h1>

  <Router />
</main>
