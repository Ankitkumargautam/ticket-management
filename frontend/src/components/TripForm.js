import React, { useState } from 'react';
import { Dialog, DialogContent, Stepper, Step, StepLabel, Button, TextField, Avatar, IconButton, Grid, Checkbox, Typography, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const steps = ['Add Drivers and Conductors', 'Trip Details', 'Depot and Income'];

const TripForm = ({ open, onClose, onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    drivers: [{ name: '', mask: false, image: '' }],
    conductors: [{ name: '', mask: false, image: '' }],
    departure: '',
    arrival: '',
    travelDate: '',
    busNumber: '',
    originDepot: '',
    destinationDepot: '',
    targetIncome: '',
    actualInTime: '',
    actualIncome: '',
  });

  const handleChange = (e, index, type) => {
    const updatedList = formData[type].map((item, i) => 
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setFormData({ ...formData, [type]: updatedList });
  };

  const handleFileChange = (e, index, type) => {
    const file = e.target.files[0];
    if (file) {
      const updatedList = formData[type].map((item, i) =>
        i === index ? { ...item, image: URL.createObjectURL(file) } : item
      );
      setFormData({ ...formData, [type]: updatedList });
    }
  };

  const handleAdd = (type) => setFormData({ ...formData, [type]: [...formData[type], { name: '', mask: false, image: '' }] });
  const handleRemove = (index, type) => setFormData({ ...formData, [type]: formData[type].filter((_, i) => i !== index) });
  const handleCheckboxChange = (index, type) => {
    const updatedList = formData[type].map((item, i) =>
      i === index ? { ...item, mask: !item.mask } : item
    );
    setFormData({ ...formData, [type]: updatedList });
  };

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      drivers: [{ name: '', mask: false, image: '' }],
      conductors: [{ name: '', mask: false, image: '' }],
      departure: '',
      arrival: '',
      travelDate: '',
      busNumber: '',
      originDepot: '',
      destinationDepot: '',
      targetIncome: '',
      actualInTime: '',
      actualIncome: '',
    });
    setActiveStep(0);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">Drivers</Typography>
            {formData.drivers.map((driver, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                <Grid item xs={5}>
                  <TextField label="Driver Name" name="name" value={driver.name} onChange={(e) => handleChange(e, index, 'drivers')} fullWidth />
                </Grid>
                <Grid item xs={3}>
                  <IconButton component="label">
                    <Avatar src={driver.image} alt="Driver" />
                    <input type="file" hidden onChange={(e) => handleFileChange(e, index, 'drivers')} />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <Checkbox checked={driver.mask} onChange={() => handleCheckboxChange(index, 'drivers')} />
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => handleRemove(index, 'drivers')}><Remove /></IconButton>
                </Grid>
              </Grid>
            ))}
            <Button startIcon={<Add />} onClick={() => handleAdd('drivers')}>Add Driver</Button>

            <Typography variant="h6" sx={{ mt: 4 }}>Conductors</Typography>
            {formData.conductors.map((conductor, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                <Grid item xs={5}>
                  <TextField label="Conductor Name" name="name" value={conductor.name} onChange={(e) => handleChange(e, index, 'conductors')} fullWidth />
                </Grid>
                <Grid item xs={3}>
                  <IconButton component="label">
                    <Avatar src={conductor.image} alt="Conductor" />
                    <input type="file" hidden onChange={(e) => handleFileChange(e, index, 'conductors')} />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <Checkbox checked={conductor.mask} onChange={() => handleCheckboxChange(index, 'conductors')} />
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => handleRemove(index, 'conductors')}><Remove /></IconButton>
                </Grid>
              </Grid>
            ))}
            <Button startIcon={<Add />} onClick={() => handleAdd('conductors')}>Add Conductor</Button>
          </Box>
        )}

        {activeStep === 1 && (
          <Box sx={{ mt: 3 }}>
            <TextField label="Departure Location" name="departure" value={formData.departure} onChange={(e) => setFormData({ ...formData, departure: e.target.value })} fullWidth sx={{ mb: 2 }} />
            <TextField label="Arrival Location" name="arrival" value={formData.arrival} onChange={(e) => setFormData({ ...formData, arrival: e.target.value })} fullWidth sx={{ mb: 2 }} />
            <TextField label="Travel Date" name="travelDate" type="date" value={formData.travelDate} onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })} fullWidth sx={{ mb: 2 }} />
            <TextField label="Bus Number" name="busNumber" value={formData.busNumber} onChange={(e) => setFormData({ ...formData, busNumber: e.target.value })} fullWidth sx={{ mb: 2 }} />
          </Box>
        )}

        {activeStep === 2 && (
          <Box sx={{ mt: 3 }}>
            <TextField label="Origin Depot" name="originDepot" value={formData.originDepot} onChange={(e) => setFormData({ ...formData, originDepot: e.target.value })} fullWidth sx={{ mb: 2 }} />
            <TextField label="Destination Depot" name="destinationDepot" value={formData.destinationDepot} onChange={(e) => setFormData({ ...formData, destinationDepot: e.target.value })} fullWidth sx={{ mb: 2 }} />
            <TextField label="Target Income" name="targetIncome" type="number" value={formData.targetIncome} onChange={(e) => setFormData({ ...formData, targetIncome: e.target.value })} fullWidth sx={{ mb: 2 }} />
            <TextField label="Actual In Time" name="actualInTime" type="time" value={formData.actualInTime} onChange={(e) => setFormData({ ...formData, actualInTime: e.target.value })} fullWidth sx={{ mb: 2 }} />
            <TextField label="Actual Income" name="actualIncome" type="number" value={formData.actualIncome} onChange={(e) => setFormData({ ...formData, actualIncome: e.target.value })} fullWidth sx={{ mb: 2 }} />
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TripForm;
