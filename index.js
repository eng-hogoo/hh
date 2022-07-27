
 

let head= document.getElementsByTagName("h2")[0]

let inp= document.getElementsByTagName("input")[0]
let res= document.getElementsByClassName("result")[0]
document.body.style.background="#000000fa"
let fom= document.getElementsByTagName("form")[0]
fom.style.textAlign="center"
fom.style.marginTop="150px"
inp.style.background="#5af7f7fa"
inp.style.padding="8px"
inp.style.borderRadius="14px"
inp.style.color="#1e1935 "
inp.style.outline="none"
inp.style.border="2px solid#737eb5 "
inp.style.fontSize="18PX"
res.style.color="#c2fde2"
res.style.fontSize="19px"
res.style.fontStyle="bold"
head.style.color="#c2fde2    "
head.style.textAlign="center"
head.style.marginTop="50px"

 inp.oninput=function(){
let result=inp.value*15.6


res.innerHTML=` $ {${inp.value}} Usd Dollar= {${result.toFixed(2)}} Egyptian Pound `
 }

