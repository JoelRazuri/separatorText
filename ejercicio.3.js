/*
    Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const separatorText = (text="", sepator=undefined) => (!text)
    ?console.warn("Debe ingresar una cadena de texto")
    : (sepator === undefined)
        ?console.warn("Debe ingreser un caracter separador")
        :console.info(text.split(sepator));

console.info("EJERCICIO 3");
separatorText("hola que tal"," ");

