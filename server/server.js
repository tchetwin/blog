var express = require('express');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var posts = require('./posts.js');

app.get('/posts', function (req, res) {
    posts.getAll(function (err, blogPosts) {
	if (err) {
            console.error("TODO: Return error when can't getAll");
	}
        console.log(blogPosts);
        res.send(blogPosts);
    });
});

app.post('/post', function (req, res) {
    var title = req.body.title;
    var text = req.body.text;

    posts.add(title, text, function (err) {
	if (err) {
            console.error("TODO: Return error when can't add");
	}
        console.log("Success");
	res.send();
    });
});

// app.get('/posts/:title/:text', function (req, res) {
//     var title = req.params.title;
//     var text = req.params.text;
//     posts.add(title, text);
//     res.send("Dun");
//     // res.send(blogPosts[req.params.id % blogPosts.length]);
// });

app.use(function (req, res, next) {
    res.status(404)
    res.send("Not found at " + req.url);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
