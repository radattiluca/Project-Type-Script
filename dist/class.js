//class.js
export { Prodotto, Cliente, ProcessoProduzione };
class Prodotto {
    constructor(tipo, ID, tg, colore, stato) {
        this.tipo = tipo;
        this.ID = ID;
        this.tg = tg;
        this.colore = colore;
        this.stato = stato;
    }
    assegnaCliente(cliente) {
        if (this.stato === "Disponibile") {
            console.log(`Il cliente ${cliente.nome} ${cliente.cognome} ha ordinato il prodotto ${this.tipo} ${this.colore} con id ${this.ID}, pagerà con il metodo di pagamento ${cliente.metodoDiPagamento}`);
            this.stato = "Ordinato";
        }
    }
}
class Cliente {
    constructor(nome, cognome, email, metodoDiPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }
    ordinaProdotto(prodotto) {
        if (prodotto.stato === "Disponibile") {
            console.log(`Il prodotto ${prodotto.tipo} ${prodotto.colore} è stato ordinato!`);
        }
        else {
            console.log(`Il prodotto ${prodotto.tipo} ${prodotto.colore} non puo essere ordinato perché esaurito :(`);
        }
    }
}
class ProcessoProduzione {
    constructor(nome, descrizione, prodottiInProduzione) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }
    aggiungiProdotto(prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log(`Il prodotto ${prodotto.tipo} ${prodotto.colore} con id ${prodotto.ID} è stato aggiunto al processo di produzione "${this.nome}"`);
    }
}
