
window.addEventListener("load",()=>{   //se escucha cuando carga el documento
    const display = document.querySelector(".current-number");
    const keyButtons = document.getElementsByClassName("btn");

    const keyButtonsArray = Array.from(keyButtons);

    keyButtonsArray.forEach((button) =>{
        button.addEventListener("click",()=>{
            calculadora(button,display);
        })

    })
})



function calculadora(button,display){
    switch(button.innerHTML){
        case "CLEAR":
            borrarTodo(display);
            break;
        case "=":
            calcular(display);
            break;
        case "DELETE":
            borrarDisplay(display);
            break;
        default:
            actualizar(display,button);
            break;

        
    }
}


function calcular(display){
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display,button){
    if(display.innerHTML == 0){
        display.innerHTML = "";

    }
    display.innerHTML = display.innerHTML + button.innerHTML;

}

function borrarTodo(display){
    display.innerHTML = 0;
}

/*
function sumar(n1,n2){
    let resultado = n1+n2;
    return resultado;
}

function restar(n1,n2){
    let resultado = n1-n2;
    return resultado;
}

function multiplicar(n1,n2){
    let resultado = n1*n2;
    return resultado;
}

function dividir(n1,n2){
    let resultado = n1/n2;
    return resultado
}

function operate(operator,a,b){
    if (operator == "+"){
        return sumar(a,b);
    }else if(operator == "-"){
        return restar(a,b);
    }else if(operator == "*"){
        return multiplicar(a,b);
    }else{
        if(b==0){
            return null
        }else{
            return dividir(a,b);
        };
    };
};



console.log(operate("+",1,5));
*/