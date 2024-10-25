import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Pagination,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import {
  FirstPage,
  LastPage,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";

import TripList from "./components/TripList";
import TripDetailsModal from "./components/TripDetailsModal";
import TripForm from "./components/TripForm";

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [trips, setTrips] = useState([]);

  const [page, setPage] = useState(1); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page
  const [openForm, setOpenForm] = useState(false); // Form modal state

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const handleOpenModal = (trip) => {
    setSelectedTrip(trip);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTrip(null);
  };

  const handleSubmitTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
    handleCloseForm();
  };

  const handlePageChange = (event, value) => setPage(value);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1); // Reset to first page whenever rows per page is changed
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4, textAlign: "center" }}>
        Trip Pass Management
      </Typography>

      {/* Button to open the TripForm modal */}
      <Button variant="contained" onClick={handleOpenForm} sx={{ mb: 4 }}>
        Add Trip
      </Button>

      <TripForm
        open={openForm}
        onClose={handleCloseForm}
        onSubmit={handleSubmitTrip}
      />

      <TripList trips={trips} onTripClick={handleOpenModal} page={page} />

      {/* Pagination Controls */}

      {/* Rows per Page Selector */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Typography variant="body2" sx={{ mr: 2 }}>
            Rows per page:
          </Typography>
          <Select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </div>

        {/* Pagination */}
        <Pagination
          count={Math.ceil(trips.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
          sx={{ mx: 2 }}
        />
      </div>

      <TripDetailsModal
        open={openModal}
        onClose={handleCloseModal}
        trip={selectedTrip}
      />
    </Container>
  );
}

export default App;
