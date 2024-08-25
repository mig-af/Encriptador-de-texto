
let letrasParaDesencriptar = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
let vocales = ["a", "e", "i", "o", "u"];
let caracteresNoPermitidos = /[A-Zá-úà-ùÑ!@#$%^&*)(_+\-=\[\]{};:"\\|,.<>\/?¿Çªº¡^¨'´`|0-9]/g
let primeraEncriptacion = true;

//colores ventana emergente
let colorError = "#0A3871";
let colorAcertar = "green";



function desencriptarTexto(texto){
    let textoDesencriptado = texto;
    
    for(let i=0; i<letrasParaDesencriptar.length; i++){
        textoDesencriptado = textoDesencriptado.replace(letrasParaDesencriptar[i], vocales[i]);
    }
    return textoDesencriptado;
}


function encriptarTexto(texto){
    let textoEncriptado = "";

    //convertimos la lista de exprexiones para convertirla en lista de strings, es decir cada elemento se convertira en string
    letrasPaDesencriptar = letrasParaDesencriptar.join(" ").replace(/[/g]/g, "").split(" ");
    //recorremos el texto 
    for(let i=0; i<texto.length; i++){
        //definimos una variable para guardar las letras que no son vocales
        let letra = "";
        //Por cada letra en el texto, analizamos si coincide con cada vocal dentro la lista
        for( let j=0; j<vocales.length; j++){
            
            //si la letra coincide con una vocal dentro la lista, se hace el reemplazo por las letras a encriptar
            if(texto[i] === vocales[j] ){
                textoEncriptado += letrasPaDesencriptar[j];
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



function verificarCaracteres(texto){
    //verificamos si existen caracteres especiales, devolvera false si no existen los caracteres
    let existenCaracteres = (texto.match(caracteresNoPermitidos) != null)? [true, texto.match(caracteresNoPermitidos)] : false 
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
function asignarTexto(elemento, texto){
    document.querySelector(elemento).innerHTML = texto;
    return;
}

function ventanitaEmergente(mensaje, duracionSegundos, color){

    
    let contador = 0;
    let tiempoSegundos = duracionSegundos;

    cambiarEstiloElemento(".ventana__temporal", "display", "flex");
    cambiarEstiloElemento(".ventana__temporal", "backgroundColor", color);
    asignarTexto(".ventana__temporal__texto", mensaje);
    let tiempo = setInterval(()=>{
        contador ++;
        if(contador == tiempoSegundos){
            cambiarEstiloElemento(".ventana__temporal", "display", "none");
            
            clearInterval(tiempo);
        }
    }, 1000)

}


function encriptar(){
    let text = document.getElementById("texto").value;
    let caracteresEspeciales = verificarCaracteres(text);
    let textoEncriptado = "";

    if(text != ""){
        console.log(text);
        if(caracteresEspeciales == false){

            textoEncriptado = encriptarTexto(text);
            if(primeraEncriptacion == true){
                eliminarElemento(".encriptador__resultado__imagen");
                eliminarElemento(".encriptador__resultado__texto");
                cambiarEstiloElemento(".encriptador__resultado__texto__encriptado", "display", "flex");
                asignarTexto("#textoEncriptado", textoEncriptado);
                primeraEncriptacion = false;
                ventanitaEmergente("Texto encriptado con exito 😈", 2, colorAcertar);
                cambiarEstiloElemento(".encriptador__contenido__texto", "color", "black");
            
            }else{

                asignarTexto("#textoEncriptado", textoEncriptado);
                ventanitaEmergente("Texto encriptado con exito 😈", 2, colorAcertar);
                cambiarEstiloElemento(".encriptador__contenido__texto", "color", "black");
            }
        }else{
            let caracterNoPermitido = caracteresEspeciales[1][0];
            ventanitaEmergente(`😿Parece que estas tratando de encriptar una letra no permitida:👉 ${caracterNoPermitido}`, 4, colorError);
            //alert(`Ups parece que estas tratando de encriptar una letra no permitida : ${caracterNoPermitido}`)
            cambiarEstiloElemento(".encriptador__contenido__texto", "color", "red");
        }
    }else{
        ventanitaEmergente("El campo esta vacio", 2, colorError);
        
    }
    
}






function desencriptar(){
    let text = document.getElementById("texto").value;
    let textoDesencriptado = "";

    if(text != ""){
        
       textoDesencriptado = desencriptarTexto(text);
        if(primeraEncriptacion == true){
            eliminarElemento(".encriptador__resultado__imagen");
            eliminarElemento(".encriptador__resultado__texto");
            cambiarEstiloElemento(".encriptador__resultado__texto__encriptado", "display", "flex");
            asignarTexto("#textoEncriptado", textoDesencriptado);
            primeraEncriptacion = false
            ventanitaEmergente("Texto desencriptado con exito", 2, colorAcertar);
        }else{

            asignarTexto("#textoEncriptado", textoDesencriptado);
            ventanitaEmergente("Texto desencriptado con exito", 2, colorAcertar);
        }
        
    }else{
        ventanitaEmergente("El campo esta vacio", 2, colorError);
        //alert("el campo esta vacio");
    }
}

function copiar(){
    let text = document.getElementById("textoEncriptado").innerText;
    
    navigator.clipboard.writeText(text);
    ventanitaEmergente("Texto copiado", 1, colorAcertar);
    let placeHold = document.getElementById("texto")
    placeHold.value = "";
    placeHold.placeholder="Ingrese el texto aqui";
}


