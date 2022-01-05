import React from "react";
import "./menu-item.styles.scss";
/* REACT COMPONENT USING NORMAL FUNCTION */
// export default function MenuItem(props) {
//   return (
//     <div className="menu-item">
//       <div className="content">
//         <h1 className="title">HATS</h1>
//         <span className="sub-title">SHOP NOW</span>
//       </div>
//     </div>
//   );
// }

/* REACT COMPONENT USING ARROW FUNCTION */
const MenuItem = (props) => (
  <div className={`${props.section.size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${props.section.imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{props.section.title.toUpperCase()}</h1>
      <span className="sub-title">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;
