const lista=document.querySelector('#lista');

window.addEventListener('load', ()=>{
    registersw();
});

fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
    console.log(data);
    let html= '';
    data.forEach(users => {
        html+=`<div class="card">
        <h2>${users.name}</h2>
        <div>${users.email}</div>
        </div>`
    });
    lista.innerHTML=html;
});

async function registersw(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js');
            console.log("Service Worker Registrado")
        }
        catch(e){
            console.log("Fallo el registro del Service Worker");
        }
    }
}