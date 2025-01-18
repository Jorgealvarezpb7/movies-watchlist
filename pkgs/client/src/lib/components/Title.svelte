<script lang="ts">
  let {
    id,
    title,
    coverUrl
  }: {
    id: string;
    title: string;
    coverUrl: string;
  } = $props();
</script>

<li>
  <a href="/titles/{id}">
    <img alt="Cover for movie {title}" src={coverUrl} height="150" width="100" />
    <span class="text-sm">{title}</span>
  </a>
</li>
