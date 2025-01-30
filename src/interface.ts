//interface.js

export { ICliente, IProdotto, IProcessoProduzione };

interface IProdotto {
  tipo: string;
  ID: string;
  tg: string;
  colore: string;
  stato: string;
  assegnaCliente(cliente: ICliente): void;
}
interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamento: string;
  ordinaProdotto(prodotto: IProdotto): void;
}
interface IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];
  aggiungiProdotto(prodotto: IProdotto): void;
}
