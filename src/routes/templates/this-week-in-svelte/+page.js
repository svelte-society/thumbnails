/** @type {import('./$types').PageLoad} */
export async function load(event) {
	const data = event.url.searchParams.get('data');

	const {
		episode_number = 100,
		hosts = ['Paolo Ricciuti'],
		guests = ['Bruno'],
		content = [
			'Changelog',
			'Showcase: manifest.build'
		]
	} = data ? JSON.parse(data) : {};

	return {
		episode_number,
		hosts,
		guests,
		content
	};
}
