import CustomerModel from './models/Customer.js';


app.post('/pages/Reservations/Reservations', (req, res) => {
    // Create new customer record using the request body
    const { Name, email, phone, date, time, people, notes } = req.body;
  
    const newReservation = new CustomerModel({
      Name,
      email,
      phone,
      date,
      time,
      people,
      notes
    });
  
    newReservation.save()
      .then(savedCustomer => {
        // Send the saved data back in the response
        res.json(savedCustomer);
      })
      .catch((err) => {
        console.error('Error saving reservation:', err);
        res.status(500).json({ message: 'Error saving reservation' });
      });
  });

