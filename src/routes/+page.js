/** @type {import('./$types').PageLoad} */
export async function load(event) {
	const values = Object.fromEntries(event.url.searchParams.entries());

	return {
		values
	};
}
