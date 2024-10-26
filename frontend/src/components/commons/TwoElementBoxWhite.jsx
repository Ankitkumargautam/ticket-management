import { Box, Typography } from "@mui/material";
import styles from "../TripDetailsModal/TripDetailsModalStyles";

const TwoElementBoxWhite = ({ firstElement, secondElement }) => {
  return (
    <Box sx={styles.fifthRowBoxInner}>
      <Typography variant="p" sx={styles.fifthRowBoxInnerFirst}>
        {firstElement === "" ? <>&nbsp;</> : firstElement}
      </Typography>

      <Typography variant="p" sx={styles.fifthRowBoxInnerSecond}>
        {secondElement}
      </Typography>
    </Box>
  );
};

export default TwoElementBoxWhite;
