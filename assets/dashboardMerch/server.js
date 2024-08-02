// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json()); // Middleware to parse JSON request bodies
// app.use(cors()); // Middleware to allow cross-origin requests

// // Dummy database (just an array for simplicity)
// const orders = [];

// // Route to handle POST requests to /api/orders
// app.post('/api/orders', (req, res) => {
//     const order = req.body;
//     orders.push(order); // Save the order in the "database"
//     res.status(201).json({ message: 'Order placed successfully!', order });
// });

// // Set up the server to listen on a port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
