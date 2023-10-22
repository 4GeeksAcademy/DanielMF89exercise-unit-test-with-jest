// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("3.745 dollar should be 156.5 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen	 } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen	(3.745);

   
    const expected = 3.745 / 1.07 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.745)).toBe(547.75); 
})
test("547,75 yen should be 509,900475 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(547,75);

    
    const expected = 547.75 / 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(547.75)).toBe(3.045); 
})