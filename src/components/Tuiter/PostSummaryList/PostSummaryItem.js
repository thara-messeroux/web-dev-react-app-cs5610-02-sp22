const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../images/react-blue.png",
  },
}) => {
  return (
    // <> React Fragments
    <>
    <div className="suggested-post">
      <div className="left-content">
        <p className="trending">{post.topic}</p>
        <h5>
          {post.userName}
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          <span className="trending"> -2h</span>
        </h5>

        <h6>{post.title}</h6>
      </div>

      <div className="right-content">
        <img src={post.image} alt="post" />
      </div>
    </div>
    </>
  );
};
export default PostSummaryItem;
