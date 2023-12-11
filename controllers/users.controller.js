const users = require('../data/users');

const getUsers = (req, res) => {
	res.status(200).json(users);
};

const getUserByEmail = (req, res) => {
	const { index } = req.params;
	res.status(200).json(users[index]);
};

const addUser = (req, res) => {
	const user = {
		...req.body,
		createdAt: new Date(),
	};
	users.push(user);

	res.status(200).json(user);
};

const updateUser = (req, res) => {
	const { index, email } = req.params;

	const user = { ...req.body, email: email };
	users[index] = {
		...users[index],
		...user,
	};

	res.status(200).json(users[index]);
};

const deleteUser = (req, res) => {
	const { index } = req.params;

	users.splice(index, 1);
	res.status(200).json(users);
};

module.exports = {
	getUsers,
	getUserByEmail,
	addUser,
	updateUser,
	deleteUser,
};
