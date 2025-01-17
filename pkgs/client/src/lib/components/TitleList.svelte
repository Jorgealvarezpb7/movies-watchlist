<script lang="ts">
  let {
    title,
    children
  }: {
    title: string;
    children: any;
  } = $props();
</script>

<div>
  <h3 class="section-title py-2">{title}</h3>
  <ul class="flex space-x-4">
    {@render children()}
  </ul>
</div>
