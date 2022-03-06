import PostSumaryItem from "./PostSummaryItem.js";
import post from "./post.json";

const PostSummaryList = () => {
    return(
        <div class='suggested-posts'>
            {post.map((post) => {
                return <PostSumaryItem post={post} />;
            })}
        </div>
    );
    
}

export default PostSummaryList;