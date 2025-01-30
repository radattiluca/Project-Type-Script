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

  assegnaCliente(cliente: ICliente): void {}
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
  ordinaProdotto(prodotto: IProdotto): void {}
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

  aggiungiProdotto(prodotto: IProdotto): void {}
}

let snorkelingSmeraldoShorts = new Prodotto(
  "Costume Snorkeling Pantaloncino",
  "S001",
  "L",
  "Smeraldo",
  "Disponibile"
);

let surfingOltreoceanoShorts = new Prodotto(
  "Costume Surfing Pantaloncino",
  "O002",
  "M",
  "Oltreoceano",
  "Disponibile"
);

let snorkelingTurcheseBikini = new Prodotto(
  "Costume Snorkeling Bikini",
  "T003",
  "S",
  "Turchese",
  "Disponibile"
);

let surfingCoralloOnePiece = new Prodotto(
  "Costume Surfing Intero",
  "C004",
  "XS",
  "Oltreoceano",
  "Disponibile"
);

let pareoSmeraldo = new Prodotto(
  "Pareo",
  "P005",
  "L",
  "Verde Smeraldo",
  "Disponibile"
);

let cappelloTurchese = new Prodotto(
  "Cappello con Visiera",
  "C006",
  "TU",
  "Turchese",
  "Disponibile"
);

let cappelloCorallo = new Prodotto(
  "Cappello con Visiera",
  "C007",
  "TU",
  "Corallo",
  "Esaurito"
);

let cliente001 = new Cliente(
  "Luca",
  "Bianchi",
  "lucabianchi@email.com",
  "PayPal"
);

let cliente002 = new Cliente(
  "Francesca",
  "Schianchi",
  "francescaschianchi@email.com",
  "Bonifico"
);

let cliente003 = new Cliente(
  "Alessandro",
  "Vitale",
  "alessandrovitale@email.com",
  "Carta di Credito"
);

let cliente004 = new Cliente(
  "Elisa",
  "Tosse",
  "tosseelisa@email.com",
  "PayPal"
);

let snorkelingPP = new ProcessoProduzione(
  "In un mare di plastica",
  "Produzione su commessa e filiera eco-sostenibile sono gli aspetti che caratterizzano il processo produttivo dei costumi Sunnee. Costumi realizzati con poliestere riciclato procurato della plastica trovata sulle nostre spiagge e nei nostri mari. Solo i costumi richiesti dai clienti vengono realizzati, senza eccedenze di magazzino che creano altro inquinamento.",
  [
    snorkelingSmeraldoShorts,
    snorkelingTurcheseBikini,
    surfingCoralloOnePiece,
    surfingOltreoceanoShorts,
  ]
);

let cappelloPP = new ProcessoProduzione(
  "Vecchio è meglio",
  "Recuperiamo capi d'abbigliamnento buttati via e lavoriamo i loro tessuti per dargli nuovi aspetti. Non aggiungiamo nessun materiale nuovo ma ricicliamo quello che a qualcuno non serviva più per darlo a chi ne avrà bisogno.",
  [pareoSmeraldo, cappelloCorallo, cappelloTurchese]
);
