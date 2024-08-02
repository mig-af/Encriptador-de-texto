

const palabras= {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
}


let word = "cobermufatnimescaicimesobern";

let lista = ["ai", "enter", "imes", "ober", "ufat"];

function desencriptar(palabra){
    
    let nueva = palabra;
    let cont = 0;
    for(let i=0; i<palabra.length; i++){
        if(cont > lista.length){cont = 0}
        if(nueva.match(lista[cont]) != null){
            console.log(lista[cont], cont);
            nueva = nueva.replace(lista[cont], Object.keys(palabras)[cont]);
            console.log(nueva);
            cont ++;
        }else{
            cont ++;
            continue;
    }
    console.log(nueva);
}
}
console.log(Object.keys(palabras));


function des(palabrita){

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
        if(cont > lista.length-1){cont=0}
        
        //buscamos las coincidencias de las letras que queremos desencriptar en la palabra que nos dio el usuario
        if(palabraDesencriptada.match(lista[cont]) != null){
            //reemplazamos
            palabraDesencriptada = palabraDesencriptada.replace(lista[cont], Object.keys(palabras)[cont]);
            
            //volvemos a controlador a 0 por que aun hay palabras para desencriptar
            controlador = 0;
        }else{
            //Cada vez que no se realiza la desencriptacion
            //este contador sube, si llega a +5(cantidad de palabras que tenemos) significa
            //que se trato de desencriptar todas las palabras y ya no se encontraron coincidencias
        
            controlador ++;
            
            //Si controlador es mayor que el numero de palabras("enter", "imes", "ober " etc)
            //cortamos el bucle y damos por finalizado todo por que se encontraron todas las palabras
            if(controlador > lista.length){
                console.log(palabraDesencriptada);
                
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

}

des("Lai cobermufatnimescaicimesobern foberrenternsenter baisenters coberncenterptufatailenters denter lai cobermufatnimescaicimesobern");

/*
setInterval(()=>{
    let cantidadDeVecesQueSeVerifico;
    
    let desencriptado = false;
    if(cont > 4){cont=0}
    
    
   
    if(nu.match(lista[cont]) != null){
        nu = nu.replace(lista[cont], Object.keys(palabras)[cont])
        console.log(true);
        nuu = 0;
    }else{
        console.log(null);
        nuu ++
        console.log(nuu);
        if(nuu > lista.length){
            console.log(nu);
        }
    }

    
    /*console.log(cont, nu);
    lis++;
    cont++;
}, 500)

*/


