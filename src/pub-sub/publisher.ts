import cote from "cote";

const publisher = new cote.Publisher({
  name: "currency conversion requester - publisher",
});

const request = { type: "convert", from: "usd", to: "eur", amount: 100 };

publisher.publish("convert", request);
