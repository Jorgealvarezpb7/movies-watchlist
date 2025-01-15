<script lang="ts">
  let {
    title,
    coverUrl
  }: {
    title: string;
    coverUrl: string;
  } = $props();
</script>

<li>
  <img alt="Cover for movie {title}" src={coverUrl} height="150" width="100" />
  <span>{title}</span>
</li>
