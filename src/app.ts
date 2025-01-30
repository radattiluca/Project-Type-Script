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

let snorkelingSmeraldoShorts: Prodotto = new Prodotto(
  "Costume Snorkeling Pantaloncino",
  "S001",
  "L",
  "Smeraldo",
  "Disponibile"
);

let surfingOltreoceanoShorts: Prodotto = new Prodotto(
  "Costume Surfing Pantaloncino",
  "O002",
  "M",
  "Oltreoceano",
  "Disponibile"
);

let snorkelingTurcheseBikini: Prodotto = new Prodotto(
  "Costume Snorkeling Bikini",
  "T003",
  "S",
  "Turchese",
  "Disponibile"
);

let surfingCoralloOnePiece: Prodotto = new Prodotto(
  "Costume Surfing Intero",
  "C004",
  "XS",
  "Oltreoceano",
  "Disponibile"
);

let pareoSmeraldo: Prodotto = new Prodotto(
  "Pareo",
  "P005",
  "L",
  "Verde Smeraldo",
  "Disponibile"
);

let cappelloTurchese: Prodotto = new Prodotto(
  "Cappello con Visiera",
  "C006",
  "TU",
  "Turchese",
  "Disponibile"
);

let cappelloCorallo: Prodotto = new Prodotto(
  "Cappello con Visiera",
  "C007",
  "TU",
  "Corallo",
  "Disponibile"
);

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

let inUnMareDiPlastica: ProcessoProduzione = new ProcessoProduzione(
  "In un mare di plastica",
  "Produzione su commessa e filiera eco-sostenibile sono gli aspetti che caratterizzano il processo produttivo dei costumi Sunnee. Costumi realizzati con poliestere riciclato procurato della plastica trovata sulle nostre spiagge e nei nostri mari. Solo i costumi richiesti dai clienti vengono realizzati, senza eccedenze di magazzino che creano altro inquinamento.",
  [
    snorkelingSmeraldoShorts,
    snorkelingTurcheseBikini,
    surfingCoralloOnePiece,
    surfingOltreoceanoShorts,
  ]
);

let meglioVintageCheMai: ProcessoProduzione = new ProcessoProduzione(
  "Meglio Vintage che mai",
  "Recuperiamo capi d'abbigliamnento buttati via e lavoriamo i loro tessuti per dargli nuovi aspetti. Non aggiungiamo nessun materiale nuovo ma ricicliamo quello che a qualcuno non serviva più per darlo a chi ne avrà bisogno.",
  [pareoSmeraldo, cappelloTurchese]
);

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
