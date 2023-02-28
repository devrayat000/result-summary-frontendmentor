<script lang="ts">
	import ResultCard from '$lib/components/ResultCard.svelte';

	import ReactionIcon from '$lib/assets/icons/icon-reaction.svg?component';
	import MemoryIcon from '$lib/assets/icons/icon-memory.svg?component';
	import VerbalIcon from '$lib/assets/icons/icon-verbal.svg?component';
	import VisualIcon from '$lib/assets/icons/icon-visual.svg?component';
	import preview from '$lib/assets/images/desktop-preview.jpg';
</script>

<svelte:head>
	<title>Result Summary</title>
	<meta name="description" content="A project from Frontend Mentor" />

	<meta property="og:title" content="Result Summary" />
	<meta property="og:description" content="A project from Frontend Mentor" />
	<meta property="og:image" content={preview} />
</svelte:head>

<main class="md:h-screen md:grid md:place-items-center">
	<div
		class="bg-white grid md:rounded-3xl md:grid-cols-2 overflow-hidden md:shadow-2xl md:shadow-light-royal-blue/20 md:max-w-lg"
	>
		<section
			class="rounded-b-3xl md:rounded-r-3xl text-white bg-gradient-to-b from-light-slate-blue to-light-royal-blue py-6 px-10 flex flex-col items-center md:justify-between gap-6"
		>
			<h6 class="text-neutral-pale-blue/90">Your Result</h6>
			<div class="h-32 w-32 rounded-full bg-light-royal-blue/30 grid place-items-center">
				<div>
					<p class="text-5xl text-center font-bold">76</p>
					<p class="text-neutral-pale-blue/50 text-xs text-center">of 100</p>
				</div>
			</div>
			<div>
				<h4 class="text-center text-xl font-bold">Great</h4>
				<p class="text-center text-xs m-2 text-neutral-pale-blue/80">
					You scored higher than 65% of the people who have taken these tests.
				</p>
			</div>
		</section>

		<section class="p-6">
			<h5>Summary</h5>
			<div class="flex flex-col gap-3.5 mt-3.5">
				<ResultCard
					title="Reaction"
					score={80}
					class="text-primary-light-red bg-primary-light-red/5"
				>
					<ReactionIcon slot="icon" />
				</ResultCard>
				<ResultCard
					title="Memory"
					score={92}
					class="text-primary-orangey-yellow bg-primary-orangey-yellow/5"
				>
					<MemoryIcon slot="icon" />
				</ResultCard>
				<ResultCard
					title="Verbal"
					score={61}
					class="text-primary-green-teal bg-primary-green-teal/5"
				>
					<VerbalIcon slot="icon" />
				</ResultCard>
				<ResultCard
					title="Visual"
					score={72}
					class="text-primary-cobalt-blue bg-primary-cobalt-blue/5"
				>
					<VisualIcon slot="icon" />
				</ResultCard>
			</div>
			<button
				type="button"
				class="mt-3.5 text-white text-sm bg-neutral-dark-gray-blue transition hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue rounded-full py-2.5 px-4 w-full"
				>Continue</button
			>
		</section>
	</div>
</main>
