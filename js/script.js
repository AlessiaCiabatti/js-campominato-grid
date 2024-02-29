// 1
// richiamo il container
const gridContainer = document.querySelector('.grid-container');
// 6
const btnGioca = document.querySelector('.btn-gioca');
// all'interno del click del bottone ci sta tutto, init 
btnGioca.addEventListener('click', init);

// 6
// funzione di inizializzazione
// init();

/*///////////
FUNCTION
*////////////

// 6
function init(){
  reset()

// 1
// realizzo il ciclo di 100 ripetizioni
for (let i = 1; i <= 100; i++){
  // 2
  // richiamo la function
  const square = getSquare(i);
  gridContainer.append(square);
}
}

// 2
// function
function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';
  // stampo il numero nei quadratini
  sq.innerHTML = numero;

  // 4
  // elemento custom
  sq._sqID = numero;

  sq.addEventListener('click', function(){
    console.log(this._sqID);
    // this -> è riferito all'elemento che contiene la funzione, in questo caso sq

    // // il numero sparisce
    // if(this.innerHTML === ''){
    // // 4
    // // vedo i numeri quando clicco
    // this.innerHTML = this._sqID;
    // }else{
    //   this.innerHTML = '';
    // }

    // 5
    // al secondo click saprisce il colore
    sq.classList.toggle('clicked')
  })

  return sq;
}

// 3
// creo il reset
function reset(){
  gridContainer.innerHTML = '';
}