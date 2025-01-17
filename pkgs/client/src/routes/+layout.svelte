<script lang="ts">
  import BookmarksSimple from '$lib/components/icons/BookmarkSimple.svelte';
  import FilmSlate from '$lib/components/icons/FilmSlate.svelte';

  import '../app.css';

  let { children } = $props();
</script>

<div id="app">
  <header class="layout-header">
    <h1>
      <a href="/">Movies Watchlist</a>
    </h1>
    <nav>
      <a href="/titles">
        <FilmSlate className="h-8 w-8" />
      </a>
      <a href="/watchlist">
        <BookmarksSimple className="h-8 w-8" />
      </a>
    </nav>
  </header>
  <main class="layout-content">
    {@render children()}
  </main>
</div>

<style lang="postcss">
  #app {
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .layout-header nav {
    align-items: center;
    display: flex;
    gap: 1rem;
  }

  .layout-header nav a {
    border-radius: 1rem;
    color: #828282;
    padding: 0.5rem;
  }

  .layout-header nav a:hover {
    background-color: #242846;
    color: #2072aa;
  }

  .layout-content {
    padding: 1rem;
  }
</style>
