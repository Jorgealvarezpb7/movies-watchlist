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

<a href="/titles/create">Create Title</a>

<h1>Titles</h1>

<TitleList title="TV Shows">
  {#each tvShows as { title }}
    <Title {title} coverUrl="https://placehold.co/100x150" />
  {:else}
    <p>No TV Shows Available</p>
  {/each}
</TitleList>

<TitleList title="Movies">
  {#each movies as { title }}
    <Title {title} coverUrl="https://placehold.co/100x150" />
  {:else}
    <p>No Movies Available</p>
  {/each}
</TitleList>
