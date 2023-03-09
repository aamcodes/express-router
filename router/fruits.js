const express = require('express');
const router = express.Router();

// List of Fruits
let fruits = [
	{
		name: 'Apple',
		color: 'Red',
	},
	{
		name: 'Banana',
		color: 'Yellow',
	},
	{
		name: 'Kiwi',
		color: 'Green',
	},
	{
		name: 'Grape',
		color: 'Purple',
	},
];

router.get('/', (req, res) => {
	res.status(200).json(fruits);
});

router.get('/:id', (req, res) => {
	let { id } = req.params;
	res.status(200).json(fruits[id - 1]);
});

module.exports = router;
