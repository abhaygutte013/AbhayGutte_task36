function PostList({ posts }) {
  return (
    <div className="card">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>
              <strong>User:</strong> {post.user.name}
            </p>
            <p>
              <strong>Email:</strong> {post.user.email}
            </p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
export default PostList;