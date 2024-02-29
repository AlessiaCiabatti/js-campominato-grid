// 1
// richiamo il container
const gridContainer = document.querySelector('.grid-container');

reset()

// 1
// realizzo il ciclo di 100 ripetizioni
for (let i = 1; i <= 100; i++){
  // 2
  // richiamo la function
  const square = getSquare(i);
  gridContainer.append(square);
}


/*///////////
FUNCTION
*////////////

// 2
// function
function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';
  sq.innerHTML = numero;
  sq.addEventListener('click', function(){
    console.log(this.innerHTML);
    // this -> è riferito all'elemento che contiene la funzione, in questo caso sq
  })

  return sq;
}

// 3
// creo il reset
function reset(){
  gridContainer.innerHTML = '';
}