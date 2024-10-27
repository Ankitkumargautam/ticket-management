import React from "react";
import { Modal, Box, Typography, useMediaQuery } from "@mui/material";
import SugamImg from "../../assets/SugamImg.png";
import DriverImg from "../../assets/AnkitKumarGautam.jpg";

import styles from "./TripDetailsModalStyles";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TwoElementBox from "../commons/TwoElementBox";
import ThirdRowBox from "../commons/ThirdRowBox";
import TwoElementBoxWhite from "../commons/TwoElementBoxWhite";
import city from "../../utils/cityCode";
import Moment from "react-moment";

const TripDetailsModal = ({ open, onClose, trip }) => {
  // Media queries for responsiveness
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  console.log("trip---- ", trip);

  // Conditional rendering for null trip data, after hook calls
  if (!trip) return null;

  const renderArrivalCityCode = (cityName) => {
    const arrivalCity = city.find((c) => c.name === cityName);
    return arrivalCity ? arrivalCity.code : cityName.slice(0, 3); // handle if not found
  };

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
                  {renderArrivalCityCode(trip?.departure).toUpperCase()}
                </Typography>

                <Typography
                  variant="body1"
                  sx={styles.firstRowSideBoxOneCityName(
                    isSmallScreen,
                    isMediumScreen
                  )}
                >
                  {trip?.departure.toUpperCase()}
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
                  {renderArrivalCityCode(trip?.arrival).toUpperCase()}
                </Typography>

                <Typography
                  variant="body1"
                  sx={styles.firstRowSideBoxOneCityName(
                    isSmallScreen,
                    isMediumScreen
                  )}
                >
                  {trip?.arrival.toUpperCase()}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* second row box */}
          <Box sx={styles.secondRowBox}>
            <TwoElementBox
              firstElement={trip?.dutySlipNo !== "" ? trip?.dutySlipNo : "N/A"}
              secondElement="Duty Slip No"
            />

            <TwoElementBox
              firstElement={trip?.busNumber !== "" ? trip?.busNumber : "N/A"}
              secondElement="Bus Number"
            />

            <TwoElementBox
              firstElement={
                trip?.issueDiesel !== "" ? trip?.issueDiesel + " LITER" : "N/A"
              }
              secondElement="Issue Diesel"
            />

            <TwoElementBox
              firstElement={trip?.schOutTime !== "" ? trip?.schOutTime : "N/A"}
              secondElement="SCH Out Time"
            />
            <TwoElementBox
              firstElement={trip?.schTrip !== "" ? trip?.schTrip : "N/A"}
              secondElement="SCH Trip"
            />

            <TwoElementBox
              firstElement={trip?.schKm !== "" ? trip?.schKm + " KM" : "N/A"}
              secondElement="SCH KM"
            />
            <TwoElementBox
              firstElement={
                trip?.originDepot !== ""
                  ? trip?.originDepot.toUpperCase()
                  : "N/A"
              }
              secondElement="Depot"
            />

            <TwoElementBox
              firstElement={
                trip?.destinationDepot !== ""
                  ? trip?.destinationDepot.toUpperCase()
                  : "N/A"
              }
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
                DATE & TIME:{" "}
                <Moment format="DD MMM YYYY">{trip?.travelDate}</Moment> |{" "}
                {trip?.actualInTime}
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
              firstElement={
                trip?.routeName !== "" ? trip?.routeName.toUpperCase() : "N/A"
              }
              secondElement="ROUTE NAME"
            />

            <TwoElementBoxWhite
              firstElement={
                trip?.targetIncome !== "" ? "₹ " + trip?.targetIncome : "N/A"
              }
              secondElement="Target Income"
            />
            {/* here we need to apply check for first Element if it is "" then send "N/A" */}
            <TwoElementBoxWhite
              firstElement={
                trip?.actualIncome !== "" ? "₹ " + trip?.actualIncome : "N/A"
              }
              secondElement="Actual in Time"
            />

            <TwoElementBoxWhite
              firstElement={
                trip?.actualInTime !== "" ? trip?.actualInTime : "N/A"
              }
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
