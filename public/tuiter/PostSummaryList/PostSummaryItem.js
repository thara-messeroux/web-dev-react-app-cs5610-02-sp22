const PostSummaryItem = (post) => {
    return(`
    <div class="suggested-post">
    <div class="left-content">
    <p class="trending">${post.topic}</p>
    <h5>${post.userName}

        <i class="fa fa-check-circle" aria-hidden="true"></i>
        <span class="trending"> -2h</span>
    </h5>

    <h6>${post.title}</h6>
</div>

<div class="right-content">
    <img src=${post.image} alt="">
</div>
    </div>
    `);
}
export default PostSummaryItem;
