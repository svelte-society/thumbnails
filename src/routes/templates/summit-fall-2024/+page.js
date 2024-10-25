/** @type {import('./$types').PageLoad} */
export async function load(event) {
	const data = event.url.searchParams.get('data');

	const json = data ?? JSON.parse(data)

	return {
		title : 'Introducing sv — the new Svelte CLI',
		speaker: {
			name : 'Ben McCann',
			image_url : 'https://pbs.twimg.com/profile_images/3483508599/4e1237d520312fc5bac38c99338db010_400x400.jpeg'
		},
	}
}
