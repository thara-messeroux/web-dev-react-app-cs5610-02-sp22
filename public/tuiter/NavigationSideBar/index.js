const NavigationSidebar = () => {
    return (`
    <ul class="nav flex-column nav-pills">
    <li class="nav-item">
        <i class="fa fa-brands fa-twitter"></i>
    </li>
    <li class="nav-item">
        <a class="nav-link text-dark d-flex" href="#">
            <i class="fa fa-home pt-1" aria-hidden="true"></i>

            <span class="d-sm-none d-lg-block bold">Home</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link active d-flex" href="#">

            <i class="fa fa-hashtag pt-1" aria-hidden="true"></i>
            <span class="d-sm-none d-lg-block bold">Explore</span></a>

        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-dark d-flex" href="#">
            <i class="fa fa-bell pt-1" aria-hidden="true"></i>
            <span class="d-sm-none d-lg-block bold">Notifications</span></a></a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-dark d-flex" href="#">
            <i class="fa fa-envelope pt-1" aria-hidden="true"></i>
            <span class="d-sm-none d-lg-block bold">Messages</span></a>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-dark d-flex" href="#">
            <i class="fa fa-bookmark pt-1" aria-hidden="true"></i>
             <span class="d-sm-none d-lg-block bold">Bookmarks</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-dark d-flex" href="#">
            <i class="fa fa-list-ul pt-1" aria-hidden="true"></i>
            <span class="d-sm-none d-lg-block bold">Lists</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-dark d-flex" href="#">
            <i class="fa fa-user pt-1" aria-hidden="true"></i>
            <span class="d-sm-none d-lg-block bold">Profile</span></a>
        
    </li>
    <li class="nav-item mb-2">
        <a class="nav-link text-dark d-flex" href="#">
            <i class="fa fa-ellipsis-h pt-1" aria-hidden="true"></i>
            <span class="d-sm-none d-lg-block bold">More</span></a>
    </li>


</ul>
<button type="button" class="btn btn-block btn-primary rounded-pill w-100">
    Tuit
</button>
    `);
}
export default NavigationSidebar;