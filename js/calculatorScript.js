let currentNumber = "";
let previousNumber = "";
let result = "";
let lastOperator = "";


function appendNumber(number) {
    if (lastOperator == "" && result != "") {
        clearDisplay();
    }

    if (number == "." && !(currentNumber.includes("."))) {
        if (currentNumber == "") {
            currentNumber = "0" + number; //esempio 0.5
        }

        else {
            currentNumber += number; //->esempio 3.5
        }
    }

    else if (number == "." && currentNumber.includes(".")) {
        return; //c'� gi� il punto
    }

    else {
        currentNumber += number; // altri caratteri che non sono un "."
    }

    updateDisplay();

}

function setOperation(operator) {
    if (previousNumber == "") //se previous number � uguale a "" , allora non ho ancora il secondo operando per eseguire l'operazione
    {
        previousNumber = currentNumber; //passo il numero inserito dall'utente che � contenuto in currentNumber a previousNumber

    }

    else {
        //sia previousNumber che currentNumber sono valorizzati, quindi posso eseguire l'operazione

        calculate();

        //passo il risultato a previousNumber, in modo che quando dovr� concatenare ulteriori operazioni, il primo operando sia sempre riportato su previousNumber e il secondo(ultimo) sia su currentNumber
        previousNumber = result;

        //resetto currentNumber per un nuovo inserimento
        currentNumber = "";
    }

    lastOperator = operator; //salvo l'operatore per sapere dentro il metodo calculate che tipo di operazione devo eseguire
    currentNumber = ""; //resetto currentNumber per poterlo sfruttare nell'inserimento di un nuovo numero
}

function calculate() {
    if (currentNumber != "" && previousNumber != "") {
        switch (lastOperator) {
            case "+":
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;

            case "-":
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;

            case "*":
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;

            case "/":
                result = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
        }

        updateResult();
        lastOperator = "";
    }
}

function clearDisplay() {

    display.innerText = "";
    clearData();
}

function clearData() {
    currentNumber = "";
    previousNumber = "";
    result = "";
    lastOperator = "";
}


function updateDisplay() 
{
    if(currentNumber != Infinity)
    {
        display.innerText = currentNumber;
    }
    
    else
    {
        display.innerText = "non calcolabile";
    }
}

function updateResult() 
{
    if(result != Infinity)
    {
        display.innerText = result;
    }
    
    else
    {
        display.innerText = "non calcolabile";
    }
}

function toggleSign() 
{
    if(result == "")
    {
        currentNumber = currentNumber.startsWith("-") ? currentNumber.substring(1) : "-" + currentNumber;
        updateDisplay();
    }

    else
    {
        let resultString = result.toString();
        result = resultString.startsWith("-") ? resultString.substring(1) : "-" + resultString;             
        updateResult();
    }
}
