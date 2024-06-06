function manageNavbar() {
    let sideNavbar = document.getElementById("sideNavbar");
    let isHorizontal = window.matchMedia("(max-aspect-ratio: 4/3)").matches;


    let isNavbarCollapsed = sideNavbar.offsetHeight == 0;
    let opacity = isNavbarCollapsed ? 1 : 0;
    let size = isNavbarCollapsed ? "10vmax" : 0;

    for (let child of sideNavbar.children) {
        for (let el of child.children) {
            el.style.opacity = opacity;
        }
    }

    sideNavbar.style.height = size;
    sideNavbar.style.width = "100%";
    sideNavbar.style.opacity = opacity;
}

function addEventHandlers() {
    let aspect_ratio = window.matchMedia("(max-aspect-ratio: 4/3)");
    aspect_ratio.onchange = (event) => {
        let sideNavbar = document.getElementById("sideNavbar");
        let size = (sideNavbar.offsetHeight == 0 || sideNavbar.offsetWidth == 0) ? 0 : "10vmax";
        let maximum = "100%";

        if (event.matches) { //if it's vertical viewport
            sideNavbar.style.width = maximum;
            sideNavbar.style.height = "10vh";
            sideNavbar.style.opacity = 1;
            for (let child of sideNavbar.children) {
                for (let el of child.children) {
                    el.style.opacity = 1;
                }
            }
        } else { //if it's horizontal viewport
            sideNavbar.style.width = size;
            sideNavbar.style.height = maximum;
        }
    };
}