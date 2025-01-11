<script lang="ts">
  import { onMount } from 'svelte';

  let titles = $state([]);

  onMount(async () => {
    const res = await fetch('/api/v1/titles');
    titles = await res.json();
  });
</script>

<a href="/titles/create">Create Title</a>

<h1>Titles</h1>

<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Score</th>
      <th>Rating</th>
      <th>Release Date</th>
    </tr>
  </thead>
  <tbody>
    {#each titles as { title, starRating, audienceRating, releaseDate }}
      <tr>
        <td>{title}</td>
        <td>{starRating}</td>
        <td>{audienceRating}</td>
        <td>{releaseDate}</td>
      </tr>
    {:else}
      <tr>
        <td colspan="4">No titles available</td>
      </tr>
    {/each}
  </tbody>
</table>
