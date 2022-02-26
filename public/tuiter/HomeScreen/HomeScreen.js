import NavigationSidebar from "../NavigationSideBar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">

            <div class="col-sm-2 col-md-3">
                ${NavigationSidebar()}
            </div>

            <div class="col">
                ${PostList()}
            </div>
            
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${PostSummaryList()}
            </div>

        </div>
    `);
})($);