const WhoToFollowListItem = ({
  who = {
    avatarIcon: "./images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <div className="media d-flex justify-content-between mb-4">
      <div className="media-content d-flex justify-content-between">
        <img
          className="mr-3 img-fluid rounded-pill custom-img"
            style={
                {
                    height: "50px",
                    marginRight: "5px",
                    width: "50px",
                }
            }
          src={who.avatarIcon}
          alt="fluid"
        />
        <div className="media-body">
          <h5 className="mt-0">
            {who.userName}

            <i className="fa fa-check-circle" aria-hidden="true"></i>
          </h5>{" "}
          <span className="follow-id">@{who.handle}</span>
        </div>
      </div>
      <div className="ml-1"
        style={
            {
                marginLeft: "20%",
            }
        }
      >
        <button className="btn rounded-pill btn-follow">Follow</button>
      </div>
    </div>
  );
};
export default WhoToFollowListItem;
