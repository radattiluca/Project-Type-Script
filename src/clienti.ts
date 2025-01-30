import { Cliente } from "./class.js";
export { cliente001, cliente002, cliente003, cliente004 };

let cliente001: Cliente = new Cliente(
  "Luca",
  "Bianchi",
  "lucabianchi@email.com",
  "PayPal"
);

let cliente002: Cliente = new Cliente(
  "Francesca",
  "Schianchi",
  "francescaschianchi@email.com",
  "Bonifico"
);

let cliente003: Cliente = new Cliente(
  "Alessandro",
  "Vitale",
  "alessandrovitale@email.com",
  "Carta di Credito"
);

let cliente004: Cliente = new Cliente(
  "Elisa",
  "Tosse",
  "tosseelisa@email.com",
  "PayPal"
);
