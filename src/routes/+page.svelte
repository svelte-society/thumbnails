<script>
	import { page } from '$app/stores';
	import Field from '$lib/Field.svelte';

	let props = $props();

	const templates = Object.entries(import.meta.glob('$lib/templates/*.svelte', { eager: true })).map(
		([path, module]) => [path.split('/').at(-1), module]
	);

	let values = $state(props.data.values);
	let template_name = $state('SvelteSummitFall2024.svelte');
	let selected_template = $derived(templates.find(([name]) => name === template_name)?.at(-1));

	function get_values(event) {
		const form = event.currentTarget;

		const form_data = new FormData(form);
		const json = Object.fromEntries(form_data.entries());

		values = json;
	}

	/** @param {HTMLElement} parent */
	function scale(parent, { enabled = true, padding = 0 } = {}) {
		if (!enabled) return;

		if (!parent.firstElementChild) return;

		const original_width = parent.firstElementChild.getBoundingClientRect().width;

		const resize = () => {
			const factor = (parent.getBoundingClientRect().width * 100) / original_width;
			parent.firstElementChild?.style.setProperty('scale', factor - padding + '%');
		};

		resize();

		parent.firstElementChild?.style.setProperty('opacity', '1');

		window.addEventListener('resize', resize);

		return {
			destroy() {
				window.removeEventListener('resize', resize);
			}
		};
	}
</script>

<div class="flex">
	<div
		class="{$page.url.searchParams.has('_full')
			? 'w-full'
			: 'w-2/3'} flex items-center justify-center h-screen overflow-hidden bg-slate-200"
		use:scale={{
			enabled: $page.url.searchParams.has('_full') === false,
			padding: $page.url.searchParams.has('_full') ? 0 : 3
		}}
	>
		<div id="thumbnail" style="opacity:{$page.url.searchParams.has('_full') ? '1' : '0'}; transition:opacity 200ms">
			<selected_template.default {values} />
		</div>
	</div>
	<div class="{$page.url.searchParams.has('_full') ? 'w-0' : 'w-1/3'} overflow-hidden">
		<div class="p-6">
			<h1 class="mb-6 text-2xl font-semibold">Omni Thumbnail</h1>

			<form method="POST" action="/download" oninput={get_values} onchange={get_values}>
				<div class="flex flex-col gap-3">
					<fieldset>
						<legend class="text-sm font-semibold leading-6 text-gray-900">Template</legend>
						<div class="mt-1 space-y-6">
							{#each templates as [name, module]}
								<div class="flex items-center gap-x-3">
									<input
										name="_template"
										value={name}
										type="radio"
										bind:group={template_name}
										class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
									/>
									<label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">
										{module.title}
									</label>
								</div>
							{/each}
						</div>
					</fieldset>

					{#each selected_template.fields as field}
						{#if field.legend}
							<fieldset>
								<legend class="p-1 mb-2 font-semibold">{field.legend}</legend>
								{#each field.fields ?? [] as field}
									<Field {...field} value={values?.[field.name]} />
								{/each}
							</fieldset>
						{:else}
							<Field {...field} />
						{/if}
					{/each}
				</div>

				<button
					type="submit"
					class="px-3 py-2 mt-6 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Download Thumbnail!
				</button>
			</form>
		</div>
	</div>
</div>
