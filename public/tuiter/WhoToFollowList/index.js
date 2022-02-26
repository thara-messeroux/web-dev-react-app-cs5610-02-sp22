import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <h3>
             Who to follow
        </h3>
            ${who.map(person => {
                return (WhoToFollowListItem(person));
            }).join('')
        }
    `);
}
export default WhoToFollowList;