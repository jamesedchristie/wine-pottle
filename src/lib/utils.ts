export async function post(endpoint: string, data: any): Promise<any> {
	const response = await fetch(endpoint, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data || {}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
    return await response.json();
}