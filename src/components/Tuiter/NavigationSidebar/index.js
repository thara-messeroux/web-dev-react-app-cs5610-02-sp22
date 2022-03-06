import React from "react";
import "./nav.css";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group">
        
        
        <ul className="nav flex-column nav-pills">
            <li className="nav-item">
                <i className="fa fa-brands fa-twitter"></i>
            </li>
    <li className="nav-item">
        <a className="nav-link text-dark d-flex" href="#">
            <i className="fa fa-home pt-1" aria-hidden="true"></i>
            <span className="d-sm-none d-lg-block bold">Home</span></a>
    </li>
    <li className="nav-item">
        <a className="nav-link active d-flex" href="#">
            <i className="fa fa-hashtag pt-1" aria-hidden="true"></i>
            <span className="d-sm-none d-lg-block bold">Explore</span></a>
    </li>
    <li className="nav-item">
        <a className="nav-link text-dark d-flex" href="#">
            <i className="fa fa-bell pt-1" aria-hidden="true"></i>
            <span className="d-sm-none d-lg-block bold">Notifications</span></a>
    </li>
    <li className="nav-item">
        <a className="nav-link text-dark d-flex" href="#">
            <i className="fa fa-envelope pt-1" aria-hidden="true"></i>
            <span className="d-sm-none d-lg-block bold">Messages</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link text-dark d-flex" href="#">
            <i className="fa fa-bookmark pt-1" aria-hidden="true"></i>
             <span className="d-sm-none d-lg-block bold">Bookmarks</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link text-dark d-flex" href="#">
            <i className="fa fa-list-ul pt-1" aria-hidden="true"></i>
            <span className="d-sm-none d-lg-block bold">Lists</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link text-dark d-flex" href="#">
            <i className="fa fa-user pt-1" aria-hidden="true"></i>
            <span className="d-sm-none d-lg-block bold">Profile</span></a>
        
    </li>
    <li className="nav-item mb-2">
        <a className="nav-link text-dark d-flex" href="#">
            <i className="fa fa-ellipsis-h pt-1" aria-hidden="true"></i>
            <span className="d-sm-none d-lg-block bold">More</span></a>
    </li>
</ul>

        
        <button
          type="button"
          className="btn btn-block btn-primary rounded-pill w-100">
          Tuit
        </button>
      </div>
    </>
  );
};
export default NavigationSidebar;
