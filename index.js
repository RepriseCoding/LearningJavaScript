let inputNum = document.getElementById('input-num');
let calbutton = document.getElementById('cal-button');
let outputNum = document.getElementById('output-num');


// ฟังก์ชั่นหาสูตรคูรแบบ กดปุ่ม Action
function showMultiply(){
    let number = Number(inputNum.value);
    let outputHtml = '';

    if (number == 0){
        outputNum.innerHTML = '<h3 class="text-center mt-5">0 คูณกับอะไรก็ได้ 0</h3>';
        return;
    }
    for(let i=1; i <= 12; i++){
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }

    outputNum.innerHTML = outputHtml;
}

// ปิดไว้ก่อน ถ้าจะใช้ต้องเปิดปุ่มที่หน้า Html ด้วยนะจ๊ะ
// calbutton.addEventListener('click',showMultiply);

// ฟังก์ชั่นหาสูตรคูณ แบบใส่ตัวเลขแล้วคำนวณเลย
function showMultiplyKeyUp(){
    let number = Number(inputNum.value);
    let outputHtml = ""

    if (number == 0){
        outputNum.innerHTML = '<h3 class="text-center mt-5">0 คูณกับอะไรก็ได้ 0</h3>';
        return;
    }
    for(let i=1; i <= 12; i++){
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }
    outputNum.innerHTML = outputHtml;
}
inputNum.addEventListener('keyup',showMultiplyKeyUp);


// console.log(price[0].innerHTML);
// console.log(quantity[1].value);
// let parsePrice = parseInt(price[0].innerHTML);


function sumTotal(){

    let price = document.getElementsByClassName('price-per-unit');
    let quantity = document.getElementsByClassName('quantity');
    let sumprice = document.getElementsByClassName('sum');
    let totalPrice = document.getElementById('total');
    let totaltotal = 0;

    for(let i=0; i<price.length; i++){
        
        let parsePrice = parseInt(price[i].innerHTML);
        let parseQuantity = parseInt(quantity[i].value);
        let totalsum = parsePrice * parseQuantity ;
        totaltotal += totalsum
        sumprice[i].value = totalsum ;
        
    }

    totalPrice.innerHTML = totaltotal;
    
}

sumTotal();

// let quan = document.getElementById('quan1');
// let sum1 = document.getElementById('sum1');

// function changeQuan(){
//     let quanNum = Number(quan.value);
//     let sumNum = Number(sum1.value);
//     let newsum = quanNum * sumNum;
//     sum1.value = newsum;
// }
// quan.addEventListener('keyup',changeQuan);
