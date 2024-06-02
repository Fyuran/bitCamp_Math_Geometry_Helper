function manageNav() {
    let sideNavbar = document.getElementById("sideNavbar");
    let width = sideNavbar.offsetWidth;
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    if (width != 0) {

        sideNavbar.style.width = 0;
        for (let child of sideNavbar.children) {
            for (let button of child.querySelectorAll(".sideNavButton")) {
                button.style.opacity = 0;
            }
        }
    }
    else {
        for (let child of sideNavbar.children) {

            for (let button of child.querySelectorAll(".sideNavButton")) {
                button.style.opacity = 1;
            }
        }
        sideNavbar.style.width = "10vmax";
    }
        

}

/*
    <button type="button" class="btn btn-secondary p-2 my-3 mx-1">Flex item 1</button>
    sessionStorage.setItem("sideNavbar_width", sideNavbar.style.width);
    sessionStorage.getItem("sideNavbar_width");
*/