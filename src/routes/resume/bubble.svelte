<script lang="ts">
	import { ss } from '$lib/style-string';
	import type { Snippet } from 'svelte';

	const props = $props<{
		class?: string;
		icon?: string;
		colors: Array<string>;
		children: Snippet;
		onclick?: () => void;
	}>();

	let tag = $derived(props.onclick ? 'button' : 'div');
	let role = $derived(props.onclick ? 'button' : undefined);
</script>

<svelte:element
	this={tag}
	class="inline-block rounded-full px-2 py-1"
	style={ss({ 'background-color': props.colors[0], color: props.colors[1] })}
	onclick={props.onclick}
	{role}
>
	<div class="flex items-center whitespace-nowrap">
		{#if props.icon}
			<div class="inline-block w-[11px] h-[11px] mr-1">
				{@html props.icon}
			</div>
		{/if}
		{@render props.children()}
	</div>
</svelte:element>
