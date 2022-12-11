<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { exclude } from '../utils/exclude';
	import Icon from 'svelte-awesome';

	interface $$Props {
		display?: 'inline' | 'block';
		icon?: {
			data?: any;
			position: 'inline-start' | 'inline-end' | 'alone';
		};
		size?: 'small' | 'medium' | 'large';
		variant: 'primary' | 'secondary' | 'ghost';
	}

	export let display: $$Props['display'] = 'inline';
	export let size: $$Props['size'] = 'medium';
	export let icon: $$Props['icon'] = undefined;
	export let variant: $$Props['variant'];

	function getIconScale(size: $$Props['size']) {
		switch (size) {
			case 'small':
				return 0.8;
			case 'medium':
				return 1;
			case 'large':
				return 1.2;
		}
	}
</script>

<button
	class:display-block={display === 'block'}
	class:display-inline={display === 'inline'}
	class:size-medium={size === 'medium'}
	class:variant-primary={variant === 'primary'}
	class:variant-secondary={variant === 'secondary'}
	class:variant-ghost={variant === 'ghost'}
	class:layout-icon-alone={icon?.position === 'alone'}
	on:focus
	on:blur
	on:fullscreenchange
	on:fullscreenerror
	on:scroll
	on:cut
	on:copy
	on:paste
	on:keydown
	on:keypress
	on:keyup
	on:auxclick
	on:click
	on:contextmenu
	on:dblclick
	on:mousedown
	on:mouseenter
	on:mouseleave
	on:mousemove
	on:mouseover
	on:mouseout
	on:mouseup
	on:select
	on:wheel
	on:drag
	on:dragend
	on:dragenter
	on:dragstart
	on:dragleave
	on:dragover
	on:drop
	on:touchcancel
	on:touchend
	on:touchmove
	on:touchstart
	on:pointerover
	on:pointerenter
	on:pointerdown
	on:pointermove
	on:pointerup
	on:pointercancel
	on:pointerout
	on:pointerleave
	on:gotpointercapture
	on:lostpointercapture
	{...exclude($$restProps, ['style', 'class'])}
>
	{#if icon}
		<span
			class="icon"
			class:icon-position-alone={icon?.position === 'alone'}
			class:icon-position-inline-start={icon?.position === 'inline-start'}
			class:icon-position-inline-end={icon?.position === 'inline-end'}
		>
			<Icon data={icon.data} scale={getIconScale(size)} />
		</span>
	{/if}
	<span class="text" class:screen-reader-only={icon?.position === 'alone'}>
		<slot />
	</span>
</button>

<style>
	button {
		display: var(--display-button);

		width: var(--size-width-button);
		height: var(--size-height-button);
		margin: 0;
		padding: 0 var(--size-padding-x-button);

		border: 0;

		font-size: var(--size-font-button);
		color: var(--color-text-button);

		background-color: var(--color-background-button);
	}

	.size-small {
		--size-padding-x-button: 0.5rem;
		--size-font-button: 0.75rem;
		--size-height-button: 1.75rem;
	}
	.size-medium {
		--size-padding-x-button: 0.75rem;
		--size-font-button: 1rem;
		--size-height-button: 2rem;
	}
	.size-large {
		--size-padding-x-button: 1rem;
		--size-font-button: 1.5rem;
		--size-height-button: 2.25rem;
	}

	.display-inline {
		--display-button: inline-flex;
		--size-width-button: initial;
	}

	.display-block {
		--display-button: flex;
		--size-width-button: 100%;
	}

	.variant-primary {
		--color-background-button: var(--color-background-action-primary);
		--color-background-button-hover: var(--color-background-action-primary-hover);
		--color-text-button: var(--color-text-action-primary);
		--color-outline-inner-button-focus: var(--color-outline-inner-action-primary-focus);
		--color-outline-outer-button-focus: var(--color-outline-inner-action-primary-focus);
	}
	.variant-secondary {
		--color-background-button: var(--color-background-action-secondary);
		--color-background-button-hover: var(--color-background-action-secondary-hover);
		--color-text-button: var(--color-text-action-secondary);
		--color-outline-inner-button-focus: var(--color-outline-inner-action-secondary-focus);
		--color-outline-outer-button-focus: var(--color-outline-inner-action-secondary-focus);
	}
	.variant-ghost {
		--color-background-button: var(--color-background-action-ghost);
		--color-background-button-hover: var(--color-background-action-ghost-hover);
		--color-text-button: var(--color-text-action-ghost);
		--color-outline-inner-button-focus: var(--color-outline-inner-action-ghost-focus);
		--color-outline-outer-button-focus: var(--color-outline-inner-action-ghost-focus);
	}

	.layout-icon-alone {
		--size-width-button: var(--size-height-button);
		--size-padding-x-button: 0;
	}

	button:hover {
		background-color: var(--color-background-button-hover);
	}

	button:focus-visible {
		box-shadow: inset 2px var(--color-outline-inner-button-focus);
		outline: 2px solid var(--color-outline-outer-button-focus);
	}

	/**
   * Subcomponents
   */
	.icon {
	}

	.icon-position-alone {
	}

	.icon-position-inline-start {
		order: -1;
	}

	.icon-position-inline-end {
		order: 1;
	}

	.text {
		color: red;
	}
</style>
