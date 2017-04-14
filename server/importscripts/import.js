var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

// Use native promises
mongoose.Promise = global.Promise;
// assert.equal(query.exec().constructor, global.Promise);

var SnippetSchema = require('../snippet.schema.js');
var Snippet = mongoose.model('Snippet', SnippetSchema);

var saveSnip1 = new Promise(function(resolve, reject) {

	snippet = new Snippet({
		id: 7,
		image: "images/css-1.png",
		answer: "css",
		answerId: 2,
		category: "languages",
		difficulty: 1
	});

	snippet.save(function(err, newSnippet) {
		if (err) {
			reject('Not saved');
		} else {
			resolve('Saved');
		}
	}
	);
});

var saveSnip2 = new Promise(function(resolve, reject) {

	snippet = new Snippet({
	id: 8,
	image: "images/html-1.png",
	answer: "html",
	answerId: 1,
	category: "languages",
	difficulty: 1
});

	snippet.save(function(err, newSnippet) {
		if (err) {
			reject('Not saved');
		} else {
			resolve('Saved');
		}
	}
	);
});

saveSnip1.then(function(res) {
	console.log('Doni with first import');
	saveSnip2.then(function(res){
		console.log('Done with all Imports');
		process.exit();
	}, function(err) {
		console.log('Error with Import');
		process.exit();
	})
}, function(err) {
	console.log('Error with Import');
	process.exit();
});
