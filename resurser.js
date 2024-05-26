// Existerande JS
function expandImage(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

function closeExpandedImage() {
    var container = document.querySelector('.expanded-container');
    container.style.display = 'none';
}
