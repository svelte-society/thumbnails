import puppeteer from 'puppeteer';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	const params = Object.fromEntries(await event.request.formData());

	await page.goto('http://localhost:5173/?' + new URLSearchParams({ ...params, _full: '' }).toString(), {
		waitUntil: 'networkidle2'
	});

	const thumbnail_element = await page.waitForSelector('#thumbnail');

	if (!thumbnail_element) {
		return new Response('an error occurred', { status: 500 });
	}

	const bounding_box = await thumbnail_element.boundingBox();

	if (!bounding_box) {
		return new Response('an error occurred', { status: 500 });
	}

	await page.setViewport({ width: bounding_box.width, height: bounding_box.height });

	const image_buffer = await thumbnail_element?.screenshot({ omitBackground: true });

	await browser.close();

	return new Response(image_buffer, {
		headers: {
			'content-type': 'image/png',
			'content-disposition': 'attachment; filename="thumbnail.png'
		}
	});
}
