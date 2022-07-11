import cote from "cote";
import { CustomEvent } from "../../types/CustomEvent";
const responder = new cote.Responder({
  name: "currency conversion responder",
});

const rates = { usd_eur: 0.91, eur_usd: 1.1 };

responder.on("convert", ({ amount, from, to }: CustomEvent, cb) => {
  cb(null, amount * rates[`${from}_${to}`]);
});
