const dataModel = require("../models/Flight");

exports.getFlights = (req, res) => {
  const data = dataModel.flights;
  res.send({ data });
};
exports.getSingleFlight = (req, res) => {
  const id = Number(req.params.id);
  const foundIndex = dataModel.flights.findIndex((flight) => flight.id === id);

  if (Number.isNaN(id)) {
    res
      .status(400)
      .send({ sucess: false, message: "Your id is Not a Number" });
  } else if (foundIndex === -1) {
    res.status(400).send({ sucess: false, message: "Your id does not exist" });
  } else {
    const foundIndex = dataModel.flights.findIndex((flight) => flight.id === id);
    return res.send({ sucess: true, foundIndex });
  }
};
exports.createFlights = (req, res) => {
  const lastItem = dataModel.flights[dataModel.flights.length - 1];
  const newItem = lastItem.id + 100;

  const newObject = {
    id: newItem,
    title: req.body.title,
    time: req.body.time,
    price: req.body.price,
    date: req.body.date,
  };

  dataModel.flights.push(newObject);
  res.send({ dataModel });
};
exports.updateFlights = (req, res) => {
  const id = Number(req.params.id);
  const foundIndex = dataModel.flights.findIndex((flight) => flight.id === id);

  if (Number.isNaN(id)) {
    res.status(400).send({ sucess: false, message: "Your id is Not a Number" });
  } else if (foundIndex === -1) {
    res.status(400).send({ sucess: false, message: "Your id does not exist" });
  } else {
    const foundIndex = dataModel.flights.findIndex(
      (flight) => flight.id === id
    );

    const removedItem = dataModel.flights.splice(foundIndex, 1)[0];

    const { title, time, price, date } = req.body;
    if (title) removedItem.title = title;
    if (time) removedItem.time = time;
    if (price) removedItem.price = price;
    if (date) removedItem.date = date;

    dataModel.flights.splice(1, 0, removedItem);
    res.send({ dataModel });
  }
};
exports.deleteFlights = (req, res) => {
  const id = Number(req.params.id);
  const foundIndex = dataModel.flights.findIndex((flight) => flight.id === id);

  if (Number.isNaN(id)) {
    res.status(400).send({ sucess: false, message: "Your id is Not a Number" });
  } else if (foundIndex === -1) {
    res.status(400).send({ sucess: false, message: "Your id does not exist" });
  } else {
    const foundIndex = dataModel.flights.findIndex(
      (flight) => flight.id === id
    );
    const removedItem = dataModel.flights.splice(foundIndex, 1)[0];
    res.send({ removedItem });
  }
};
