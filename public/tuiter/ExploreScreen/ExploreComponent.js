import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
    <div class="searchbar">
    <i class="fa fa-search" aria-hidden="true"></i>
    <input placeholder="Search Tuiter" class="form-control" id="inputPassword">
    
    <a href="./explore-settings.html" target="_blank"><i class='fa fa-gear fa-lg fa-gear-custom'></i>
    
    </a>

</div>


<div class="tabbable" id="tabs-352184">
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link show text-muted fw-bold" href="#tab1" data-toggle="tab">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-muted fw-bold" href="#tab2" data-toggle="tab">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-muted fw-bold" href="#tab2" data-toggle="tab">News</a>
        </li>

        <li class="nav-item">
            <a class="nav-link text-muted fw-bold" href="#tab2" data-toggle="tab">Sports</a>
        </li>

        <li class="nav-item d-sm-none">
            <a class="nav-link text-muted fw-bold" href="#tab2" data-toggle="tab">Entertainment</a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="panel-32255">
            <p>
                <!-- I'm in Section 1. -->
            </p>
        </div>
        <div class="tab-pane" id="tab2">
            <p>
                <!-- Howdy, I'm in Section 2. -->
            </p>
        </div>
    </div>


</div>
<div class="star-img-container">
    <h1>SpaceX's Starship</h1>
    <img class="w-100" alt="Bootstrap Image Preview" src="../images/starship.jpg" />

</div>

  

        ${PostSummaryList()}
    `);
}

export default ExploreComponent;