import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nutri';
  fruit: any[] = [];
  valor:any;
  segunda: any[] = [];
  terca: any[] = [];
  quarta: any[] = [];
  quinta: any[] = [];
  sexta: any[] = [];

  constructor() {}

  ngOnInit() {


this.fruit = [
  {id: 0,fruta: 'ABACAXI', quantidade: 1},
  {id: 1,fruta: 'AIPIM COZIDO', quantidade: 3},
  {id: 2,fruta: 'BANANA D AGUA', quantidade: 3},
  {id: 3,fruta: 'BISCOITO TIPO ÁGUA E SAL', quantidade:3},
  {id: 4,fruta: 'BOLO DE CHOCOLATE', quantidade: 2},
  {id: 5,fruta: 'BROCÓLIS REFOGADO', quantidade: 2},
  {id: 6,fruta: 'CALDO DE FEIJÃO COM PÃO', quantidade: 3},
  {id: 7,fruta: 'CANJICA', quantidade: 3},
  {id: 8,fruta: 'DOCE DE BANANA', quantidade: 2},
  {id: 9,fruta: 'FILÉ DE FRANGO GRELHADO', quantidade: 3},
  {id: 10,fruta: 'FRANGO AO MOLHO', quantidade: 2},
  {id: 11,fruta: 'LEITE CARAMELIZADO', quantidade: 2},
  {id: 12,fruta: 'LEITE COM CAFÉ', quantidade: 3},
  {id: 13,fruta: 'MAÇÃ', quantidade: 1},
  {id: 14,fruta: 'MACARRÃO COM MOLHO DE LINGUIÇA', quantidade: 3},
  {id: 15,fruta: 'PATÊ DE CENOURA', quantidade: 2},
  {id: 16,fruta: 'POLENTA', quantidade: 3},
  {id: 17,fruta: 'SOPA DE MACARRÃO COM CARNE E LEGUMES', quantidade: 2},
  {id: 18,fruta: 'SUCO DE CAJU', quantidade: 2},
  {id: 19,fruta: 'SUCO DE UVA', quantidade: 3},
  {id: 20,fruta: 'TUTU DE FEIJÃO', quantidade: 2}
];

console.log(this.fruit);
  }

  fsegunda(){
    
    let answer = this.fruit.filter(number => number.id == this.valor);
    let fruta = answer[0].fruta;
    let value = answer[0].quantidade;
    let resposta = false
    if(value > 0){
      
        this.segunda.forEach((element) => {
          if(element[0].nome == fruta){
            alert('já tem')
            resposta = true;
          }
        });
        
        if(resposta == false){
          let res = [{'nome': fruta, 'quantidade': 1}]
          this.segunda.push(res);
          console.log(this.segunda);
          

        
        }
     
      // if(answer2 == 'undefined'){
        
      //   console.log(this.segunda)
      // }else{
      //   alert('Produto já incluso!')
      // }
    }else{
      alert('Esse produto não tem quantidade mais, tente outro!')
    }
   
  }

  fterca(){
    
    
  }

  fquarta(){
    
    
  }

  fquinta(){
    
    
  }

  fsexta(){
    
    
  }


  click(i){
    this.valor = i;
  }
}
