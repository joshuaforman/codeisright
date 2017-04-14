const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

// Use native promises
mongoose.Promise = global.Promise;
// assert.equal(query.exec().constructor, global.Promise);

const SnippetSchema = require('../snippet.schema.js');
const Snippet = mongoose.model('Snippet', SnippetSchema);

	const snip1 = new Snippet({
		id: 7,
		image: "images/css-1.png",
		answer: "css",
		answerId: 2,
		category: "languages",
		difficulty: 1
	});

	const snip2 = new Snippet({
		id: 8,
		image: "images/html-1.png",
		answer: "html",
		answerId: 1,
		category: "languages",
		difficulty: 1
	});

	const snip3 = new Snippet({
		id: 9,
		image: "images/js-1.png",
		answer: "js",
		answerId: 3,
		category: "languages",
		difficulty: 1
	});

const saveSnip = function(snippet) {
	console.log('about to save: ', snippet);
	return snippet.save();
}

saveSnip(snip1)
	.then(saveSnip(snip2))
	.then(saveSnip(snip3))
	.then( function() {
		console.log('saved');
		process.exit();
	});
