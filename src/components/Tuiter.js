import React from "react";
import {Link} from "react-router-dom";
const Tuiter = () => {
  return(
      <>
        <h1>Tuiter</h1>
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/labs">
          Labs
        </Link>
      </>
  )
};
export default Tuiter;

// const Tuiter = () => {
//   return(
//       <div>
//         <h1>Tuiter</h1>
//         <h2>Home</h2>
//         <h2>Explore</h2>
//         <h2>Profile</h2>
//         <h2>Bookmarks</h2>
//         <h2>More</h2>
//       </div>
//   );
// };
//
// export default Tuiter;