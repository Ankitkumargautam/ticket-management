import { Box, Typography } from "@mui/material";
import styles from "../TripDetailsModal/TripDetailsModalStyles";

const TwoElementBox = ({ firstElement, secondElement }) => {
  return (
    <Box sx={styles.secondRowBoxInner}>
      <Typography variant="p" sx={styles.secondRowBoxInnerFirst}>
        {firstElement}
      </Typography>

      <Typography variant="p" sx={styles.secondRowBoxInnerSecond}>
        {secondElement}
      </Typography>
    </Box>
  );
};

export default TwoElementBox;
