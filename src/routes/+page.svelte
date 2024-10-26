<script>
	import { page } from '$app/stores';
	import Field from '$lib/Field.svelte';

	const templates = Object.entries(import.meta.glob('$lib/templates/*.svelte', { eager: true })).map(
		([path, module]) => [path.split('/').at(-1), module]
	);

	let data = $state();
	let template_name = $state('SvelteSummitFall2024.svelte');
	let selected_template = $derived(templates.find(([name]) => name === template_name)?.at(-1));

	function get_values(event) {
		const form = event.currentTarget;

		const form_data = new FormData(form);
		const json = Object.fromEntries(form_data.entries());

		data = json;
	}

	/**
	 *
	 * @param {HTMLElement} element
	 * @param param1
	 */
	function scale(parent, { padding } = {}) {
		if (!parent.firstElementChild) return;

		const original_width = parent.firstElementChild.getBoundingClientRect().width;

		const resize = () => {
			const factor = (parent.getBoundingClientRect().width * 100) / original_width;
			parent.firstElementChild?.style.setProperty('scale', factor - 3 + '%');
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
	<div class="flex items-center justify-center w-2/3 h-screen overflow-hiddne bg-slate-200" use:scale>
		<div style="opacity:0; transition:opacity 200ms">
			<selected_template.default {data} />
		</div>
	</div>
	<div class="w-1/3 overflow-hidden" hidden={$page.url.searchParams.has('_full')}>
		<div class="p-6">
			<h1 class="text-2xl font-semibold">Omni Thumbnail</h1>

			<form method="POST" action="" oninput={get_values} onchange={get_values}>
				<div class="flex flex-col gap-3">
					<div>
						<label class="block text-sm font-medium leading-6 text-gray-900" for="template"> Template </label>
						<select
							class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
							name="_template"
							id="template"
							bind:value={template_name}
						>
							{#each templates as [name, module]}
								<option value={name}>{name}</option>
							{/each}
						</select>
					</div>

					{#each selected_template.fields as field}
						{#if field.legend}
							<fieldset>
								<legend class="p-1 mb-2 font-semibold">{field.legend}</legend>
								{#each field.fields ?? [] as field}
									<Field {...field} />
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
