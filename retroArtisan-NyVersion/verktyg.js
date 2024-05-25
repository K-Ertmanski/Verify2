// Funktion om att updatera progress bar baserat på checked checkboxes
function updateProgress(formId, progressBarId) {
    const form = document.getElementById(formId);
    const progressBar = document.getElementById(progressBarId);
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const checkedBoxes = form.querySelectorAll('input[type="checkbox"]:checked');

    const progress = (checkedBoxes.length / checkboxes.length) * 100;
    progressBar.style.width = progress + '%';
}

// Event listeners för checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const formId = checkbox.closest('form').id;
        const progressBarId = 'progress' + formId.charAt(0).toUpperCase() + formId.slice(1);
        updateProgress(formId, progressBarId);
    });
});
