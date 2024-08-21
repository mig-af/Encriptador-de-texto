
let letrasParaDesencriptar = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
let vocales = ["a", "e", "i", "o", "u"];
let caracteresNoPermitidos = /[A-Zá-úà-ùÑ!@#$%^&*)(_+\-=\[\]{};:"\\|,.<>\/?]/g
let primeraEncriptacion = true;



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

    //
    let coincidencias = 0;

    //Analizamos cada letra de la palabra
    while(desencriptado != true){
        
        //verificamos la variable cont, para acceder a los indices de la lista lestrasDesencriptar
        if(cont > letrasParaDesencriptar.length-1){cont=0}
        
        //buscamos las coincidencias
        if(palabraDesencriptada.match(letrasParaDesencriptar[cont]) != null){
            palabraDesencriptada = palabraDesencriptada.replace(letrasParaDesencriptar[cont], vocales[cont]);
            coincidencias ++;
            controlador = 0;
        }else{
        
            controlador ++;
            
            if(coincidencias < 5){
                desencriptado = true;

            }
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

function verificarCaracteres(texto, caracteresProhibidos){
    //verificamos si existen caracteres especiales, devolvera false si no existen los caracteres
    let existenCaracteres = (texto.match(caracteresNoPermitidos) != null)? [true, texto.match(caracteresProhibidos)] : false 
    return existenCaracteres;
}
function eliminarElemento(nombreClaseId){
    document.querySelector(nombreClaseId).remove();
    return;
}
function cambiarEstiloElemento(elemento,propiedad, valor){
    window["document"]["querySelector"](elemento)["style"][propiedad]=valor;
    //window.document.querySelector(elemento).style.backgroundColor=valor;
    
    return;
}
function escribirTexto(elemento, texto){
    document.querySelector(elemento).innerHTML = texto;
    return;
}

function encriptar(){
    let text = document.getElementById("texto").value;
    let caracteresEspeciales = verificarCaracteres(text, caracteresNoPermitidos);
    let textoEncriptado = "";

    if(text != ""){
        console.log(text);
        if(caracteresEspeciales == false){

            textoEncriptado = encriptarFrase(text);
            if(primeraEncriptacion == true){
                eliminarElemento(".encriptador__resultado__imagen");
                eliminarElemento(".encriptador__resultado__texto");
                cambiarEstiloElemento(".encriptador__resultado__texto__encriptado", "display", "flex");
                escribirTexto("#textoEncriptado", textoEncriptado);
                primeraEncriptacion = false;
            }else{

                escribirTexto("#textoEncriptado", textoEncriptado);
            }
        }else{
            let caracterNoPermitido = caracteresEspeciales[1][0];
            alert(`Ups parece que estas tratando de encriptar una letra no permitida : ${caracterNoPermitido}`)
        }
    }else{
        alert("el campo esta vacio");
    }
    
}






function desencriptar(){
    let text = document.getElementById("texto").value;
    let textoDesencriptado = "";

    if(text != ""){
        texto = text.split(" ");
        /*for(let i=0; i<texto.length; i++){
            textoDesencriptado += desencriptarPalabra(texto[i])+" ";
        
        }*/
        
       textoDesencriptado = desencriptarPalabra(text);
        if(primeraEncriptacion == true){
            eliminarElemento(".encriptador__resultado__imagen");
            eliminarElemento(".encriptador__resultado__texto");
            cambiarEstiloElemento(".encriptador__resultado__texto__encriptado", "display", "flex");
            escribirTexto("#textoEncriptado", textoDesencriptado);
            primeraEncriptacion = false
        }else{
            escribirTexto("#textoEncriptado", textoDesencriptado);
        }
        
    }else{
        alert("el campo esta vacio");
    }
}

function copiar(){
    let text = document.getElementById("textoEncriptado").innerText;
    
    console.log(text);
    navigator.clipboard.writeText(text);
    
}

