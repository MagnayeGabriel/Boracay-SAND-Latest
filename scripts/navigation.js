function dropbtn() {
    var menu = document.getElementById("navLinks");
    var icon = document.getElementById("menu-btn");

    menu.style.display = (menu.style.display === "block") ? "none" : "block";

    if (menu.style.display === "block") {
        icon.src = "/resources/icons/close.png";  
    } else {
        icon.src = "/resources/icons/menu.png"; 
    }
}

