import PostSumaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return(`
        <div class='suggested-posts'>
            ${post.map(post => {
                return PostSumaryItem(post);
            }).join('')
            }
        </div>
    `);
}

export default PostSummaryList;