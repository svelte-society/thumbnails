/** @type {import('./$types').PageLoad} */
export async function load(event) {
	const data = event.url.searchParams.get('data');

	const {
		episode_number = 94,
		hosts = ['Paolo Ricciuti'],
		guests = ['Alexander Demin'],
		content = [
			'Changelog',
			'Go + Svelte as a hybrid SPA/MPA application'
		]
	} = data ? JSON.parse(data) : {};

	return {
		episode_number,
		hosts,
		guests,
		content
	};
}
