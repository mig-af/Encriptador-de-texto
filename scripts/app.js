

let word = "cobermufatnimescaicimesobern";

let letrasParaDesencriptar = ["ai", "enter", "imes", "ober", "ufat"];
let vocales = ["a", "e", "i", "o", "u"];











function desencriptarPalabra(palabrita){

    //inicializamos la variable desencriptado para hacer un mejor control del bucle while
    let desencriptado = false;
    //contador para acceder a los indices de la lista 
    let cont=0

    //variable de seguridad :) NO interviene en el proceso de desencriptacion
    let cortarBucle = 0;

    //guardamos la palabra que debemos desencriptar 
    let palabraDesencriptada = palabrita;

    //Controlador para guardar el numero de intentos de desencriptacion que se hizo
    let controlador = 0;
    
    //Iniciamos el bucle
    while(desencriptado != true){
        
        //Verificamos 
        if(cont > letrasParaDesencriptar.length-1){cont=0}
        
        //buscamos las coincidencias de las letras que queremos desencriptar en la palabra que nos dio el usuario
        if(palabraDesencriptada.match(letrasParaDesencriptar[cont]) != null){
            //reemplazamos
            palabraDesencriptada = palabraDesencriptada.replace(letrasParaDesencriptar[cont], vocales[cont]);
            
            //volvemos a controlador a 0 por que aun hay palabras para desencriptar
            controlador = 0;
        }else{
            //Cada vez que no se realiza la desencriptacion
            //este contador sube, si llega a +5(cantidad de palabras que tenemos) significa
            //que se trato de desencriptar todas las palabras y ya no se encontraron coincidencias
        
            controlador ++;
            
            //Si controlador es mayor que el numero de palabras("enter", "imes", "ober " etc)
            //cortamos el bucle y damos por finalizado todo por que se encontraron todas las palabras
            if(controlador > letrasParaDesencriptar.length){
                //console.log(palabraDesencriptada);
                
                desencriptado = true;
                
            }
        }  
        cont ++;
        cortarBucle ++;

        //para analizar una palabra solo debe haber maximo 20 vueltas
        //Por eso Si ocurre algun tipo de bug, el bucle se rompera en la vuelta 100
        //Para no afectar al usuario y su sistema
        
        if(cortarBucle > 100){
            break;
        }

    }
    return palabraDesencriptada;

}

let ja = desencriptarPalabra("Lai cobermufatnimAescaicimesobern foberrenternsenter baisenters coberncenterptufatailenters denter lai cobermufatnimescaicimesobern");


let caracteresNoPermitidos = /[A-Z á-ú à-ù Ñ !@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]/g
let siu = `[A-Z á-ú à-ù Ñ !@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]`.split("");
function verificarCaracteres(texto){
    //Verificamos si hay caracteres especiales, si es true, devolvera una lista con un booleano y la letra que se encontro
    //si no se encuentra nada, devolvera un false
    let existenCaracteres = (texto.match(caracteresNoPermitidos) != null)? [true, texto.match(caracteresNoPermitidos)] : false 
    return existenCaracteres;
}
console.log(verificarCaracteres("holaaks"));




