const express = require('express');
const router = express.Router();
const {
	getUsers,
	getUserByEmail,
	addUser,
	updateUser,
	deleteUser,
} = require('../controllers/users.controller');
const {
	validateBody,
	uniqueEmail,
	userNotFound,
} = require('../middleware/users.mdware');

router.get('/', getUsers);

router.post(
	'/',
	validateBody(['firstName', 'lastName', 'email', 'password']),
	uniqueEmail,
	addUser,
);

router.get('/:email', userNotFound, getUserByEmail);

router.put('/:email', userNotFound, updateUser);

router.delete('/:email', userNotFound, deleteUser);

module.exports = router;
