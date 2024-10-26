import styles from "../TripDetailsModal/TripDetailsModalStyles";
import { Box, Typography } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import DriverImg from "../../assets/AnkitKumarGautam.jpg";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const ThirdRowBox = ({ index }) => {
  return (
    <Box key={index} sx={styles.cardBox}>
      {/* First row: Image and Information */}
      <Box sx={styles.cardFirstRow}>
        <Box sx={styles.cardImageBox}>
          <img
            src={DriverImg}
            alt={`Driver ${index}`}
            style={styles.cardImageStyle}
          />
        </Box>
        <Box sx={styles.cardInfoBox}>
          <Typography sx={styles.cardInfoBoxTextHeading} variant="p">
            Driver {index}
          </Typography>
          <Typography sx={styles.cardInfoBoxText} variant="p">
            Name: Sujeet Yadav
          </Typography>
          <Typography sx={styles.cardInfoBoxText} variant="p">
            ID: EMP#003519
          </Typography>
          <Typography sx={styles.cardInfoBoxText} variant="p">
            Licence No.: 123431232
          </Typography>
          <Typography sx={styles.cardInfoBoxText} variant="p">
            Mobile No.: 9192939495
          </Typography>
        </Box>
      </Box>

      {/* Second row: Check/Cross Items */}
      <Box sx={styles.cardSecondRow}>
        <Box sx={styles.checkItem}>
          <Typography variant="body2">Alcohol</Typography>
          <ClearIcon sx={styles.crossIcon} /> {/* Use Cross Icon */}
        </Box>
        <Box sx={styles.checkItem}>
          <Typography variant="body2">Mask</Typography>
          <CheckIcon sx={styles.checkIcon} /> {/* Use Check Icon */}
        </Box>
        <Box sx={styles.checkItem}>
          <Typography variant="body2">Dress</Typography>
          <CheckIcon sx={styles.checkIcon} /> {/* Use Check Icon */}
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdRowBox;
