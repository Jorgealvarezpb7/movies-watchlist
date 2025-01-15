<script lang="ts">
  const AUDIENCE_RATING = {
    G: 'GENERAL_AUDIENCE',
    PG: 'PARENTAL_GUIDANCE',
    PG13: 'PARENTS_STRONGLY_CAUTIONED',
    R: 'RESTRICTED',
    NC17: 'ADULTS_ONLY'
  };

  const CONTENT_TYPE = {
    'TV Show': 'TV_SHOW',
    Movie: 'MOVIE'
  };

  let title = $state('');
  let releaseDate = $state(new Date().toJSON());
  let starRating = $state(0.0);
  let audienceRating = $state('');
  let contentType = $state('');
  let errorMessage = $state('');

  async function createTitle() {
    if (!audienceRating) {
      errorMessage = 'Audience Rating is required';
      return;
    }
    const res = await fetch('/api/v1/titles', {
      method: 'post',

      body: JSON.stringify({
        title,
        releaseDate,
        starRating,
        audienceRating,
        contentType
      })
    });

    console.log(res);
  }
</script>

<h1>Create Title {title}</h1>
{JSON.stringify({
  title,
  releaseDate,
  starRating,
  audienceRating,
  contentType
})}
<form class="jorge mx-auto flex w-1/4 flex-col">
  <input class="border border-indigo-400" type="text" bind:value={title} />
  <input type="date" bind:value={releaseDate} />
  <input type="number" max="10" min="0" bind:value={starRating} />
  <select bind:value={audienceRating}>
    {#each Object.keys(AUDIENCE_RATING) as label}
      <option value={AUDIENCE_RATING[label]}>{label}</option>
    {/each}
  </select>
  <select bind:value={contentType}>
    {#each Object.keys(CONTENT_TYPE) as label}
      <option value={CONTENT_TYPE[label]}>{label}</option>
    {/each}
  </select>
  <button type="button" onclick={createTitle}>Create</button>
</form>
{errorMessage}

<style>
  .jorge {
    @apply p-4;
    background-color: green;
  }
</style>
