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
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
											/></svg
										>
										<span>
											@{host.github}
										</span>
									</div>
								{:else if host.twitter}
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M4 4l11.733 16h4.267l-11.733 -16z"
											/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg
										>
										<span>
											@{host.twitter}
										</span>
									</div>
								{:else if host.discord}
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
											/><path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path
												d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
											/><path d="M7 16.5c3.5 1 6.5 1 10 0" /></svg
										>
										<span>
											@{host.discord}
										</span>
									</div>
								{:else if host.bluesky}
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z"
											/></svg
										>
										<span>
											@{host.bluesky}
										</span>
									</div>
								{:else if host.website}
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"
											/><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" /><path
												d="M12.5 3a16.989 16.989 0 0 1 1.828 4"
											/><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" /><path
												d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"
											/><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" /><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" /><path
												d="M17 10l1 4l1.5 -4l1.5 4l1 -4"
											/><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" /></svg
										>
										<span>
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
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
											/></svg
										>
										<span>
											@{guest.github}
										</span>
									</div>
								{:else if guest.twitter}
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M4 4l11.733 16h4.267l-11.733 -16z"
											/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg
										>
										<span>
											@{guest.twitter}
										</span>
									</div>
								{:else if guest.discord}
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
											/><path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path
												d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
											/><path d="M7 16.5c3.5 1 6.5 1 10 0" /></svg
										>
										<span>
											@{guest.discord}
										</span>
									</div>
								{:else if guest.bluesky}
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z"
											/></svg
										>
										<span>
											@{guest.bluesky}
										</span>
									</div>
								{:else if guest.website}
									<div class="flex items-center gap-2 text-6xl">
										<svg
											style="width:1em; height:1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"
											/><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" /><path
												d="M12.5 3a16.989 16.989 0 0 1 1.828 4"
											/><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" /><path
												d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"
											/><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" /><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" /><path
												d="M17 10l1 4l1.5 -4l1.5 4l1 -4"
											/><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" /></svg
										>
										<span>
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
