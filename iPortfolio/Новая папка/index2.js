let a = +prompt("Raqam kiriting");
let h1 = document.querySelector('h1');

if(a % 2 == 0){ 
    h1.innerHTML = `${a} soni - juft son  `
}

else{
    h1.innerHTML = `${a} soni - toq son`
}