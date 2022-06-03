
let a = +prompt('birinchi sonni kiriting') 
let b = +prompt('ikkinchi sonni kiriting')
let d = prompt('Ammalni kiriting + / - * %')
let heading = document.querySelector('h1')


if(d == '+'){
    let c = a + b 
   heading.innerHTML = `${a}+${b} = ${c}`
}
else if(d == '-'){
    let c = a - b;
   heading.innerHTML = `${a}-${b} = ${c}`
}
else if(d == '*'){
    let c = a * b;
    heading.innerHTML = `${a}*${b} = ${c}`
}
else if(d == '/'){
    let c = a / b;
    heading.innerHTML = `${a}/${b} = ${c}`
}
else if(d == '%'){
    let c = a % b;
    heading.innerHTML = `${a}%${b} = ${c}`
}
else{
    alert('Xato malumot');
}






