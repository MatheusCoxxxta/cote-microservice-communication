import cote from "cote";

const requester = new cote.Requester({
  name: "currency conversion requester - client",
});

const request = { type: "convert", from: "usd", to: "eur", amount: 100 };

requester.send(request, (err, res) => {
  console.log(res);
});
