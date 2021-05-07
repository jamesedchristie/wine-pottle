export async function respond(body) {
	if (body.errors) {
		return { status: 401, body };
	}

	const user = body.user;
    const json = JSON.stringify(await user.getIdToken());
	const value = Buffer.from(json).toString('base64');

	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body
	};
}