<script lang="ts">
  import { onMount } from 'svelte';

  import Title from '$lib/components/Title.svelte';
  import TitleList from '$lib/components/TitleList.svelte';

  let titles = $state([]);

  onMount(async () => {
    const res = await fetch('/api/v1/titles');
    titles = await res.json();
  });

  let tvShows = $derived(titles.filter((t) => t.contentType === 'TV_SHOW'));
  let movies = $derived(titles.filter((t) => t.contentType === 'MOVIE'));
</script>

<header>
  <a class="btn btn-primary" href="/titles/create">Create Title</a>
</header>

<h2 class="page-title">Titles</h2>

<TitleList title="TV Shows">
  {#each tvShows as { title, coverImageUrl }}
    <Title {title} coverUrl={coverImageUrl} />
  {:else}
    <p class="empty-message">No TV Shows Available</p>
  {/each}
</TitleList>

<TitleList title="Movies">
  {#each movies as { title }}
    <Title {title} coverUrl="https://placehold.co/100x150" />
  {:else}
    <p class="empty-message">No Movies Available</p>
  {/each}
</TitleList>

<style>
  header {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
  }

  .empty-message {
    color: #ababab;
    font-size: 0.95rem;
  }
</style>
