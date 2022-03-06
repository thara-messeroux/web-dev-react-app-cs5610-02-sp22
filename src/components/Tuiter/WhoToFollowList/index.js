import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return (
    <>
        <h3>
                Who to follow
        </h3>
      {who.map((who) => {
        return <WhoToFollowListItem who={who} />;
      })}
    </>
  );
};
export default WhoToFollowList;