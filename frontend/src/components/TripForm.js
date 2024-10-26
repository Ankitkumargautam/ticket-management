import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  TextField,
  Grid,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const TripForm = ({ open, onClose }) => {
  // Default values for the form
  const defaultValues = {
    originDepot: "",
    destinationDepot: "",
    targetIncome: "",
    actualInTime: "",
    actualIncome: "",
    departure: "",
    arrival: "",
    travelDate: "",
    busNumber: "",
    dutySlipNo: "",
    issueDiesel: "",
    schOutTime: "",
    schTrip: "",
    schKm: "",
    drivers: [
      {
        name: "",
        Id: "",
        licenseNo: "",
        contact: "",
        alcohol: false,
        mask: false,
        dress: false,
        image:
          "https://next-amazonin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhnnj0xby%2Fimage%2Fupload%2Fv1705675940%2Ff003ojbofb31dinuc5hz.jpg&w=640&q=75",
      },
    ],
    conductors: [
      {
        name: "",
        Id: "",
        licenseNo: "",
        contact: "",
        alcohol: false,
        mask: false,
        dress: false,
        image:
          "https://next-amazonin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhnnj0xby%2Fimage%2Fupload%2Fv1705675940%2Ff003ojbofb31dinuc5hz.jpg&w=640&q=75",
      },
    ],
  };

  // Load saved data from localStorage or use default values
  const loadData = () => {
    const savedData = localStorage.getItem("tripFormData");
    return savedData ? JSON.parse(savedData) : defaultValues;
  };

  // Formik setup
  const formik = useFormik({
    initialValues: loadData(),
    validationSchema: Yup.object({
      originDepot: Yup.string().required("Origin Depot is required"),
      destinationDepot: Yup.string().required("Destination Depot is required"),
      targetIncome: Yup.number()
        .required("Target Income is required")
        .positive(),
      actualInTime: Yup.string().required("Actual In Time is required"),
      actualIncome: Yup.number()
        .required("Actual Income is required")
        .positive(),
      departure: Yup.string().required("Departure is required"),
      arrival: Yup.string().required("Arrival is required"),
      travelDate: Yup.date().required("Travel Date is required"),
      busNumber: Yup.string().required("Bus Number is required"),
      dutySlipNo: Yup.string().required("Duty Slip No is required"),
      issueDiesel: Yup.string().required("Issue Diesel is required"),
      schOutTime: Yup.string().required("Scheduled Out Time is required"),
      schTrip: Yup.string().required("Scheduled Trip is required"),
      schKm: Yup.number().required("Scheduled KM is required").positive(),
      drivers: Yup.array().of(
        Yup.object({
          name: Yup.string().required("Driver Name is required"),
          Id: Yup.string().required("Driver ID is required"),
          licenseNo: Yup.string().required("Driver License No is required"),
          contact: Yup.string().required("Driver Contact is required"),
        })
      ),
      conductors: Yup.array().of(
        Yup.object({
          name: Yup.string().required("Conductor Name is required"),
          Id: Yup.string().required("Conductor ID is required"),
          licenseNo: Yup.string().required("Conductor License No is required"),
          contact: Yup.string().required("Conductor Contact is required"),
        })
      ),
    }),
    onSubmit: (values) => {
      console.log("first");
      console.log("Form Submitted", values);
      // Save data to localStorage
      localStorage.setItem("tripFormData", JSON.stringify(values));
      onClose();
    },
  });

  useEffect(() => {
    // Update localStorage when form values change
    localStorage.setItem("tripFormData", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>
        <Typography variant="h6" gutterBottom>
          Trip Details
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Origin Depot"
                name="originDepot"
                value={formik.values.originDepot}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.originDepot &&
                  Boolean(formik.errors.originDepot)
                }
                helperText={
                  formik.touched.originDepot && formik.errors.originDepot
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Destination Depot"
                name="destinationDepot"
                value={formik.values.destinationDepot}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.destinationDepot &&
                  Boolean(formik.errors.destinationDepot)
                }
                helperText={
                  formik.touched.destinationDepot &&
                  formik.errors.destinationDepot
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Target Income"
                name="targetIncome"
                type="number"
                value={formik.values.targetIncome}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.targetIncome &&
                  Boolean(formik.errors.targetIncome)
                }
                helperText={
                  formik.touched.targetIncome && formik.errors.targetIncome
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="time"
                label="Actual In Time"
                name="actualInTime"
                value={formik.values.actualInTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.actualInTime &&
                  Boolean(formik.errors.actualInTime)
                }
                helperText={
                  formik.touched.actualInTime && formik.errors.actualInTime
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Actual Income"
                name="actualIncome"
                type="number"
                value={formik.values.actualIncome}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.actualIncome &&
                  Boolean(formik.errors.actualIncome)
                }
                helperText={
                  formik.touched.actualIncome && formik.errors.actualIncome
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Departure"
                name="departure"
                value={formik.values.departure}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.departure && Boolean(formik.errors.departure)
                }
                helperText={formik.touched.departure && formik.errors.departure}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Arrival"
                name="arrival"
                value={formik.values.arrival}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.arrival && Boolean(formik.errors.arrival)}
                helperText={formik.touched.arrival && formik.errors.arrival}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Travel Date"
                type="date"
                name="travelDate"
                value={formik.values.travelDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.travelDate && Boolean(formik.errors.travelDate)
                }
                helperText={
                  formik.touched.travelDate && formik.errors.travelDate
                }
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Bus Number"
                name="busNumber"
                value={formik.values.busNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.busNumber && Boolean(formik.errors.busNumber)
                }
                helperText={formik.touched.busNumber && formik.errors.busNumber}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Duty Slip No"
                name="dutySlipNo"
                value={formik.values.dutySlipNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.dutySlipNo && Boolean(formik.errors.dutySlipNo)
                }
                helperText={
                  formik.touched.dutySlipNo && formik.errors.dutySlipNo
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Issue Diesel"
                name="issueDiesel"
                value={formik.values.issueDiesel}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.issueDiesel &&
                  Boolean(formik.errors.issueDiesel)
                }
                helperText={
                  formik.touched.issueDiesel && formik.errors.issueDiesel
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="time"
                label="Scheduled Out Time"
                name="schOutTime"
                value={formik.values.schOutTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.schOutTime && Boolean(formik.errors.schOutTime)
                }
                helperText={
                  formik.touched.schOutTime && formik.errors.schOutTime
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Scheduled Trip"
                name="schTrip"
                value={formik.values.schTrip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.schTrip && Boolean(formik.errors.schTrip)}
                helperText={formik.touched.schTrip && formik.errors.schTrip}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Scheduled KM"
                name="schKm"
                type="number"
                value={formik.values.schKm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.schKm && Boolean(formik.errors.schKm)}
                helperText={formik.touched.schKm && formik.errors.schKm}
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {/* Other fields omitted for brevity */}
            {/* Drivers Section */}
            <Box>
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Drivers
              </Typography>
              {formik.values.drivers.map((driver, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label={`Driver [${index + 1}] Name`}
                      name={`drivers[${index}].name`}
                      value={driver.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.drivers?.[index]?.name &&
                        Boolean(formik.errors.drivers?.[index]?.name)
                      }
                      helperText={
                        formik.touched.drivers?.[index]?.name &&
                        formik.errors.drivers?.[index]?.name
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label={`Driver [${index + 1}] ID`}
                      name={`drivers[${index}].Id`}
                      value={driver.Id}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.drivers?.[index]?.Id &&
                        Boolean(formik.errors.drivers?.[index]?.Id)
                      }
                      helperText={
                        formik.touched.drivers?.[index]?.Id &&
                        formik.errors.drivers?.[index]?.Id
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label={`Driver [${index + 1}] License No`}
                      name={`drivers[${index}].licenseNo`}
                      value={driver.licenseNo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.drivers?.[index]?.licenseNo &&
                        Boolean(formik.errors.drivers?.[index]?.licenseNo)
                      }
                      helperText={
                        formik.touched.drivers?.[index]?.licenseNo &&
                        formik.errors.drivers?.[index]?.licenseNo
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label={`Driver [${index + 1}] Contact`}
                      name={`drivers[${index}].contact`}
                      value={driver.contact}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.drivers?.[index]?.contact &&
                        Boolean(formik.errors.drivers?.[index]?.contact)
                      }
                      helperText={
                        formik.touched.drivers?.[index]?.contact &&
                        formik.errors.drivers?.[index]?.contact
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Checkbox
                      checked={driver.alcohol}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `drivers[${index}].alcohol`,
                          e.target.checked
                        )
                      }
                    />
                    Alcohol
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Checkbox
                      checked={driver.mask}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `drivers[${index}].mask`,
                          e.target.checked
                        )
                      }
                    />
                    Mask
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Checkbox
                      checked={driver.dress}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `drivers[${index}].dress`,
                          e.target.checked
                        )
                      }
                    />
                    Dress
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        const newDrivers = [...formik.values.drivers];
                        newDrivers.splice(index, 1);
                        formik.setFieldValue("drivers", newDrivers);
                      }}
                    >
                      Remove Driver
                    </Button>
                  </Grid>
                </Grid>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  formik.setFieldValue("drivers", [
                    ...formik.values.drivers,
                    {
                      name: "",
                      Id: "",
                      licenseNo: "",
                      contact: "",
                      alcohol: false,
                      mask: false,
                      dress: false,
                      image: "",
                    },
                  ])
                }
                sx={{ mt: 2, mb: 2 }}
              >
                Add Driver
              </Button>
            </Box>
            {/* Conductors Section */}
            <Box>
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Conductors
              </Typography>
              {formik.values.conductors.map((conductor, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label={`Conductor [${index + 1}] Name`}
                      name={`conductors[${index}].name`}
                      value={conductor.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.conductors?.[index]?.name &&
                        Boolean(formik.errors.conductors?.[index]?.name)
                      }
                      helperText={
                        formik.touched.conductors?.[index]?.name &&
                        formik.errors.conductors?.[index]?.name
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label={`Conductor [${index + 1}] ID`}
                      name={`conductors[${index}].Id`}
                      value={conductor.Id}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.conductors?.[index]?.Id &&
                        Boolean(formik.errors.conductors?.[index]?.Id)
                      }
                      helperText={
                        formik.touched.conductors?.[index]?.Id &&
                        formik.errors.conductors?.[index]?.Id
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label={`Conductor [${index + 1}] License No`}
                      name={`conductors[${index}].licenseNo`}
                      value={conductor.licenseNo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.conductors?.[index]?.licenseNo &&
                        Boolean(formik.errors.conductors?.[index]?.licenseNo)
                      }
                      helperText={
                        formik.touched.conductors?.[index]?.licenseNo &&
                        formik.errors.conductors?.[index]?.licenseNo
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label={`Conductor [${index + 1}] Contact`}
                      name={`conductors[${index}].contact`}
                      value={conductor.contact}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.conductors?.[index]?.contact &&
                        Boolean(formik.errors.conductors?.[index]?.contact)
                      }
                      helperText={
                        formik.touched.conductors?.[index]?.contact &&
                        formik.errors.conductors?.[index]?.contact
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Checkbox
                      checked={conductor.alcohol}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `conductors[${index}].alcohol`,
                          e.target.checked
                        )
                      }
                    />
                    Alcohol
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Checkbox
                      checked={conductor.mask}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `conductors[${index}].mask`,
                          e.target.checked
                        )
                      }
                    />
                    Mask
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Checkbox
                      checked={conductor.dress}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `conductors[${index}].dress`,
                          e.target.checked
                        )
                      }
                    />
                    Dress
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        const newConductors = [...formik.values.conductors];
                        newConductors.splice(index, 1);
                        formik.setFieldValue("conductors", newConductors);
                      }}
                    >
                      Remove Conductor
                    </Button>
                  </Grid>
                </Grid>
              ))}

              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  formik.setFieldValue("conductors", [
                    ...formik.values.conductors,
                    {
                      name: "",
                      Id: "",
                      licenseNo: "",
                      contact: "",
                      alcohol: false,
                      mask: false,
                      dress: false,
                      image: "",
                    },
                  ])
                }
                sx={{ mt: 2 }}
              >
                Add Conductor
              </Button>
            </Box>

            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 4 }}
            >
              Submit
            </Button> */}
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TripForm;
