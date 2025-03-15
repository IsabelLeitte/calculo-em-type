namespace loja{
    export class Produto{

        private _nome:string;
        private _preco:number;
        private _taxa:number;
        private _valorFinal:number;
 
        get nome(){
            return this. _nome;
        }

        set nome(nome:string){
            this. _nome
        }

        get preco(){
            return this. _preco;
        }

        set preco(nome:number){
            this. _preco
        }

        get taxa(){
            return this. _taxa;
        }

        set taxa(taxa:number){
            this. _taxa
        }
        
        public valorFinal():number{
            return (this. _taxa/100) * this. _preco;
        }
    }
}
