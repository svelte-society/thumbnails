/** @type {import('./$types').PageLoad} */
export async function load(event) {
	const data = event.url.searchParams.get('data');

	const {
		episode_number = 88,
		hosts = ['Paolo Ricciuti'],
		guests = [],
		content = [
			'Changelog',
			'Live coding local storage'
		]
	} = data ? JSON.parse(data) : {};

	return {
		episode_number,
		hosts,
		guests,
		content
	};
}
