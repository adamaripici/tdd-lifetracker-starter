import { Link } from "react-router-dom"
import "./Post.css"

export default function Post({ post, user }) {
  const userOwnsPost = user?.email && post?.userEmail === user?.email

  return (
    <div className="Post">
      <Link
        className="media"
        style={{
          backgroundImage: `url(${post.imageUrl})`,
        }}
        to={`/posts/${post.id}`}
      ></Link>

      <div className="body">
        <div className="info">
          <p className="caption">{post.caption}</p>
        </div>

        <div className="meta">
          <span className="date">{(post.createdAt)}</span>
          {/* <span className="user">
            {userOwnsPost ? "You" : post.userEmail}
            {userOwnsPost ? (
              <Link to={`/posts/${post.id}`}>
                <i className="material-icons">edit</i>
              </Link>
            ) : null}
          </span> */}
        </div>
      </div>
    </div>
  )
}