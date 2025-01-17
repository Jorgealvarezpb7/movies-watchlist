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
  let imageId = $state('');
  let errorMessage = $state('');

  async function handleImageSelection(ev: Event) {
    const inputEl = ev.target as HTMLInputElement;
    const file = inputEl.files?.[0];

    if (!file) {
      errorMessage = 'No file selected for cover';
      return;
    }

    const formData = new FormData();

    formData.append('image', file);

    const response = await fetch('/api/v1/images', {
      method: 'POST',
      body: formData
    });

    if (response.status === 201) {
      const { id } = await response.json();
      imageId = id;
      return;
    }

    errorMessage = `Error uploading image. (${response.status})`;

    // const file = this.files[0];
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   const img = new Image();
    //   img.src = e.target.result;
    //   img.onload = () => {
    //     const canvas = document.createElement('canvas');
    //     const ctx = canvas.getContext('2d');
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     ctx.drawImage(img, 0, 0);
    //     const dataUrl = canvas.toDataURL('image/jpeg');
    //     console.log(dataUrl);
    //   };
    // };
    // reader.readAsDataURL(file);
  }

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
        contentType,
        coverImageId: imageId
      })
    });

    console.log(res);
  }
</script>

<h2 class="page-title">Create Title</h2>

<form class="mx-auto flex w-1/4 flex-col">
  <input class="border border-indigo-400" type="text" bind:value={title} />
  <input type="date" bind:value={releaseDate} />
  <input type="number" max="10" min="0" bind:value={starRating} />
  <input type="file" onchange={handleImageSelection} />
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
  <button type="button" class="btn btn-primary" onclick={createTitle}>Create</button>
</form>
{errorMessage}
