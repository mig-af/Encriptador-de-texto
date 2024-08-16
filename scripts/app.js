
let letrasParaDesencriptar = ["ai", "enter", "imes", "ober", "ufat"];
let vocales = ["a", "e", "i", "o", "u"];
let caracteresNoPermitidos = /[A-Z á-ú à-ù Ñ !@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]/g
let primeraEncriptacion = false;


function desencriptarPalabra(palabrita){
    let desencriptado = false;
    //esta variable es para acceder a los indices de la lista letrasPara desencriptar
    let cont=0
    let palabraDesencriptada = palabrita;
    //Iniciamos esta variable para controlar la veces que se analizo la palabra para buscar la letra a desencriptar
    //Debe ser menor a la cantidad de palabras a desencriptar, si es mayor significa que ya no hay mas palabras para desencriptar
    let controlador = 0;
    //esta variable es para cortar el bucle si ocurre algun error
    let cortarBucle = 0;

    //Analizamos cada letra de la palabra
    while(desencriptado != true){
        
        //verificamos la variable cont, para acceder a los indices de la lista lestrasDesencriptar
        if(cont > letrasParaDesencriptar.length-1){cont=0}
        
        //buscamos las coincidencias
        if(palabraDesencriptada.match(letrasParaDesencriptar[cont]) != null){
            palabraDesencriptada = palabraDesencriptada.replace(letrasParaDesencriptar[cont], vocales[cont]);
            
            controlador = 0;
        }else{
        
            controlador ++;
            //verificamos si ya se analizaron todas las coincidencias
            if(controlador > letrasParaDesencriptar.length){
                //console.log(palabraDesencriptada);
                desencriptado = true;
            }
        }  
        cont ++;
        cortarBucle ++;
        
        if(cortarBucle > 100){
            palabraDesencriptada = "Hubo un error no se logro desencriptar el texto";
            break;
        }

    }
    return palabraDesencriptada;
}


function verificarCaracteres(texto, caracteres){
    let existenCaracteres = (texto.match(caracteresNoPermitidos) != null)? [true, texto.match(caracteres)] : false 
    return existenCaracteres;
}


function encriptarFrase(texto){
    let textoEncriptado = "";
    
    //recorremos el texto 
    for(let i=0; i<texto.length; i++){
        //definimos una variable para guardar las letras que no son vocales
        let letra = "";
        //Por cada letra en el texto, analizamos si coincide con cada vocal dentro la lista
        for( let j=0; j<vocales.length; j++){
            
            //si la letra coincide con una vocal dentro la lista, se hace el reemplazo por las letras a encriptar
            if(texto[i] === vocales[j] ){
                textoEncriptado += letrasParaDesencriptar[j];
            //si la letra no es una vocal que esta dentro la lista vocales, se guarda en la variable letra
            }else if(vocales.includes(texto[i]) == false){
                letra = texto[i];
            }
            
        }
        //incluimos la letra que no es una vocal en la variable textoEncriptado
        textoEncriptado += letra;
    }
    //retornamos todo el texto encriptado
    return textoEncriptado;

}


function encriptar(){

    if(primeraEncriptacion == true){
        let textoUsuario = document.getElementById("texto").value;
        document.getElementById("textoEncriptado").innerHTML=textoUsuario;
        
        return;
    }else{
        //console.log(encriptado);
        cambiarEstiloElemento(".encriptador__resultado__texto__encriptado", "display", "flex");
        //document.querySelector(".encriptador__resultado__texto__encriptado").style.display="flex";
        eliminarElemento(".encriptador__resultado__imagen");
        eliminarElemento(".encriptador__resultado__texto");
        
        let text = document.getElementById("texto").value;
        //cambiarEstiloElemento(".encriptador__resultado__texto__encriptado", "display", "flex");
        //document.querySelector(".encriptador__resultado__texto__encriptado").style.display="flex";
        document.getElementById("textoEncriptado").innerHTML=text;
        primeraEncriptacion = true;
        return;
    }
}



function eliminarElemento(nombreClaseId){
    document.querySelector(nombreClaseId).remove();
    return;
}
function cambiarEstiloElemento(elemento,propieda, valor){
    window["document"]["querySelector"](elemento)["style"][propieda]=valor;
    //window.document.querySelector(elemento).style.backgroundColor=valor;
    return;
}





