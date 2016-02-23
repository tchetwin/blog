"use strict";

var Blog = React.createClass({
  displayName: "Blog",

  getInitialState: function getInitialState() {
    return { posts: [] };
  },
  componentDidMount: function componentDidMount() {
    $.getJSON('/api/posts', (function (data) {
      this.setState({ posts: data });
    }).bind(this));
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "blog-posts col-sm-12" },
      this.state.posts.map(function (post) {
        return React.createElement(BlogPost, { key: post._id, post: post });
      }),
      React.createElement(BlogEntry, null)
    );
  }
});

var BlogPost = React.createClass({
  displayName: "BlogPost",

  render: function render() {
    var post = this.props.post;
    return React.createElement(
      "div",
      { className: "blog-post panel panel-default" },
      React.createElement(
        "div",
        { className: "panel-heading" },
        post.title
      ),
      React.createElement(
        "div",
        { className: "panel-body" },
        post.text
      )
    );
  }
});

var BlogEntry = React.createClass({
  displayName: "BlogEntry",

  handleSubmit: function handleSubmit(e) {
    e.preventDefault(); // TODO Wat
    var title = React.findDOMNode(this.refs.title).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!title || !text) {
      return;
    }
    // TODO Persist
    // var request = new XMLHttpRequest();
    // request.open('POST', '/api/post', true);
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // request.send({ title: title, text: text });
    $.post('/api/post', { title: title, text: text });
    console.log(title, text);

    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function render() {
    return React.createElement(
      "form",
      { className: "blog-entry panel panel-default", onSubmit: this.handleSubmit },
      React.createElement("input", { type: "text", placeholder: "Title", ref: "title" }),
      React.createElement("br", null),
      React.createElement("input", { type: "text", placeholder: "Text", ref: "text" }),
      React.createElement("br", null),
      React.createElement("input", { type: "submit", value: "Post" })
    );
  }
});

React.render(React.createElement(Blog, { posts: [], className: "container" }), document.getElementById('blogPosts'));