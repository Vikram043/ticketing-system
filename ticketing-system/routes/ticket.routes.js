const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/ticket.controller');
const dataCheckMiddleware = require('../middlewares/dataCheckMiddleware');


router.get('/tickets', ticketController.getAllTickets);
router.get('/tickets/:id', ticketController.getTicketById);
router.post('/tickets', dataCheckMiddleware, ticketController.createTicket);
router.put('/tickets/:id', ticketController.updateTicket);
router.delete('/tickets/:id', ticketController.deleteTicket);
router.patch('/tickets/:id/resolve', ticketController.resolveTicket);

module.exports = router;
