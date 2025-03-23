import express from "express";
import multer from "multer";
import path from "path";
import Reservation from "../models/reservationmodel.js";

const router = express.Router();



// Get all reservations
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

// Get a single reservation by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

// Add a new reservation
router.post("/", async (req, res) => {
  const { name, email, phone, date, time, notes } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newReservation = new Reservation({
      name,
      email,
      phone,
      date,
      time,
      notes,
    });

    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(500).json({ message: "Error saving reservation: " + error.message });
  }
});

// Update an existing reservation
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, date, time, notes } = req.body;

  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      { name, email, phone, date, time, notes },
      { new: true }
    );

    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json(updatedReservation);
  } catch (error) {
    res.status(500).json({ message: "Error updating reservation: " + error.message });
  }
});

// Delete a reservation
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReservation = await Reservation.findByIdAndDelete(id);

    if (!deletedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting reservation: " + error.message });
  }
});

export default router;
