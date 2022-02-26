const WhoToFollowListItem = (who) => {
    return (`
    <div class="media d-flex justify-content-between mb-4">
    <div class="media-content d-flex justify-content-between">
    <img class="mr-3 img-fluid rounded-pill custom-img"
        style="height: 50px; margin-right: 5px; width: 50px;" src=${who.avatarIcon} />
    <div class="media-body">
        <h5 class="mt-0">
            ${who.userName}

            <i class="fa fa-check-circle" aria-hidden="true"></i>

        </h5> <span class="follow-id">
            @${who.handle}
        </span>
    </div>
</div>


<div class="ml-1" style="margin-left: 20%;">
    <button class="btn rounded-pill btn-follow">Follow</button>
</div>
</div>
    `);
}
export default WhoToFollowListItem;