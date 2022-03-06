import PostItem from "./PostItem.js";
import posts from "./posts.json"

const PostList = () => {
    console.log(posts)
    return(
        <div class='list-group'>
            {posts.map((post) => {
                return <PostItem post={post} />;
            })}
        </div>
    );
}

export default PostList;