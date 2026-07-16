import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <CircularProgress size={60} />
    </Box>
  );
};

export default Spinner;