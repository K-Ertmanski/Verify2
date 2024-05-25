// Funktion för att updatera proggressbar 
function updateProgress(sectionId, progressBarId) {
    const section = document.getElementById(sectionId);
    const checkboxes = section.querySelectorAll('input[type="checkbox"]');
    const checked = section.querySelectorAll('input[type="checkbox"]:checked');
    const progress = (checked.length / checkboxes.length) * 100;
    const progressBar = document.getElementById(progressBarId);
    progressBar.querySelector('.progress-bar-inner').style.width = progress + '%';
}

// Lägg till progress dynamiskt
document.querySelectorAll('.progress-bar').forEach(bar => {
    const innerBar = document.createElement('div');
    innerBar.classList.add('progress-bar-inner');
    bar.appendChild(innerBar);
});
