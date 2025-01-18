<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  let title: object | null = $state(null);
  let error: string | null = $state(null);

  onMount(async () => {
    const id = page.params.id;
    const res = await fetch(`/api/v1/titles/${id}`);

    if (res.status !== 200) {
      if (res.status === 400) {
        error = 'Title not found';
        return;
      }

      error = 'An error occurred';
      return;
    }

    title = await res.json();
    console.log(title);
  });
</script>

{#if error}
  <p>{error}</p>
{:else}
  <h2>{title.title}</h2>
  <img src={title.coverImageUrl} alt={title.title} />
  <p>{title.description}</p>
{/if}
