const express = require('express');
const app = express();
const ticketRoutes = require('./routes/ticket.routes');


app.use(express.json());


app.use('/', ticketRoutes);


app.use((req, res, next) => {
  res.status(404).json({ error: '404 Not Found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ticketing system backend running on port ${PORT}`);
});
