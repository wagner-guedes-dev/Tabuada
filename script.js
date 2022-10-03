function tabuada(){
   var num = document.getElementById("txtn")
   var quant = document.getElementById("quant")
   var tab = document.getElementById("tab") //resultado

   if(num.value.length == 0 ){
       alert("Por favor Dite um número.")
       tab.innerHTML = ""
       
   }else{
       var n = Number(num.value)
       var q = Number(quant.value)
       var c = 0
       
    if(q > 1000){
        alert("Valor do multiplicador muito alto! Valor considerado 1000")
        q = 1000
    }else if(q <= 0 || quant.value.length == 0){
            q = 10
            alert("Multiplicador invalido! Multiplicador sendo considerado 10")
       }
       tab.innerHTML = ""
       for(c ; c <= q ; c++){
           tab.innerHTML += `${n} x ${c} = ${n*c}<br>`
       }

   }
}
document.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        var btn = document.getElementById('enter');
        btn.click();
    }
} )

let limpar = document.getElementById('limpar')
limpar.addEventListener('click' , limpartab)
function limpartab(){
    tab.innerHTML = ''
}