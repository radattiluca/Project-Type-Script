//class.js

import { IProdotto, ICliente, IProcessoProduzione } from "./interface.js";
export { Prodotto, Cliente, ProcessoProduzione };
class Prodotto implements IProdotto {
  tipo: string;
  ID: string;
  tg: string;
  colore: string;
  stato: string;

  constructor(
    tipo: string,
    ID: string,
    tg: string,
    colore: string,
    stato: string
  ) {
    this.tipo = tipo;
    this.ID = ID;
    this.tg = tg;
    this.colore = colore;
    this.stato = stato;
  }

  assegnaCliente(cliente: ICliente): void {
    if (this.stato === "Disponibile") {
      console.log(
        `Il cliente ${cliente.nome} ${cliente.cognome} ha ordinato il prodotto ${this.tipo} ${this.colore} con id ${this.ID}, pagerà con il metodo di pagamento ${cliente.metodoDiPagamento}`
      );
      this.stato = "Ordinato";
    }
  }
}

class Cliente implements ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamento: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoDiPagamento: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoDiPagamento = metodoDiPagamento;
  }
  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.stato === "Disponibile") {
      console.log(
        `Il prodotto ${prodotto.tipo} ${prodotto.colore} è stato ordinato!`
      );
    } else {
      console.log(
        `Il prodotto ${prodotto.tipo} ${prodotto.colore} non puo essere ordinato perché esaurito :(`
      );
    }
  }
}

class ProcessoProduzione implements IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  constructor(
    nome: string,
    descrizione: string,
    prodottiInProduzione: IProdotto[]
  ) {
    this.nome = nome;
    this.descrizione = descrizione;
    this.prodottiInProduzione = prodottiInProduzione;
  }

  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(
      `Il prodotto ${prodotto.tipo} ${prodotto.colore} con id ${prodotto.ID} e stato aggiunto al processo di produzione "${this.nome}"`
    );
  }
}
