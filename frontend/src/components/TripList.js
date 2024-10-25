import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Button } from '@mui/material';

const TripList = ({ trips, onTripClick, page }) => {
  const itemsPerPage = 5;
  const displayedTrips = trips.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <List>
      {displayedTrips.map((trip, index) => (
        <ListItem key={index}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Typography variant="h6">
                {trip.departure} to {trip.arrival} - {trip.travelDate}
              </Typography>
              <Button variant="outlined" onClick={() => onTripClick(trip)}>View Details</Button>
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default TripList;
