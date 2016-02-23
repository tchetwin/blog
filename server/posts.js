var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

var Post = mongoose.model('Post', { title: String, text: String });

module.exports = {
    getAll: function(callback) {
	Post.find(function (err, posts) {
	    if (err) {
	        console.error("Error!", err);
		return [];
	    }
	    // TODO Map mongo specific _id to id
	    console.log(posts);
	    callback(null, posts);
	});
        // return [
        //     { title: "Hello World",
        //       text: "Lorem ipsum etc etc etc. A very long post.",
        //       id: 1 }
        // ];
    },
    add: function(title, text, callback) {
	console.log("Dingis", title, text);
        var post = new Post({ text: text, title: title });
        post.save(callback);
    }
    // add: function(title, text) {
    //     var post = new Post({ text: text, title: title });
    //     post.save(function (err) {
    //         if (err) {
    //             console.log("Error!");
    //         }
    //     }
    // }
};
