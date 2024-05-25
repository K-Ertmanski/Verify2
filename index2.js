function openNav() 
{
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.zIndex = "1001"; /* sidebar är åvanför allt */
}

function closeNav() 
{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function toggleParagraph() 
{
    var paragraph = document.getElementById("paragraph");
    var innerContainer = document.getElementById("innerContainer");

    if (paragraph.classList.contains("hidden")) 
    {
        paragraph.classList.remove("hidden");
        paragraph.classList.add("visible");
    } 
    else 
    {
        paragraph.classList.remove("visible");
        paragraph.classList.add("hidden");
    }
}

function togglePopup() {
    var popupContent = document.getElementById("popupContent");
    if (popupContent.classList.contains("hidden")) {
        popupContent.classList.remove("hidden");
        popupContent.classList.add("visible");
    } else {
        popupContent.classList.remove("visible");
        popupContent.classList.add("hidden");
    }
}