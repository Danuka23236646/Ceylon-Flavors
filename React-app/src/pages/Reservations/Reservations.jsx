import React, { useState } from 'react'
import axios from 'axios'
import { CalendarIcon, ClockIcon } from 'lucide-react'

function ReservationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Combine first and last name for backend compatibility
    const submissionData = {
      ...formData,
      Name: `${formData.firstName} ${formData.lastName}`,
    }

    axios
      .post('http://localhost:3000/pages/Reservations/Reservations', submissionData)
      .then((result) => {
        console.log('Form submitted successfully:', result.data)
        alert('Reservation submitted successfully!')
        // Reset form data after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          people: '',
          notes: '',
        })
        setSubmitted(true) // Mark as submitted
      })
      .catch((err) => {
        console.error('Error submitting reservation:', err)
        alert('Error submitting reservation')
      })
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-medium text-indigo-700 mb-6">
        Restaurant Reservation Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Name</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="### ### ####"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Reservation Date</label>
            <div className="relative">
              <input
                type="text"
                name="date"
                placeholder="MM/DD/YYYY"
                value={formData.date}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Reservation Time</label>
            <div className="relative">
              <input
                type="text"
                name="time"
                placeholder="HH:MM AM"
                value={formData.time}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = 'time')}
                onBlur={(e) => (e.target.type = 'text')}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <ClockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            How many person will you be with?
          </label>
          <input
            type="number"
            name="people"
            min="1"
            value={formData.people}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Notes</label>
          <textarea
            name="notes"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded font-medium"
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default ReservationForm
