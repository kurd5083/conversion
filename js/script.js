let btn_replenish = document.querySelector('.btn_replenish');
let RUB = document.querySelector('.RUB');
let USD = document.querySelector('.USD');
let EUR = document.querySelector('.EUR');

function update(){
    localStorage.setItem('RUB', JSON.stringify(RUB.innerHTML));
    localStorage.setItem('USD', JSON.stringify(USD.innerHTML));
    localStorage.setItem('EUR', JSON.stringify(EUR.innerHTML));
}

function record() {
    if(JSON.parse(window.localStorage.getItem('RUB')) < 1){
        RUB.innerHTML = 0;
    } else {
        RUB.innerHTML = JSON.parse(window.localStorage.getItem('RUB')); 
    }
    if(JSON.parse(window.localStorage.getItem('USD')) < 1){
        USD.innerHTML = 0;
    } else {
        USD.innerHTML = JSON.parse(window.localStorage.getItem('USD')); 
    }
    if(JSON.parse(window.localStorage.getItem('EUR')) < 1){
        EUR.innerHTML = 0;
    } else {
        EUR.innerHTML = JSON.parse(window.localStorage.getItem('EUR')); 
    }

}
record()
btn_replenish.addEventListener('click', function(){
    let replenish_wallet = document.querySelector('.replenish_wallet').value;
    let replenish_sum = document.querySelector('.replenish_sum').value;
    console.log(RUB)
    console.log(replenish_wallet)
    console.log(replenish_sum)
    switch(replenish_wallet){
        case 'RUB':
            RUB.innerHTML = String(Number(replenish_sum) + Number(RUB.innerHTML));
        break
        case 'USD':
            USD.innerHTML = String(Number(replenish_sum) + Number(USD.innerHTML));
        break
        case 'EUR':
            EUR.innerHTML = String(Number(replenish_sum) + Number(EUR   .innerHTML));
        break
    }
    update()
})
let btn_profile = document.querySelector('.btn_profile');
btn_profile.addEventListener('click', function(){
    let profile_from = document.querySelector('.profile_from').value;
    let profile_in = document.querySelector('.profile_in').value;
    let profile_sum = document.querySelector('.profile_sum').value;
    if(profile_from == 'RUB' && profile_in == 'USD'){
        USD.innerHTML = String(Number(profile_sum) * 0.0124 + Number(USD.innerHTML));
        RUB.innerHTML = String(Number(RUB.innerHTML) - Number(profile_sum));
    } else if(profile_from == 'RUB' && profile_in == 'EUR'){
        EUR.innerHTML = String(Number(profile_sum) * 0.0113 + Number(EUR.innerHTML));
        RUB.innerHTML = String(Number(RUB.innerHTML) - Number(profile_sum));
    } else if(profile_from == 'USD' && profile_in == 'RUB'){
        RUB.innerHTML = String(Number(profile_sum) * 80.509 + Number(RUB.innerHTML));
        USD.innerHTML = String(Number(USD.innerHTML) - Number(profile_sum));
    } else if(profile_from == 'USD' && profile_in == 'EUR'){
        EUR.innerHTML = String(Number(profile_sum) * 1.0976 + Number(EUR.innerHTML));
        USD.innerHTML = String(Number(USD.innerHTML) - Number(profile_sum));
    } else if(profile_from == 'EUR' && profile_in == 'RUB'){
        RUB.innerHTML = String(Number(profile_sum) * 88.3712 + Number(RUB.innerHTML));
        EUR.innerHTML = String(Number(EUR.innerHTML) - Number(profile_sum));
    } else if(profile_from == 'EUR' && profile_in == 'USD'){
        USD.innerHTML = String(Number(profile_sum) * 0.911 + Number(USD.innerHTML));
        EUR.innerHTML = String(Number(EUR.innerHTML) - Number(profile_sum));
    }

})

let j = 1;
let whom_wallet = document.querySelector('.whom_wallet');
let add = document.querySelector('.add');
function b(){
    if(JSON.parse(window.localStorage.getItem('j')) > 0){
    j = JSON.parse(window.localStorage.getItem('j')); 
    for(let i = 0; i < j; i++){
    whom_wallet.innerHTML += `<option>${JSON.parse(window.localStorage.getItem(`name${j}`))}</option>`;
    }
} 
}
b()
add.addEventListener('click', function(){
    let id = document.querySelector('.id').value;
    let name = document.querySelector('.name').value;
    if(id.length !== 0 && name.length !== 0){
        localStorage.setItem(`name${j}`, JSON.stringify(name));
        whom_wallet.innerHTML += `<option>${JSON.parse(window.localStorage.getItem(`name${j}`))}</option>`;
        localStorage.setItem(`j`, JSON.stringify(j));
        j++;
    }
})