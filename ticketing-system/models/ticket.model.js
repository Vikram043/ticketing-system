const fs = require('fs').promises;
const path = require('path');

const dbPath = path.join(__dirname, '..', 'db.json');

async function readDb() {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}

async function writeDb(data) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}


async function getAllTickets() {
  const db = await readDb();
  return db.tickets;
}

async function getTicketById(id) {
  const tickets = await getAllTickets();
  return tickets.find(ticket => ticket.id === id);
}


async function addTicket(ticketData) {
  const db = await readDb();
  const tickets = db.tickets;

  const newId = tickets.length ? tickets[tickets.length - 1].id + 1 : 1;
  const newTicket = {
    id: newId,
    status: 'pending',
    ...ticketData
  };

  tickets.push(newTicket);
  await writeDb(db);
  return newTicket;
}


async function updateTicket(id, updatedData) {
  const db = await readDb();
  const tickets = db.tickets;
  const index = tickets.findIndex(t => t.id === id);
  if (index === -1) return null;

  tickets[index] = { ...tickets[index], ...updatedData };
  await writeDb(db);
  return tickets[index];
}


async function deleteTicket(id) {
  const db = await readDb();
  const tickets = db.tickets;
  const index = tickets.findIndex(t => t.id === id);
  if (index === -1) return false;

  tickets.splice(index, 1);
  await writeDb(db);
  return true;
}

module.exports = {
  getAllTickets,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
};
