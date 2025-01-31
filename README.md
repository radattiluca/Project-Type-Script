# Gestione Ordini - TypeScript

> Un semplice progetto di gestione ordini scritto in **TypeScript**. Stampa messaggi di conferma e stato degli ordini direttamente nella **console del browser**.

## Funzionalità

- Ordina prodotto se disponibile
- Aggiornamento dello stato dell'ordine
- Associazione dell'ordine ad un determinato cliente
- Aggiunta di nuovi prodotti ad uno dei processi di produzione

## Installazione & Esecuzione

1. **Clona il repository tramite Visual Studio Code**

https://github.com/radattiluca/Project-Type-Script.git

2. **Apri il progetto in Visual Studio Code**

3. **Avvia il server con Go Live** (dall'estensione **Live Server**) per eseguire il file TypeScript compilato nel browser.

4. **Apri la console del browser** (`F12` o `Ctrl+Shift+I` su Chrome), (`Command+Option+I` su Mac) per visualizzare i messaggi dell'applicazione.

## Esempio di Utilizzo

**Ordine Prodotti**

Input:

- nomeCliente.ordinaProdotto(nomeProdotto);
- nomeProdotto.assegnaCliente(nomeCliente);

Output:

- Il prodotto "nomeProdotto" è stato ordinato!
- l cliente "nomeCliente" ha ordinato il prodotto "nomeProdotto" con id "IDProdotto", pagerà con il metodo di pagamento "metodoDiPagamento".

**Aggiunta nuovo prodotto ad uno dei processi di produzione:**

Input:

- nomeProcessoProduzione.aggiungiProdotto(nomeProdotto);

Output:

- l prodotto "nomeProdotto" con id "idProdotto" è stato aggiunto al processo di produzione "nomeProcessoProduzione".

✉️ **Contatti**: Se hai domande, apri un'**issue** su GitHub!
