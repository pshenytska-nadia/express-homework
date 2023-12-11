const createError = require('http-errors');

const validateBody = (requiredFields) => (req, res, next) => {
	const requestContent = req.body;

	const missingFields = requiredFields.filter(
		(prop) => !(prop in requestContent),
	);

	if (missingFields.length > 0) {
		next(
			createError(400, {
				message: `Bad Request: Missing required properties: ${missingFields.join(
					', ',
				)}`,
			}),
		);
	}

	next();
};

const uniqueEmail = async (req, res, next) => {
	const users = await (await fetch('http://localhost:3000/users')).json();

	const user = req.body;
	const index = users.findIndex((u) => u.email === user.email);

	if (index !== -1) {
		console.log('exists');
		next(
			createError(409, {
				message: `Conflict: User with email ${user.email} already exists`,
			}),
		);
	}
	next();
};

const userNotFound = async (req, res, next) => {
	const users = await (await fetch(`http://localhost:3000/users`)).json();

	const { email } = req.params;
	const userIndex = users.findIndex((u) => u.email == email);

	if (userIndex === -1) {
		next(
			createError(404, {
				message: `Conflict: User with email ${email} NOT FOUND`,
			}),
		);
	}

	req.params = {
		email: email,
		index: userIndex,
	};

	next();
};

module.exports = { validateBody, uniqueEmail, userNotFound };
