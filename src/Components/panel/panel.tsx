import * as React from "react";
import "./panel.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BoxI, LinkTree } from "../../mock/link_data";
import { Button, Link, makeStyles } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface PanelComponentProps {
  linkdata: LinkTree;
  box: BoxI;
}

export default function PanelComponent({ linkdata, box }: PanelComponentProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  console.log(box);
  const handleChange =
    (panel: string, status: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (status === "Close") {
        setExpanded(false);
      } else {
        setExpanded(isExpanded ? panel : false);
      }
    };

  const checkLink = (linkData: PanelComponentProps["linkdata"]) => {
    if (linkData.linktype === "Normal Link") {
      return "Close";
    }
    return "Open";
  };

  const renderLink = (linkData: LinkTree) => {
    if (
      linkData.linktype === "Drive Video" ||
      linkData.linktype === "Youtube Video"
    ) {
      return (
        <>
          <iframe
            src={linkData.link}
            title="Drive Video"
            allowFullScreen
            height="300px"
            width="100%"
            style={{ objectFit: "contain" }}
          />
        </>
      );
    } else if (linkData.linktype === "Normal Link") {
      return (
        <>
          <Link
            href={linkData.link}
            target="_blank"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                color: box.fontColor,
                textAlign: "center",
                fontFamily: box.fontFamily,
              }}
            >
              {linkData.description}
            </Typography>
          </Link>
        </>
      );
    } else if (
      linkData.linktype === "Normal Image Link" ||
      linkData.linktype === "Drive Image Link"
    ) {
      return (
        <>
          <img
            src={linkData.link}
            style={{ height: "300px", width: "100%", objectFit: "contain" }}
          />
        </>
      );
    }
  };

  return (
    <div className="panel-container">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1", checkLink(linkdata))}
        sx={{
          backgroundColor: box.bgColor,
          "&:hover": {
            backgroundColor: box.fontColorHover,
            transition: "all .5s linear 0s",
          },
        }}
      >
        <AccordionSummary
          expandIcon={checkLink(linkdata) === "Open" && <ExpandMoreIcon />}
          aria-controls="panel1bh-content"
        >
          <Typography sx={{ width: "10%", flexShrink: 0 }}>
            <img src={linkdata.logoURL} alt="Logo" style={{ width: "20px" }} />
          </Typography>
          {checkLink(linkdata) === "Close" ? (
            renderLink(linkdata)
          ) : (
            <Typography
              sx={{
                color: box.fontColor,
                textAlign: "center",
                flexGrow: 1,
                fontFamily: box.fontFamily,
              }}
            >
              {checkLink(linkdata) === "Close"
                ? renderLink(linkdata)
                : linkdata.description}
            </Typography>
          )}
        </AccordionSummary>
        {checkLink(linkdata) === "Open" && (
          <AccordionDetails>
            <Typography sx={{ flexGrow: 1, fontFamily: box.fontFamily }}>
              {renderLink(linkdata)}
            </Typography>
            <Button onClick={() => void setExpanded(false)}>
              <CloseIcon />
            </Button>
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
}
