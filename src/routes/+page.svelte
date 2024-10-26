<script>
	import { page } from '$app/stores';
	import Input from '$lib/Input.svelte';

	const templates = Object.entries(
		import.meta.glob('$lib/templates/*.svelte', { eager: true })
	).map(([path, module]) => [path.split('/').at(-1), module]);

	let data = $state();
	let template_name = $state('SvelteSummitFall2024.svelte');
	let selected_template = $derived(templates.find(([name]) => name === template_name)?.at(-1));

	function get_values(event) {
		const form = event.currentTarget;

		const form_data = new FormData(form);
		const json = Object.fromEntries(form_data.entries());

		data = json;
	}
</script>

<div class="flex">
	<div class="overflow-scroll">
		<selected_template.default {data} />
	</div>
	<div class="w-1/3 overflow-hidden" hidden={$page.url.searchParams.has('_full')}>
		<div class="p-6">
			<h1 class="text-2xl font-semibold">Omni Thumbnail</h1>

			<form method="POST" action="" oninput={get_values} onchange={get_values}>
				<div class="flex flex-col gap-3">
					<div>
						<label class="block text-sm font-medium leading-6 text-gray-900" for="template">
							Template
						</label>
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
						{#if field.group}
							<fieldset>
								<legend class="p-1 mb-2 font-semibold">{field.group}</legend>
								{#each field.fields as field}
									<Input {...field} />
								{/each}
							</fieldset>
						{:else}
							<Input {...field} />
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
