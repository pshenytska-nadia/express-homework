const users = require('../data/users')

const getUsers = (req, res) => {
    res.status(200).json(users)
}

const getUserByEmail = (req, res) => {
    const email = req.params.email
    const user = users.find(u => u.email == email)

    if (!user) {
        res.status(404).json({ msg: 'user not found' })
    }

    res.status(200).json(user)
}

const addUser = (req, res) => {
    const user = req.body
    users.push(user)

    res.status(200).json(users)
}

const updateUser = (req, res) => {
    const email = req.params.email
    const userIndex = users.findIndex(u => u.email == email)

    const user = { ...req.body, email: email }
    users[userIndex] = {
        ...users[userIndex],
        ...user
    }

    res.status(200).json(users[userIndex])
}

const deleteUser = (req, res) => {
    const email = req.params.email
    const userIndex = users.findIndex(u => u.email == email)

    users.splice(userIndex, 1)
    res.status(200).json(users)
}

module.exports = {
    getUsers,
    getUserByEmail,
    addUser,
    updateUser,
    deleteUser
}