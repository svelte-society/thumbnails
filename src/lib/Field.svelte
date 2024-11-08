<script>
	/**
	 * @type {{ label: string, type: string, name: string, value: string | undefined, required: true | undefined }}
	 */
	const { label, type, name, value, required } = $props();
</script>

{#if type === 'radio'}
	<label class="flex items-center gap-x-3">
		<input {name} type="radio" class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" />
		<div class="block text-sm font-medium leading-6 text-gray-900" for={name}>{label}</div>
	</label>
{:else if type === 'checkbox'}
	<label class="flex items-center gap-x-3">
		<input {name} type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" />
		<div class="block text-sm font-medium leading-6 text-gray-900" for={name}>{label}</div>
	</label>
{:else if type === 'textarea'}
	<div>
		<label class="block text-sm font-medium leading-6 text-gray-900" for={name}>{label}</label>
		<textarea
			class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			{name}
			{value}
			{required}
			rows="5"
		></textarea>
	</div>
{:else if type.startsWith('select:')}
	<div>
		<label class="block text-sm font-medium leading-6 text-gray-900" for={name}>{label}</label>
		<select
			class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
			{name}
			{value}
			{required}
		>
			<!--
				{#each options[type.split(':').pop()] as { label, value }}
        <option {value}>{label}</option>
				{/each}
				-->
		</select>
	</div>
{:else}
	<div>
		<label class="block text-sm font-medium leading-6 text-gray-900" for={name}>{label}</label>
		<input
			class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			{type}
			{name}
			{value}
			{required}
		/>
	</div>
{/if}
