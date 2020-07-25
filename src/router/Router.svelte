<script>
  import createRouter, { ROUTER_MODE, router } from '@spaceavocado/svelte-router';
  // import createRouter, { ROUTER_MODE } from '@spaceavocado/svelte-router';
  import RouterView from '@spaceavocado/svelte-router/component/view';
  import Test from '../views/Teste.svelte';
  import Home from '../views/Home.svelte';

  createRouter({
    mode: ROUTER_MODE.HISTORY,
    routes: [
      {
        path: '/',
        name: 'HOME',
        component: Home,
      },
      {
        path: '/teste',
        name: 'TESTE',
        component: Test,
        props: true,
      },
    ],
  });
</script>

<RouterView />
