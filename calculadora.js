function calculadora(num1, num2, op){
    switch(op){
        case '+':
            return sumar(num1, num2);
        case '-':
            return restar(num1, num2);
        case '*':
            return multiplicar(num1, num2);
        case '/':
            return dividir(num1, num2);
        case '**':
            return potencia(num1, num2)
        default:
            return 'Opción inválida'
    }
}

function sumar(num1,num2){
    return num1 + num2
}

function restar(num1,num2){
    return num1-num2
}

function division(num1,num2){
    if (num2 !== 0){
        return num1 / num2;
    }
    else{
        return "No se puede dividir entre cero";
    }
}

function multiplicar(num1,num2){
    return num1 * num2;
}

function potencia(num1,num2){
    return Math.pow(num1, num2)

}

