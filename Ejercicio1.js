/*

Tengo desarrollada la siguiente función en javascript
function suma (a,b,callback){
let c = a +b;
callback( );
}
¿Que es el tercer parámetro recibido?
¿En que casos es obligatorio desarrollar este tipo de funciones?
Realizar un llamado a la función de ejemplo.


Respuesta: el tercer parámetro es una función. Es obligatorio para las promesas
*/

function suma (a,b,callback){
    let c = a +b;
    callback( );
    }


    suma (1,4, callback);