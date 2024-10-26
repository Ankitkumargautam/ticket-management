import React from "react";
import { Modal, Box, Typography, useMediaQuery } from "@mui/material";
import SugamImg from "../../assets/SugamImg.png";
import DriverImg from "../../assets/AnkitKumarGautam.jpg";

import styles from "./TripDetailsModalStyles";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TwoElementBox from "../commons/TwoElementBox";
import ThirdRowBox from "../commons/ThirdRowBox";
import TwoElementBoxWhite from "../commons/TwoElementBoxWhite";

const TripDetailsModal = ({ open, onClose, trip }) => {
  // Media queries for responsiveness
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  // Conditional rendering for null trip data, after hook calls
  if (!trip) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.modalStyle(isSmallScreen, isMediumScreen)}>
        <Box>
          {/* header box */}
          <Box sx={styles.headerBox}>
            <Typography sx={styles.headerText}>
              SUGAM PASS | UPSRTC SOFTWARE ORIGINAL COPY
            </Typography>
          </Box>
          {/* First row box 
          Combined Row for Departure, Arrival, and Image */}
          <Box sx={styles.firstRowBox}>
            <Box sx={styles.imageBox}>
              <img
                src={SugamImg}
                alt="Trip Image"
                style={styles.imageStyle(isSmallScreen, isMediumScreen)}
              />
            </Box>
            <Box sx={styles.firstRowSideBox}>
              <Box sx={styles.firstRowSideBoxOne}>
                <Typography
                  variant="h1"
                  sx={styles.firstRowSideBoxOneCityCode(
                    isSmallScreen,
                    isMediumScreen
                  )}
                >
                  LKO
                </Typography>

                <Typography
                  variant="body1"
                  sx={styles.firstRowSideBoxOneCityName(
                    isSmallScreen,
                    isMediumScreen
                  )}
                >
                  {"Lucknow".toUpperCase()}
                </Typography>
              </Box>

              <TrendingFlatIcon
                sx={styles.firstRowSideBoxOneIcon(
                  isSmallScreen,
                  isMediumScreen
                )}
              />

              <Box sx={styles.firstRowSideBoxOne}>
                <Typography
                  variant="h1"
                  sx={styles.firstRowSideBoxOneCityCode(
                    isSmallScreen,
                    isMediumScreen
                  )}
                >
                  GKP
                </Typography>

                <Typography
                  variant="body1"
                  sx={styles.firstRowSideBoxOneCityName(
                    isSmallScreen,
                    isMediumScreen
                  )}
                >
                  {"Gorakhpur".toUpperCase()}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* second row box */}
          <Box sx={styles.secondRowBox}>
            <TwoElementBox firstElement="495812" secondElement="Duty Slip No" />

            <TwoElementBox
              firstElement="UP32MN9181"
              secondElement="Bus Number"
            />

            <TwoElementBox
              firstElement="80 LITER"
              secondElement="Issue Diesel"
            />

            <TwoElementBox firstElement="15:15" secondElement="SCH Out Time" />
            <TwoElementBox firstElement="02" secondElement="SCH Trip" />

            <TwoElementBox firstElement="360 KM" secondElement="SCH KM" />
            <TwoElementBox
              firstElement={"Gorakhpur".toUpperCase()}
              secondElement="Depot"
            />

            <TwoElementBox
              firstElement={"Gorakhpur".toUpperCase()}
              secondElement="Region"
            />
          </Box>
          {/* Third row box */}
          <Box sx={styles.thirdRowBox}>
            {[1, 2, 3].map((index) => (
              <ThirdRowBox index={index} />
            ))}
          </Box>
          {/* Forth row box */}
          <Box sx={styles.forthRowBox}>
            <Box>
              <Typography variant="p" sx={styles.forthRowBoxText}>
                DATE & TIME: 14 Oct 2024 | 14:32
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" sx={styles.forthRowBoxText}>
                STATUS PER ACTION
              </Typography>
            </Box>
          </Box>
          {/* fifth row box */}
          <Box sx={styles.fifthRowBox}>
            <TwoElementBoxWhite
              firstElement="GORAKHPUR TO VIKAS NAGAR VIA AYODHYA DHAM"
              secondElement="ROUTE NAME"
            />

            <TwoElementBoxWhite
              firstElement="₹ 12000/-"
              secondElement="Target Income"
            />
            {/* here we need to apply check for first Element if it is "" then send "N/A" */}
            <TwoElementBoxWhite
              firstElement="N/A"
              secondElement="Actual in Time"
            />

            <TwoElementBoxWhite
              firstElement="N/A"
              secondElement="Actual Income"
            />

            <TwoElementBoxWhite firstElement="" secondElement="Signature" />
          </Box>
        </Box>

        {/* <Box sx={{ display: "grid" }}>
          <Typography>
            <strong>Travel Date:</strong> {trip.travelDate}
          </Typography>
          */}
      </Box>
    </Modal>
  );
};

export default TripDetailsModal;
