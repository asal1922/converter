let c1=document.querySelector('.C');
let f1=document.querySelector('.F');
let changeitem=document.querySelector('.changeButton')
let convertButton=document.querySelector('.convertButton');
let input=document.getElementById('converter');
let flag=true;
let resetButton=document.querySelector('.resetButton');
changeitem.addEventListener('click',function(){
    let resultchange=c1.innerHTML;
    c1.innerHTML=f1.innerHTML;
    f1.innerHTML=resultchange;
    
})
convertButton.addEventListener('click',function(){
    if(c1.innerHTML==='°C'){
        input.value=(input.value*1.8)+32;
        }
        else input.value=(input.value-32)/1.8;
console.log(input.value)        
})
resetButton.addEventListener('click',function(){
    input.value='';
})
