const ticketModel = require('../models/ticket.model');

async function getAllTickets(req, res) {
  try {
    const tickets = await ticketModel.getAllTickets();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching tickets.' });
  }
}

async function getTicketById(req, res) {
  try {
    const id = parseInt(req.params.id);
    const ticket = await ticketModel.getTicketById(id);
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });

    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching ticket.' });
  }
}

async function createTicket(req, res) {
  try {
    const { title, description, priority, user } = req.body;
    // Data validation is done by middleware, so here just create
    const newTicket = await ticketModel.addTicket({ title, description, priority, user });
    res.status(201).json(newTicket);
  } catch (err) {
    res.status(500).json({ error: 'Server error creating ticket.' });
  }
}

async function updateTicket(req, res) {
  try {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    const updatedTicket = await ticketModel.updateTicket(id, updatedData);
    if (!updatedTicket) return res.status(404).json({ error: 'Ticket not found' });

    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(500).json({ error: 'Server error updating ticket.' });
  }
}

async function deleteTicket(req, res) {
  try {
    const id = parseInt(req.params.id);
    const deleted = await ticketModel.deleteTicket(id);
    if (!deleted) return res.status(404).json({ error: 'Ticket not found' });

    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error deleting ticket.' });
  }
}

async function resolveTicket(req, res) {
  try {
    const id = parseInt(req.params.id);
    const ticket = await ticketModel.getTicketById(id);
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    if (ticket.status === 'resolved') {
      return res.status(400).json({ error: 'Ticket is already resolved' });
    }

    const resolvedTicket = await ticketModel.updateTicket(id, { status: 'resolved' });
    res.status(200).json(resolvedTicket);
  } catch (err) {
    res.status(500).json({ error: 'Server error resolving ticket.' });
  }
}

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
  resolveTicket,
};
