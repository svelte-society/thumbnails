<script>
	/**
	 * @type {{ label: string, type: 'text' | 'url' | 'select', name: string, value: string | undefined, required: true | undefined }}
	 */
	const { label, type, name, value, required } = $props();

	import options from '$lib/options';
</script>

<div>
	<label class="block text-sm font-medium leading-6 text-gray-900" for={name}>{label}</label>
	{#if type.startsWith('select:')}
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
	{:else}
		<input
			class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			{type}
			{name}
			{value}
			{required}
		/>
	{/if}
</div>
