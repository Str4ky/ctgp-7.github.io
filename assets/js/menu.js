function open_menu() {
    var menu = document.getElementById('menu');
    var languages = document.getElementById('languages');
    var computedStyle = window.getComputedStyle(menu);

    if (computedStyle.display === "none" || computedStyle.display === "") {
        menu.style.display = "block";
        languages.style.display = "none";
    } else {
        menu.style.display = "none";
        languages.style.display = "none";
    }
}

function open_languages() {
    var languages = document.getElementById('languages');
    var menu = document.getElementById('menu');
    var computedStyle = window.getComputedStyle(languages);

    if (computedStyle.display === "none" || computedStyle.display === "") {
        languages.style.display = "block";
        menu.style.display = "none";
    } else {
        languages.style.display = "none";
        menu.style.display = "none";
    }
}