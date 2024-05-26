// Funktion för att bekräfta radering av behållaren
function confirmDeletion(containerId) {
    var container = document.getElementById(containerId);
    // Visa bekräftelseknapp
    container.querySelector('.confirm-btn').style.display = 'block';
}

// Funktion för att radera behållaren och dess innehåll
function deleteDiv(containerId) {
    var container = document.getElementById(containerId);
    // Ta bort behållaren och dess innehåll
    container.remove();
}
