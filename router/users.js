const express = require('express');
const router = express.Router();

// List of Users
let users = [
	{
		name: 'User 1',
		age: 30,
	},
	{
		name: 'User 2',
		age: 45,
	},
	{
		name: 'User 3',
		age: 27,
	},
	{
		name: 'User 4',
		age: 22,
	},
];

router.get('/', (req, res) => {
	res.status(200).json(users);
});

router.get('/:id', (req, res) => {
	let { id } = req.params;
	res.status(200).json(users[id - 1]);
});

router.post('/', (req, res) => {
	let { name, age } = req.body;
	if (!name || !age) {
		res.status(400).json({ message: 'All fields are required' });
	} else {
		users.push({
			name,
			age,
		});
		res.status(200).json(users);
	}
});

router.put('/:id', (req, res) => {
	let { id } = req.params;
	let { name, age } = req.body;
	let user = users[id - 1];
	name && (user.name = name);
	age && (user.age = age);
	res.status(201).json(users);
});

router.delete('/:id', (req, res) => {
	let { id } = req.params;
	users.splice(id - 1, 1);
	res.status(201).json(users);
});

module.exports = router;
