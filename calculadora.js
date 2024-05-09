function calculadora(num1, num2, op){
    switch(op){
        case '+':
            return sumar(num1, num2);
        case '-':
            return restar(num1, num2);
        case '*':
            return multiplicar(num1, num2);
        case '/':
            return dividir(num1, num2)
        default:
            return 'Opción inválida'
    }
}

function sumar(num1,num2){
    return num1 + num2
}

