const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnClic= document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit',sumarInputs);

function sumarInputs(event){   
    console.log({event});
    event.preventDefault();
    const res = parseInt(input1.value) + parseInt(input2.value);    
    result.innerText = "Resultado: " + res;

}














































/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

const img = document.createElement('img');
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
pid.append(img);
console.log({
    h1, p, parrafito,pid,input
});
h1.innerText='Patito';//innetHtml poco seguro
console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');
*/