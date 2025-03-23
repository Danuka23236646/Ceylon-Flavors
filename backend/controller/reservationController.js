import Reservation from "../models/reservationmodel.js";

// Get all reservations
export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new reservation
export const addReservation = async (req, res) => {
  const { name, email, phone, date, time, notes } = req.body;

  try {
    const newReservation = new Reservation({ name, email, phone, date, time, notes });
    await newReservation.save();
    res.json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing reservation
export const updateReservation = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, date, time, notes } = req.body;

  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      { name, email, phone, date, time, notes },
      { new: true }
    );
    res.json(updatedReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a reservation
export const deleteReservation = async (req, res) => {
  const { id } = req.params;

  try {
    await Reservation.findByIdAndDelete(id);
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
