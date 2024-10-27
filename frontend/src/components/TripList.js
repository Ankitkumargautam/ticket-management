import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import Moment from "react-moment";

const TripList = ({ trips, onTripClick, page }) => {
  if (trips.length === 0)
    return (
      <div>
        <Typography variant="h5" textAlign="center">No trip is available. Please add some trip</Typography>
      </div>
    );
  return (
    <List>
      {trips.map((trip, index) => (
        <ListItem key={index}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h6">
                {trip?.passes?.departure} to {trip?.passes?.arrival} -{" "}
                <Moment format="DD MMM YYYY">{trip?.passes?.travelDate}</Moment>
              </Typography>
              <Button
                variant="outlined"
                onClick={() => onTripClick(trip?.passes)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default TripList;
