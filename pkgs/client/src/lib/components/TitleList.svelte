<script lang="ts">
  let {
    title,
    children
  }: {
    title: string;
    children: any;
  } = $props();
</script>

<div class="px-4">
  <h3 class="py-2">{title}</h3>
  <ul class="flex space-x-4">
    {@render children()}
  </ul>
</div>
