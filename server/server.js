var express = require('express');
var app = express();

var posts = [
    { title: "Hello dawg", text: "Lol u reek"},
    { title: "Dingus"    , text: "Lol u reek" },
    { title: "Weiner"    , text: "Lol u reek" },
    { title: "Cats"      , text: "Lol u reek" },
];


app.get('/posts', function (req, res) {
    res.send(posts);
});

app.get('/posts/:id', function (req, res) {
    res.send(posts[req.params.id % posts.length]);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
