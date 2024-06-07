//appena la pagina si apre, viene mostrato un modale introduttivo
var opening_modal = new bootstrap.Modal(document.getElementById("opening_modal"));
opening_modal.show();

//mostra lo schermo alla chiusura del modale
function showScreen() {
    document.getElementById("screen").removeAttribute("hidden");
}



//Variabili globali che tengono il conto del livello a cui arriva il giocatore, degli hints e skips rimasti e degli errori commessi
var level_index = 0;
var hints_left = 3;
var skips = 2;
var tries_left = 4;
//dichiarazione variabili: un carosello per le immagini della mappa, e le variabili "questions" e "answer" che vengono progressivamente scelte dalle
//liste parent
var maps = ["img/treasure_hunt/map0.jpeg",
    "img/treasure_hunt/map1.jpeg",
    "img/treasure_hunt/map2.jpeg",
    "img/treasure_hunt/map3.jpeg",
    "img/treasure_hunt/map4.jpeg",
    "img/treasure_hunt/map5.jpeg",
    "img/treasure_hunt/map6.jpeg",
    "img/treasure_hunt/map7.jpeg",
    "img/treasure_hunt/map8.jpeg"];
var map = document.getElementById("map");
//Lista con i nomi delle domande e gli id delle risposte, per poter avanzare progressivamente
var questions = ["quest1", "quest2", "quest3", "quest4", "quest5", "quest6", "quest7", "quest8"];
var question = document.getElementById(questions[level_index]);
var answer = document.getElementsByName(questions[level_index]);
var hints = [//lista degli indizi
    "Tra un anno la somma delle loro età non sarà 49, ma 53.",
    "Prova a ragionare al contrario: se il trentesimo giorno lo stagno è ricoperto di foglie, il giorno prima come sarà? E quello prima ancora?",
    "Conosci la canzone ‘Lateralus’ dei Tool?",
    "So che intuitivamente vorresti fare 20-16, ma devi pensare a tutti i dati forniti!",
    "Usa la logica, non la matematica.",
    "Ti ricordi le proprietà dei rettangoli? Torna alla sezione geometria!",
    "La somma delle cifre, per otto, più uno. Che ne dici di scrivere un’equazione?",
    "Quanti sono i cubetti visibili in un cubo di Rubik? "];
var hint = hints[level_index];


function start() {//Reset di tutti i valori: mappa, punti, hints e skips
    document.getElementById("start").setAttribute("hidden", "");
    document.getElementById("map").src = "img/treasure_hunt/map0.jpeg";
    document.getElementById(questions[level_index]).setAttribute("hidden", "");
    level_index = 0; //reset del livello, skips, hints e tries
    hints_left = 3;
    skips = 2;
    tries_left = 4;
    document.getElementById(questions[level_index]).removeAttribute("hidden"); 
    document.getElementById("hints_left").innerText = "3";
    document.getElementById("skip_left").innerText = "2";
    document.getElementById("tries_left").innerText = "4";
}

function guess() {//cuore del gioco

    
    if (tries_left > 0) {//Se ci sono ancora tentativi il gioco parte
        for (i = 0; i <= maps.length; i++) {//ciclo for che trova quale risposta è checked
            if (answer[i].checked) {
                if (answer[i].value == "true") {//Se la risposta è giusta, vengono aggiornati i seguenti valori:
                    question.setAttribute("hidden", "");//la domanda viene nascosta
                    level_index++;//il livello sale di uno
                    question.setAttribute("hidden", "");//la domanda viene nascosta
                    if (level_index < questions.length) {//Si fa un controllo per vedere se è stata indovinata l'ultima domanda
                        map.src = maps[level_index];//Se non è così, si aggiorna mappa, domanda, risposta e indizio
                        question = document.getElementById(questions[level_index]);
                        question.removeAttribute("hidden");
                        answer = document.getElementsByName(questions[level_index]);
                        hint = hints[level_index];
                        document.getElementById("hint").innerText = "";
                    }
                    else {
                        map.src = maps[level_index];//altrimenti, si mostra il modale di vittoria
                        var win_modal = new bootstrap.Modal(document.getElementById("win_modal"));
                        win_modal.show();
                    }
                }
                else {
                    alert("Risposta errata! Riprova!");
                    tries_left--;
                    answer[i].checked = false;
                    document.getElementById("tries_left").innerHTML = tries_left;
                    if (tries_left == 0) {
                        var lose_modal = new bootstrap.Modal(document.getElementById("lose_modal"));
                        lose_modal.show(); }
                    
                }
            }
            
        }
    }
    else {
        alert("Tentativi esauriti!")
    }
    
}

function giveHint() {//Se il giocatore non sa rispondere a una domanda, potrà chiedere fino a tre indizi
    if (hints_left > 0) {
        hints_left--;
        document.getElementById("hint").innerText = hint;
        document.getElementById("hints_left").innerText = hints_left;
    }
    else {
        document.getElementById("hint").innerText = "Non hai più indizi a disposizione!";
    }
}

function skip() {//Se il giocatore non sa rispondere a una domanda, potrà saltarne fino a 2
    if (skips > 0) {
        question.setAttribute("hidden", "");//Il gioco si comporta come si comporta quando si indovina la risposta
        level_index++;
        skips--;
document.getElementById("skip_left").innerHTML=skips;
        if (level_index < questions.length) {
            map.src = maps[level_index];
            question = document.getElementById(questions[level_index]);
            question.removeAttribute("hidden");
            answer = document.getElementsByName(questions[level_index]);
            hint = hints[level_index];
            document.getElementById("hint").innerText = "";
        }
        else {
            map.src = maps[level_index];
            var win_modal = new bootstrap.Modal(document.getElementById("win_modal"));
            win_modal.show();
        }
    }



        
    
    else {
        document.getElementById("hint").innerText = "Skips esauriti!";
    }
}
