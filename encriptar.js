var botonEncriptar =document.getElementById("encriptar");
var textoParaEncriptar = document.getElementById('textoParaEncriptar');
var ventana2=document.getElementById('encriptado');
var botonDesencriptar=document.getElementById('Desencriptar');
var textoDesencriptado;
var botonCopiar= document.getElementById('botonCopiar');
ventana2.style.display='none';

   textoParaEncriptar.addEventListener('click',function(){
    textoParaEncriptar.value=(' ');
})

 
 botonEncriptar.addEventListener('click', function(){

     var resultado=document.getElementById('resultado');
      resultado.style.display='none';
    
        var ventana2=document.getElementById('encriptado');
        ventana2.style.display='block';
   

    var textoParaEncriptar = document.getElementById('textoParaEncriptar').value;
   
       
    //encriptar texto
         textoEncriptado=encriptar(textoParaEncriptar);

    
    function encriptar (textoParaEncriptar){
        this.textoParaEncriptar = String(textoParaEncriptar);
    
        var textoEncriptado = this.textoParaEncriptar.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        document.getElementById('texto_encriptado').value=textoEncriptado;
     //   document.getElementById('textoParaencriptar').value;
       return textoEncriptado;


}

})

botonDesencriptar.addEventListener('click', function(){



 var textoEncriptado=document.getElementById('texto_encriptado').value;

             textoDesencriptado=desencriptar(textoEncriptado);
             

function desencriptar (textoEncriptado){ 
  this.textoEncriptado = String(textoEncriptado);
    var textoDesencriptado = this.textoEncriptado.replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
     document.getElementById("texto_encriptado").value = textoDesencriptado;

      //document.querySelector("#input-texto").value;
return textoDesencriptado;
}



})


//copiar texto
function copiarTexto() {
  
  const input = document.getElementById('texto_encriptado');
  
  input.select();
  
  document.execCommand('copy');
  
}