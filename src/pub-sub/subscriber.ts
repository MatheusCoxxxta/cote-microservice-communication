import cote, { Event } from "cote";
import { CustomEvent } from "../../types/CustomEvent";

const responder = new cote.Subscriber({
  name: "currency conversion subscriber",
});

const rates = { usd_eur: 0.91, eur_usd: 1.1 };

responder.on("convert", ({ amount, from, to }: CustomEvent) => {
  console.log(amount * rates[`${from}_${to}`]);
});
