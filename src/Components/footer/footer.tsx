import React from "react";
import { FooterI } from "../../mock/link_data";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import {
  GitHub,
  Twitter,
  Instagram,
  YouTube,
  Facebook,
  LinkedIn,
  WhatsApp,
  Email,
} from "@mui/icons-material";

interface Footer {
  footer: FooterI;
}

function FooterComponent(props: Footer) {
  const { fontColor, fontSize, icons, text } = props.footer;
  const iconsName = Object.keys(icons);
  console.log(icons);
  // console.log(iconsName); isme icons k name aa rhe hai
  return (
    <div>
      {
        <AppBar
          position="fixed"
          color="default"
          style={{ top: "auto", bottom: 0 }}
        >
          <Typography sx={{ color: fontColor, fontSize }}>{text}</Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "15px 30px",
            }}
          >
            {iconsName.map((icon, index) => (
              <a href={icons[icon]["imgLink"]} target="_blank">
                <img
                  src={icons[icon]["imgUrl"]}
                  style={{ width: "30px", objectFit: "contain" }}
                />
              </a>
            ))}
          </div>
        </AppBar>
      }
    </div>
  );
}

export default FooterComponent;
