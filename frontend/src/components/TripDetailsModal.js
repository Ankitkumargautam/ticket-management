import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const TripDetailsModal = ({ open, onClose, trip }) => {
  if (!trip) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Trip Details</Typography>
        <Typography><strong>Departure:</strong> {trip.departure}</Typography>
        <Typography><strong>Arrival:</strong> {trip.arrival}</Typography>
        <Typography><strong>Travel Date:</strong> {trip.travelDate}</Typography>
        <Typography><strong>Driver Contact:</strong> {trip.driverContact}</Typography>
        <Typography><strong>Conductor Contact:</strong> {trip.conductorContact}</Typography>
        <Typography><strong>Duty Slip Number:</strong> {trip.dutySlipNumber}</Typography>
        <Typography><strong>Bus Number:</strong> {trip.busNumber}</Typography>
      </Box>
    </Modal>
  );
};

export default TripDetailsModal;
