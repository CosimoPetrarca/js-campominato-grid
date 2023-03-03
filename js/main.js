'Use strict'

// Seleziono l'elemento HTML con ID 
const gameGrid = document.querySelector('.griglia');

// Selezioniamo il bottone e la griglia
let bottone = document.querySelector("button");

// Quando il bottone viene cliccato, mostriamo la griglia
bottone.addEventListener("click", function() {
    let appairGriglia = document.querySelector('.griglia');
    appairGriglia.classList.toggle('show');
});

// Definisco una funzione per creare la griglia di gioco
function createGameGrid(colonne, righe) {
    // Utilizzo un ciclo for per creare 100 celle di gioco
    for (let i = 1; i <= colonne * righe; i++) {
        // Creo un nuovo elemento div per ogni cella di gioco
        const cell = document.createElement('div');
        // Aggiungo il numero della cella come testo all'interno della cella stessa
        cell.textContent = i;
        // Aggiungo la cella alla griglia di gioco 
        gameGrid.append(cell);

        // Aggiungo un evento click a ogni cella di gioco
        cell.addEventListener('click', function () {
            const element = document.querySelector('.blue');
            cell.classList.toggle('blue');
            console.log(i);
        });
    }
    return 
}

// Chiamiamo la funzione createGameGrid per creare la griglia di gioco
createGameGrid(10, 10);

