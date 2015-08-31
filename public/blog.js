var Blog = React.createClass({
  render: function() {
    var posts = this.props.posts;
    console.log(posts);
    return (
      <div className="blog">
	{posts.map(function(result) {
	    return <BlogPost post={result} />
	})}
      </div>
    );
  }
});

var BlogPost = React.createClass({
  render: function() {
    var post = this.props.post;
    return (
      <div className="blogPost panel panel-default">
        <div className="panel-heading">
	  {post.title}
	</div>
        <div className="panel-body">
	  {post.text}
	</div>
      </div>
    );
  }
});
