import NavigationSidebar from "../NavigationSideBar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row">

            <div class="col-sm-2 col-md-3">
                ${NavigationSidebar()}
            </div>

            <div class="col">
                ${ExploreComponent()}
            </div>
            
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 right-sidebar">
                ${WhoToFollowList()}
            </div>

        </div>
    `);
})($);
