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

router.post('/', (req, res) => {
	let { name, color } = req.body;
	if (!name || !color) {
		res.status(400).json({ message: 'All fields are required' });
	} else {
		fruits.push({
			name,
			color,
		});
		res.status(200).json(fruits);
	}
});

router.put('/:id', (req, res) => {
	let { id } = req.params;
	let { name, color } = req.body;
	let fruit = fruits[id - 1];
	name && (fruit.name = name);
	color && (fruit.color = color);
	res.status(201).json(fruits);
});

router.delete('/:id', (req, res) => {
	let { id } = req.params;
	fruits.splice(id - 1, 1);
	res.status(201).json(fruits);
});

module.exports = router;
