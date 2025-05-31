<script lang="ts">
	import { fade } from 'svelte/transition';
	import '../app.css';

	let { children } = $props();
</script>

<div class="mx-auto h-full w-full max-w-5xl overflow-hidden overflow-x-auto p-2 pt-16" transition:fade>
	{@render children()}
</div>
