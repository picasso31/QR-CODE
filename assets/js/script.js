console.log('scripte chargee !');
const info = document.querySelector("#info");
const btn = document.querySelector("#btn");
const qrImg = document.querySelector("#qr-img");


btn.addEventListener('click', ()=>{
     const infoValue = info.value;
    console.log(infoValue);
    if (!infoValue) {
        alert("vous devez entrer une information")
        qrImg.style.display ="none";
    }else{
        const url =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${infoValue}`;
        qrImg.src = url;
        qrImg.style.display ="block";
        qrImg.style.margin = "auto";
    }
});