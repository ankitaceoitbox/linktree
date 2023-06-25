import React from "react";
import "./header.css";
import { HeadingI } from "../../mock/link_data";
export interface HeaderI {
  header: HeadingI;
  logoUrl: string;
}

function HeaderComponent(props: HeaderI) {
  const { header } = props;
  const h2Styling = {
    color: header.color,
    fontSize: header.fontSize,
  };
  return (
    <>
      <div>
        <img className="headerImg" src={props.logoUrl} />
      </div>
      <div className="headertext">
        <h2 style={h2Styling}>{props.header.text}</h2>
      </div>
    </>
  );
}

export default HeaderComponent;
