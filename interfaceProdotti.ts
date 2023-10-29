interface Prodotto{
    idProdotto: string;
    nomeProdotto: string;
    descrizioneProdotto: string;
    fotoUrl: string;
    prezzo: number;
    quantita: number;
}

class CarrelloService{
    private prodotti: Prodotti[] = [];
    private totale = 0; 
    private codiceSconto = {
        codice: '',
        percentuale: 0,
    };

    aggiungiProdotto(prodotto: Prodotto){
        this.prodotti.push(prodotto);
        this.ricalcolaTotale();
    }
    eliminaProdotto(prodotto: Prodotto){

    }
    cambiaQuantita(idProdotto: string, nuovaQuantita: number){

    }
    svuotaProdotto(){  }
    getProdotti(){
        return this.prodotti;
    }
    getTotale(){
        return this.totale;
    }

    ricalcolaTotale(){  }
}