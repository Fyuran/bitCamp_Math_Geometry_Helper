//appena la pagina si apre, viene mostrato un modale introduttivo
var opening_modal = new bootstrap.Modal(document.getElementById("opening_modal"));
opening_modal.show();

//mostra lo schermo alla chiusura del modale
function showScreen() {
    document.getElementById("screen").removeAttribute("hidden");
}

//Area, perimetro e reset quadrato
function perimeter_square() {
    let side = parseFloat(document.getElementById("side_sqr").value);
    if (side > 0) {
        document.getElementById("perimeter_sqr").innerHTML = (Math.floor((side * 4) * 100)) / 100 //per arrotondare alla seconda cifra
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function area_square() {
    let side = parseFloat(document.getElementById("side_sqr").value);
    if (side > 0) {
        document.getElementById("area_sqr").innerHTML = (Math.floor((Math.pow(side,2)) * 100)) / 100 //per arrotondare alla seconda cifra
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function reset_square() {
    document.getElementById("perimeter_sqr").innerHTML = "Lx4";
    document.getElementById("area_sqr").innerHTML = "L&#178;";
}

//Area, perimetro e reset del rettangolo
function perimeter_rectangle() {
    let base = parseFloat(document.getElementById("base_rect").value);
    let height = parseFloat(document.getElementById("height_rect").value);
    if (base > 0 && height > 0) {
        document.getElementById("perimeter_rect").innerHTML = (Math.floor((2*base+2*height) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function area_rectangle() {
    let base = parseFloat(document.getElementById("base_rect").value);
    let height = parseFloat(document.getElementById("height_rect").value);
    if (base > 0 && height > 0) {
        document.getElementById("area_rect").innerHTML = (Math.floor((base*height) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function reset_rectangle() {
    document.getElementById("perimeter_rect").innerHTML = "2b+2h";
    document.getElementById("area_rect").innerHTML = "b*h";
}


//Area, perimetro e reset del triangolo
function perimeter_triangle() {
    let side1 = parseFloat(document.getElementById("side1_tri").value);
    let side2 = parseFloat(document.getElementById("side2_tri").value);
    let side3 = parseFloat(document.getElementById("side3_tri").value);

    if (side1 > 0 && side2 > 0 && side3 > 0) {
        if ((side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1) {//Controllo del rispetto delle regole dei lati del triangolo
            document.getElementById("perimeter_tri").innerHTML = (Math.floor((side1 + side2 + side3) * 100)) / 100
        }
        else {
            alert("Sapevi che un lato del triangolo non può mai essere maggiore della somma degli altri due? Sembra proprio tu non lo sapessi! Hai creato un triangolo che non può esistere.")
        }
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function area_triangle() {
    let side1 = parseFloat(document.getElementById("side1_tri").value);
    let height = parseFloat(document.getElementById("height_tri").value);

    if (side1 > 0 && height > 0) {
        document.getElementById("area_tri").innerHTML = (Math.floor((side1*height/2) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function reset_triangle() {
    document.getElementById("perimeter_tri").innerHTML = "L&#8321;+L&#8322;+L&#8323;";
    document.getElementById("area_tri").innerHTML = "<span class='fr'><span>(b*h)</span><span class='fd'>2</span></span>";
}

//area, perimetro e reset del trapezio
function perimeter_trapezoid() {
    let base_B =  parseFloat(document.getElementById("base_B_trap").value);
    let base_b = parseFloat(document.getElementById("base_b_trap").value);
    let side = parseFloat(document.getElementById("side_trap").value);
    if (base_b > 0 && base_B > 0 && side > 0) {
        document.getElementById("perimeter_trap").innerHTML = (Math.floor((base_b + base_B + side*2) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }

}

function area_trapezoid() {
    let base_B = parseFloat(document.getElementById("base_B_trap").value);
    let base_b = parseFloat(document.getElementById("base_b_trap").value);
    let height = parseFloat(document.getElementById("height_trap").value);

    if (base_b > 0 && base_B > 0 && height > 0) {
        document.getElementById("area_trap").innerHTML = (Math.floor(((base_b + base_B) * height / 2) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}


function reset_trapezoid() {
    document.getElementById("perimeter_trap").innerHTML = "B+b+2L";
    document.getElementById("area_trap").innerHTML = "<span class='fr'><span>(B+b)*h</span><span class='fd'>2</span></span>";
}

//Area, perimetro e reset del rombo
function perimeter_rhombus() {
    let side = parseFloat(document.getElementById("side_rhombus").value);

    if (side > 0) {
        document.getElementById("perimeter_rhombus").innerHTML = (Math.floor((side*4) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function area_rhombus() {
    let diagonal_d = parseFloat(document.getElementById("diagonal_d_rhombus").value);
    let diagonal_D = parseFloat(document.getElementById("diagonal_D_rhombus").value);

    if (diagonal_D > 0 && diagonal_d > 0) {
        document.getElementById("area_rhombus").innerHTML=(Math.floor((diagonal_d * diagonal_D/2) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function reset_rhombus() {
    document.getElementById("perimeter_rhombus").innerHTML = "L*4";
    document.getElementById("area_rhombus").innerHTML = "<span class='fr'><span>D*d</span><span class='fd'>2</span></span>";
}

//Area, perimetro e reset del parallelogramma
function perimeter_parallelogram() {
    let base = parseFloat(document.getElementById("base_parallelogram").value);
    let side = parseFloat(document.getElementById("side_parallelogram").value);

    if (base > 0 && side > 0) {
        document.getElementById("perimeter_parallelogram").innerHTML=(Math.floor((2*base+2*side) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }

}

function area_parallelogram() {
    let base = parseFloat(document.getElementById("base_parallelogram").value);
    let height = parseFloat(document.getElementById("height_parallelogram").value);

    if (base > 0 && height > 0) {
        document.getElementById("area_parallelogram").innerHTML=(Math.floor((base*height) * 100)) / 100
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function reset_parallelogram() {
    document.getElementById("perimeter_parallelogram").innerHTML = "2b+2L";
    document.getElementById("area_parallelogram").innerHTML = "b*h";
}


//area, circonferenza e reset del cerchio
function perimeter_circle() {
    let radius = parseFloat(document.getElementById("radius_circle").value);
    if (radius > 0) {
        document.getElementById("perimeter_circle").innerHTML = ((Math.floor((2 * radius) * 100)) / 100) + "&#960 / " + ((Math.floor((2 * Math.PI * radius) * 100)) / 100);
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function area_circle() {
    let radius = parseFloat(document.getElementById("radius_circle").value);
    if (radius > 0) {
        document.getElementById("area_circle").innerHTML = (Math.floor((Math.pow(radius, 2)) * 100)) / 100 + "&#960 / " + (Math.floor((Math.PI*(Math.pow(radius, 2))) * 100)) / 100;
    }
    else {
        alert("I dati che hai inserito non sono corretti! Forse vuoi ricontrollare?");
    }
}

function reset_circle() {
    document.getElementById("perimeter_circle").innerHTML = "2&#960;r";
    document.getElementById("area_circle").innerHTML = "&#960;r&#178";
}




