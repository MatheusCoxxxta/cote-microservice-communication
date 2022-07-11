const cote = require("cote");

const responder = new cote.Subscriber({
  name: "currency conversion subscriber",
});

const rates = { usd_eur: 0.91, eur_usd: 1.1 };

responder.on("convert", (req, cb) => {
  console.log(req.amount * rates[`${req.from}_${req.to}`]);
});
