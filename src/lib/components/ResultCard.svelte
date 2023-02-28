<script lang="ts">
	import clsx from 'clsx';

	export let title: string;
	export let score: number;
	let clz: string = '';
	export { clz as class };
</script>

<div class={clsx(clz, 'flex p-3 rounded-md gap-2.5 text-sm')}>
	<slot name="icon" />
	<h6 class="text-current flex-1 font-bold">{title}</h6>
	<p class="text-black">{score} / <span class="text-neutral-dark-gray-blue/70">100</span></p>
</div>
