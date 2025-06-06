// Objeto con tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87   // British Pound
};

// Convertir de Euros a Dólares
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

// Convertir de Dólares a Yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

// Convertir de Yenes a Libras
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

// Sumar dos números
const sum = (a,b) => {
    return a + b;
}

// Registro en consola
console.log(sum(7,3))

// Exportar funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
