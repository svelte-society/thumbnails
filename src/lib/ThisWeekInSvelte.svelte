<script module>
	export const fields = [
		{
			label: 'Episode number',
			name: 'episode_number',
			type: 'number',
			required: true
		},
		{
			group: 'Lines',
			fields: [
				{
					label: 'Line 1',
					name: 'line_1',
					type: 'text',
					value: 'Changelog'
				},
				{
					label: 'Line 2',
					name: 'line_2',
					type: 'text'
				},
				{
					label: 'Line 3',
					name: 'line_3',
					type: 'text'
				}
			]
		},
		{
			label: 'Host',
			name: 'host',
			type: 'select:hosts'
		},
		{
			group: 'Guest 1',
			fields: [
				{
					label: 'Name',
					name: 'guest_1_name',
					type: 'text'
				},
				{
					label: 'Image URL',
					name: 'guest_1_image_url',
					type: 'url'
				},
				{
					label: 'Website',
					name: 'guest_1_website',
					type: 'url'
				},
				{
					label: 'GitHub username',
					name: 'guest_1_github',
					type: 'text'
				},
				{
					label: 'Discord username',
					name: 'guest_1_discord',
					type: 'text'
				},
				{
					label: 'Twitter/X username',
					name: 'guest_1_twitter',
					type: 'text'
				}
			]
		},
		{
			group: 'Guest 2',
			fields: [
				{
					label: 'Name',
					name: 'guest_2_name',
					type: 'text'
				},
				{
					label: 'Image URL',
					name: 'guest_2_image_url',
					type: 'url'
				},
				{
					label: 'Website',
					name: 'guest_2_website',
					type: 'url'
				},
				{
					label: 'GitHub username',
					name: 'guest_2_github',
					type: 'text'
				},
				{
					label: 'Discord username',
					name: 'guest_2_discord',
					type: 'text'
				},
				{
					label: 'Twitter/X username',
					name: 'guest_2_twitter',
					type: 'text'
				}
			]
		}
	];
</script>

<script>
	import all_hosts from '$lib/hosts.js';
	import all_guests from '$lib/guests.js';

	const { data } = $props();

	const hosts = data.hosts.map((name) => all_hosts.find((h) => h.name === name));
	const guests = data.guests.map((name) => all_guests.find((h) => h.name === name));
</script>

<article class="flex flex-col justify-between p-16" style="background-color: #E9F6FF;">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="flex justify-between font-extrabold align-center text-9xl" style="color: #FC4100;">
				This Week in Svelte
			</h1>
		</div>
		<div
			class="flex items-center justify-center w-48 h-48 font-mono font-bold leading-none text-white rounded-full text-8xl"
			style="background-color: #FC4100;"
		>
			{data.episode_number}
		</div>
	</div>

	<div>
		<ol class="space-y-10 font-semibold text-balance text-8xl text-slate-800">
			{#each data.content as line}
				<li>{line}</li>
			{/each}
		</ol>
	</div>

	<div class="flex gap-32">
		<div>
			<div class="mb-6 text-5xl font-black uppercase" style="color: #280274;">Hosted by</div>
			<div class="flex {hosts.length >= 2 && guests.length >= 1 ? '' : 'gap-16'}">
				{#if hosts.length >= 2 && guests.length >= 1}
					{#each hosts as host}
						<img class="w-32 h-32 rounded-full" src={host.image} alt="" />
					{/each}
				{:else}
					{#each hosts as host}
						<div class="flex items-center justify-center gap-4">
							<img class="w-32 h-32 rounded-full" src={host.image} alt="" />
							<div class="flex flex-col gap-1">
								<div class="text-6xl font-semibold">{host.name}</div>
								{#if host.github}
									<div class="flex items-center gap-2">
										<svg
											class="block"
											width="60"
											height="60"
											fill="currentColot"
											viewBox="0 0 256 256"
											><path
												d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
											></path></svg
										>
										<span class="text-6xl">
											@{host.github}
										</span>
									</div>
								{:else if host.twitter}
									<div class="flex items-center gap-2">
										<svg
											class="block"
											width="60"
											height="60"
											fill="currentColor"
											viewBox="0 0 256 256"
										>
											<path
												d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"
											>
											</path>
										</svg>
										<span class="text-6xl">
											@{host.twitter}
										</span>
									</div>
								{:else if host.discord}
									<div class="flex items-center gap-2">
										<svg
											class="block"
											width="60"
											height="60"
											fill="currentColor"
											viewBox="0 0 256 256"
										>
											<path
												d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"
											>
											</path>
										</svg>
										<span class="text-6xl">
											@{host.discord}
										</span>
									</div>
								{:else if host.website}
									<div class="flex items-center gap-2">
										<svg
											class="block"
											width="60"
											height="60"
											fill="currentColor"
											viewBox="0 0 256 256"
										>
											<path
												d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"
											>
											</path>
										</svg>
										<span class="text-6xl">
											{host.website}
										</span>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
		{#if guests?.length}
			<div>
				<div class="mb-6 text-5xl font-black uppercase" style="color: #280274;">Guests</div>
				<div class="flex gap-16">
					{#each guests as guest}
						<div class="flex items-center justify-center gap-4">
							<img class="w-32 h-32 rounded-full" src={guest.image} alt="" />
							<div class="flex flex-col gap-1">
								<div class="text-6xl font-semibold">{guest.name}</div>
								{#if guest.github}
									<div class="flex items-center gap-2">
										<svg
											class="block"
											width="60"
											height="60"
											fill="currentColot"
											viewBox="0 0 256 256"
										>
											<path
												d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
											>
											</path>
										</svg>
										<span class="text-6xl">
											@{guest.github}
										</span>
									</div>
								{:else if guest.twitter}
									<div class="flex items-center gap-2">
										<svg
											class="block"
											width="60"
											height="60"
											fill="currentColor"
											viewBox="0 0 256 256"
										>
											<path
												d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"
											>
											</path>
										</svg>
										<span class="text-6xl">
											@{guest.twitter}
										</span>
									</div>
								{:else if guest.discord}
									<div class="flex items-center gap-2">
										<svg
											class="block"
											width="60"
											height="60"
											fill="currentColor"
											viewBox="0 0 256 256"
										>
											<path
												d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"
											>
											</path>
										</svg>
										<span class="text-6xl">
											@{guest.discord}
										</span>
									</div>
								{:else if guest.website}
									<div class="flex items-center gap-2">
										<svg
											class="block"
											width="60"
											height="60"
											fill="currentColor"
											viewBox="0 0 256 256"
										>
											<path
												d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"
											>
											</path>
										</svg>
										<span class="text-6xl">
											{guest.website}
										</span>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</article>

<style>
	article {
		width: 1920px;
		height: 1080px;
	}
</style>
