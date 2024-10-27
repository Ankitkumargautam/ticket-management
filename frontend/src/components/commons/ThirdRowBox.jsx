import styles from "../TripDetailsModal/TripDetailsModalStyles";
import { Box, Typography } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import DriverImg from "../../assets/AnkitKumarGautam.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const ThirdRowBox = ({ driver, index, isDriver }) => {
  return (
    <Box key={index} sx={styles.cardBox}>
      {/* First row: Image and Information */}
      <Box sx={styles.cardFirstRow}>
        <Box sx={styles.cardImageBox}>
          <img
            src={DriverImg}
            alt={`Driver ${index + 1}`}
            style={styles.cardImageStyle}
          />
        </Box>
        <Box sx={styles.cardInfoBox}>
          <Typography sx={styles.cardInfoBoxTextHeading} variant="p">
            {isDriver === true ? "Driver " : "Conductor "} {index + 1}
          </Typography>
          <Typography sx={styles.cardInfoBoxText} variant="p">
            Name: {driver?.name}
          </Typography>
          <Typography sx={styles.cardInfoBoxText} variant="p">
            ID: {driver?.Id}
          </Typography>
          <Typography sx={styles.cardInfoBoxText} variant="p">
            Licence No.: {driver?.licenseNo}
          </Typography>
          <Typography sx={styles.cardInfoBoxText} variant="p">
            Mobile No.: {driver?.contact}
          </Typography>
        </Box>
      </Box>

      {/* Second row: Check/Cross Items */}
      <Box sx={styles.cardSecondRow}>
        <Box sx={styles.checkItem}>
          <Typography variant="body2">Alcohol</Typography>
          {driver?.alcohol === true ? (
            <CheckIcon sx={styles.checkIcon} />
          ) : (
            <ClearIcon sx={styles.crossIcon} />
          )}
        </Box>
        <Box sx={styles.checkItem}>
          <Typography variant="body2">Mask</Typography>
          {driver?.mask === true ? (
            <CheckIcon sx={styles.checkIcon} />
          ) : (
            <ClearIcon sx={styles.crossIcon} />
          )}{" "}
          {/* Use Check Icon */}
        </Box>
        <Box sx={styles.checkItem}>
          <Typography variant="body2">Dress</Typography>
          {driver?.dress === true ? (
            <CheckIcon sx={styles.checkIcon} />
          ) : (
            <ClearIcon sx={styles.crossIcon} />
          )}{" "}
          {/* Use Check Icon */}
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdRowBox;
