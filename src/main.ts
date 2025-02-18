//main.js

import { Prodotto, ProcessoProduzione, Cliente } from "./class.js";
import {
  snorkelingSmeraldoShorts,
  snorkelingTurcheseBikini,
  surfingCoralloOnePiece,
  surfingOltreoceanoShorts,
  pareoSmeraldo,
  cappelloTurchese,
  cappelloCorallo,
} from "./prodotti.js";
import { cliente003, cliente001, cliente002, cliente004 } from "./clienti.js";
import {
  inUnMareDiPlastica,
  meglioVintageCheMai,
} from "./processoProduzione.js";

cliente003.ordinaProdotto(snorkelingSmeraldoShorts);
snorkelingSmeraldoShorts.assegnaCliente(cliente003);

cliente001.ordinaProdotto(snorkelingTurcheseBikini);
snorkelingTurcheseBikini.assegnaCliente(cliente001);

cliente002.ordinaProdotto(cappelloCorallo);
cappelloCorallo.assegnaCliente(cliente002);

cliente004.ordinaProdotto(cappelloTurchese);
cappelloTurchese.assegnaCliente(cliente004);

cliente002.ordinaProdotto(cappelloTurchese);
cappelloTurchese.assegnaCliente(cliente002);

let playKidsUnisex: Prodotto = new Prodotto(
  "Costume da bambino unisex",
  "K001",
  "XS",
  "Nemo",
  "Disponibile"
);

inUnMareDiPlastica.aggiungiProdotto(playKidsUnisex);
