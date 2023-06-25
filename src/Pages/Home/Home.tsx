import React, { useState } from "react";
import PanelComponent from "../../Components/panel/panel";
import { SettingDataI } from "../../mock/link_data";
import { Button, Typography } from "@mui/material";
import "./Home.css";
import LoaderComponent from "../../Components/loading/loading";
import { GetLinksData } from "../../services/linkdata.service";
import HeaderComponent from "../../Components/header/header";
import FooterComponent from "../../Components/footer/footer";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [linksData, setLinksData] = useState([]);
  const [settingData, setSettingData] = useState<SettingDataI | null>(null);
  const [loader, setLoader] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const getPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return linksData.slice(startIndex, endIndex);
  };

  React.useEffect(() => {
    (async () => {
      try {
        const response = await GetLinksData();
        const { linksData, settingData } = response.data;
        console.log(linksData, settingData);
        const items = Math.ceil(linksData.length / itemsPerPage);
        setLinksData(linksData);
        setSettingData(settingData);
        setTotalPages(items);
        setLoader(false);
      } catch (e) {
        alert("Try again or referesh the page");
      }
      setLoader(false);
    })();
  }, []);

  return (
    <>
      {settingData && (
        <HeaderComponent
          header={settingData.heading}
          logoUrl={settingData.mainBody.logoImage}
        />
      )}
      {loader ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <LoaderComponent />
        </div>
      ) : (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {settingData &&
            getPageItems().map((data, idx) => (
              <React.Fragment key={idx}>
                <PanelComponent linkdata={data} box={settingData.box} />
                <br />
              </React.Fragment>
            ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            className="prev-next-container"
          >
            <Button
              variant="outlined"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              Next
            </Button>
          </div>
        </Typography>
      )}
      {settingData && (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Typography sx={{ marginTop: "15px", width: "95%" }}>
            <FooterComponent footer={settingData.footer} />
          </Typography>
        </div>
      )}
    </>
  );
}

export default HomePage;
