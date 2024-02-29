Griglia Campo Minato
===

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## SVOLGIMENTO
1. realizzazione griglia
  - realizziamo gli elmeenti in HTML e CSS
  - richiamo in una costante il container
  - realizzo un ciclo di 100 ripetizioni

2. realizzare quadratino dentro la griglia
  - realizziamo gli elmenti in HTML e CSS
    - function
      - creare l'elemento in js con createEelement('div')
      - associase la classe square(css) in js
      - associare il numero al quadratino in js
      - associare un addEventListener a sq che mostra il valore del quadratino
      
        - richiama la function dentro il ciclo for
        - aggiungi i quadratini al container (innerHTML o APPEND)
        - devo sapere quale elemento clicco, e riportare il suo valore in console.log()
          - a const square = getSquare() gli passo l'indice i, lo creo all'interno della function sq.innerHTML = numero e inserisco 'numero' alla function. In questo modo numero i quadratini e riesco a visualizzarli in console

3. reset
  - function
    - imposta il contenuto HTML dell’elemento gridContainer a una stringa vuota. In pratica, stai rimuovendo tutto il contenuto HTML. nome.innerHTML = '';

