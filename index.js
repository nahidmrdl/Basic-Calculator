const display = document.getElementById("display");

function addToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        const result = eval(display.value);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid operation");
        }

        display.value = result;
    } catch (error) {
        if (error instanceof SyntaxError || error.message === "Invalid operation") {
            display.value = "Error";
        } else {
            throw error;
        }
    }
}