import { Box } from "@mui/system";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%", // Adjust as needed
    height: "100%", // Adjust as needed
  },
};
const home = ({ children }) => {
  return <Box style={styles.container}>{children}</Box>;
};

export default home;
