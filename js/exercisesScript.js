var guessedAnswersCount;
var wrongAnswersCount;

var correctAnswers = 
{
    question1: 4,
    question2: 1,
    question3: 8,
    question4: 3,
    question5: 40,
    question6: 40,
    question7: 25.12,
    question8: 1200,
    question9: 153
};

function checkAnswers() {            
    guessedAnswersCount = 0;
    wrongAnswersCount = 0;

    //input utente
    let radios1 = document.getElementsByName('question1'); //radiobutton prima domanda
    let radios2 = document.getElementsByName('question2'); //radiobutton seconda domanda
    let radios3 = document.getElementsByName('question3'); //radiobutton terza domanda
    let radios4 = document.getElementsByName('question4'); //radiobutton quarta domanda
    let radios5 = document.getElementsByName('question5'); //radiobutton quinta domanda
    let radios6 = document.getElementsByName('question8'); //radiobutton ottava domanda
    let radios7 = document.getElementsByName('question9'); //radiobutton nona domanda
    let text6 = document.getElementsByName('rectangleQuestion')[0]; //textarea1(trim per togliere gli spazi)
    let text7 = document.getElementsByName('circleQuestion')[0]; //textarea2(trim per togliere gli spazi)

    //metodo della classe string replace per sostituire la virgola con il punto per i numeri con decimali
    let floatText6 = text6.value.trim().replace(',' , '.');
    let floatText7 = text7.value.trim().replace(',' , '.');
    floatText6 = parseFloat(floatText6); //trasformo il testo in un numero float
    floatText7 = parseFloat(floatText7); //trasformo il testo in un numero float

    /*faccio riferimento ai paragrafi per i risultati tramite id*/
    let guessedAnswers = document.getElementById("guessedAnswers");
    let wrongAnswers = document.getElementById("wrongAnswers");
                            
    /*richiamo la funzione per verificare il risultato dei radiobuttons*/
    checkRadioAnswers(radios1, 'question1');
    checkRadioAnswers(radios2, 'question2');
    checkRadioAnswers(radios3, 'question3');
    checkRadioAnswers(radios4, 'question4');
    checkRadioAnswers(radios5, 'question5');
    checkRadioAnswers(radios6, 'question8');
    checkRadioAnswers(radios7, 'question9');
    
    /*richiamo la funzione per verificare il risultato dei textAreas*/
    checkTextAnswers(floatText6, 'question6', text6);
    checkTextAnswers(floatText7, 'question7', text7);

    /*aggiorno i valori dei paragrafi*/
    guessedAnswers.innerHTML = "giuste: " + guessedAnswersCount + "/9";
    wrongAnswers.innerHTML = "sbagliate: " + wrongAnswersCount + "/9";
    
    console.log("Risposte corrette: " + guessedAnswersCount);
    console.log("Risposte sbagliate: " + wrongAnswersCount);
}

function checkRadioAnswers(radios, question) {
    let radioSelected = false;

    /*ciclo nei radiobuttons di ogni cards*/
    for(let i = 0; i < radios.length; i++) {
        //se quel radiobutton è attivo (checkato)
        if(radios[i].checked) {
            radioSelected = true;
            //ed è uguale al valore corretto
            if(radios[i].value == correctAnswers[question]) {
                guessedAnswersCount++; //aumenta il numero di risposte indovinate
            } else {
                wrongAnswersCount++; //aumenta il numero di risposte sbagliate
            }
        }
    }

    if(!radioSelected) {
        radios[0].classList.add('is-invalid');
        radios[1].classList.add('is-invalid');
        radios[2].classList.add('is-invalid');
    } else {
        radios[0].classList.remove('is-invalid');
        radios[1].classList.remove('is-invalid');
        radios[2].classList.remove('is-invalid');
    }
}

function checkTextAnswers(textValue, question, textElement) {
    if (Number.isNaN(textValue)) {
        textElement.classList.add('is-invalid');
        return;
    }

    textElement.classList.remove('is-invalid');

    if (textValue == correctAnswers[question]) {
        guessedAnswersCount++;
    } else {
        wrongAnswersCount++;
    }
}
