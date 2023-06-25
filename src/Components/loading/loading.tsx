import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function LoaderComponent() {
  return (
    <Box sx={{ width: "60%" }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}
