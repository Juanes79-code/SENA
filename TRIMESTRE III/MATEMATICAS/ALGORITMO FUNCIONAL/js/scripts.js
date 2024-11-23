var l1
var l2 
var l3 
var resultado
function validaciones() {
    l1 = document.getElementById("l1").value
    l2 = document.getElementById("l2").value
    l3 = document.getElementById("l3").value

//    validaciones
    if (l1 ==""){
        alert(" Por favor, llene el campo 1");
        return;
    } else if (l2 ==""){
        alert(" Por favor, llene el campo 2");
        return;
    } else if (l3 ==""){
        alert(" Por favor, llene el campo 3");
        return;
    }
    // Tipo de triangulos por lado
    else if (l1 == l2 && l2 == l3){
        resultado = " Equilatero porque todos los lados son iguales"
    } else if (l1 == l2 || l1 == l3 || l2 == l3){
        resultado = " Isosceles porque dos lados son iguales"
    } else {
        resultado = " Escaleno porque todos los lados son diferentes"
    }

    // Tipo de triangulo por angulo
        // Ordenamos los lados para facilitar los cálculos
        const lados = [l1, l2, l3].sort((a, b) => a - b);
        const [a, b, c] = lados; // a <= b <= c
    
        // Calculamos el ángulo opuesto al lado más largo usando el teorema de los cosenos
        const anguloC = Math.acos((a**2 + b**2 - c**2) / (2 * a * b)) * (180 / Math.PI);
    
        if (anguloC > 90) {
            resultado2 =  " Triángulo Obtusángulo tiene un angulo mayor a 90°";
        } else if (anguloC === 90) {
            resultado2 = " Triángulo Rectángulo tienen un angulo de 90°";
        } else  {
            resultado2 = " Triángulo Acutángulo tienen un angulo menor de 90°";
            
        }
        final(resultado,resultado2)
    

}
function final(resultado,resultado2) {
    var res = " El tipo de triangulo por lado es :" + resultado + " El tipo de triangulo por angulo por lado es :" + resultado2;
    
    
  
    alert(res);
    
}