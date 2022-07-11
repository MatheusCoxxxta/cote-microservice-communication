const cote = require("cote");

const responder = new cote.Responder({
  name: "currency conversion responder",
});

const rates = { usd_eur: 0.91, eur_usd: 1.1 };

responder.on("convert", (req, cb) => {
  cb(null, req.amount * rates[`${req.from}_${req.to}`]);
});
