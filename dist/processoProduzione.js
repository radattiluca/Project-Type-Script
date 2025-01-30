//processoProduzione.js
import { ProcessoProduzione } from "./class.js";
import { snorkelingSmeraldoShorts, snorkelingTurcheseBikini, surfingCoralloOnePiece, surfingOltreoceanoShorts, } from "./prodotti.js";
import { pareoSmeraldo, cappelloTurchese } from "./prodotti.js";
export { inUnMareDiPlastica, meglioVintageCheMai };
let inUnMareDiPlastica = new ProcessoProduzione("In un mare di plastica", "Produzione su commessa e filiera eco-sostenibile sono gli aspetti che caratterizzano il processo produttivo dei costumi Sunnee. Costumi realizzati con poliestere riciclato procurato della plastica trovata sulle nostre spiagge e nei nostri mari. Solo i costumi richiesti dai clienti vengono realizzati, senza eccedenze di magazzino che creano altro inquinamento.", [
    snorkelingSmeraldoShorts,
    snorkelingTurcheseBikini,
    surfingCoralloOnePiece,
    surfingOltreoceanoShorts,
]);
let meglioVintageCheMai = new ProcessoProduzione("Meglio Vintage che mai", "Recuperiamo capi d'abbigliamnento buttati via e lavoriamo i loro tessuti per dargli nuovi aspetti. Non aggiungiamo nessun materiale nuovo ma ricicliamo quello che a qualcuno non serviva più per darlo a chi ne avrà bisogno.", [pareoSmeraldo, cappelloTurchese]);
