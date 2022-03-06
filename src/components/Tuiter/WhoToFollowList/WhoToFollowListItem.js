import React from "react";
import "./index.css"
const WhoToFollowListItem = (
    {
      who = {
        avatarIcon: '../../../images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
      }
    }) => {


return (
    <>
      <div>
    <div className="media d-flex justify-content-between mb-4">
    <div className="media-content d-flex justify-content-between">
    <img className="mr-3 img-fluid rounded-pill custom-img features"
         // style="height: 50px; margin-right: 5px; width: 50px;" 
         src={who.avatarIcon} />
        {/*style="height: 50px; margin-right: 5px; width: 50px;" */}
      style={{
        height: 50px,
        marginRight: 5px,
        width: 50px,
    }}
      src={who.avatarIcon} />
    <div className="media-body">
        <h5 className="mt-0">
            {who.userName}

            <i className="fa fa-check-circle" aria-hidden="true"></i>

        </h5> <span className="follow-id">
            @{who.handle}
        </span>
    </div>
</div>


<div className="ml-1" style="margin-left: 20%;">
    <button className="btn rounded-pill btn-follow">Follow</button>
</div>
</div>

      </div>
    </>
);
}
export default WhoToFollowListItem;