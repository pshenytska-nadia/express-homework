const express = require('express')
const router = express.Router()
const { getUsers, getUserByEmail, addUser, updateUser, deleteUser } = require('../controllers/users.controller')

router.get('/', getUsers)
router.post('/', addUser)
router.get('/:email', getUserByEmail)
router.put('/:email', updateUser)
router.delete('/:email', deleteUser)

module.exports = router