let inputNum = document.getElementById('input-num');
let calbutton = document.getElementById('cal-button');
let outputNum = document.getElementById('output-num');


// ฟังก์ชั่นหาสูตรคูรแบบ กดปุ่ม Action
function showMultiply() {
    let number = Number(inputNum.value);
    let outputHtml = '';

    if (number == 0) {
        outputNum.innerHTML = '<h3 class="text-center mt-5">0 คูณกับอะไรก็ได้ 0</h3>';
        return;
    }
    for (let i = 1; i <= 12; i++) {
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }

    outputNum.innerHTML = outputHtml;
}

// ปิดไว้ก่อน ถ้าจะใช้ต้องเปิดปุ่มที่หน้า Html ด้วยนะจ๊ะ
// calbutton.addEventListener('click',showMultiply);

// ฟังก์ชั่นหาสูตรคูณ แบบใส่ตัวเลขแล้วคำนวณเลย
function showMultiplyKeyUp() {
    let number = Number(inputNum.value);
    let outputHtml = ""

    if (number == 0) {
        outputNum.innerHTML = '<h3 class="text-center mt-5">0 คูณกับอะไรก็ได้ 0</h3>';
        return;
    }
    for (let i = 1; i <= 12; i++) {
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }
    outputNum.innerHTML = outputHtml;
}
inputNum.addEventListener('keyup', showMultiplyKeyUp);


var price = document.getElementsByClassName('price-per-unit');
var quantity = document.getElementsByClassName('quantity');
var sumprice = document.getElementsByClassName('sum');
var totalPrice = document.getElementById('total');
var totaltotal = 0;

function sumTotal() {
    for (var i = 0; i < price.length; i++) {
        var parsePrice = parseInt(price[i].innerHTML);
        var parseQuantity = parseInt(quantity[i].value);
        var totalsum = parsePrice * parseQuantity;
        totaltotal += totalsum
        sumprice[i].value = totalsum;
    }
}
sumTotal();


// ฟังชั้น รวมราคาที่พิมพ์แต่ช่อง
let sumPriceFun = (e) => {
    // จำนวนสินค้า
    const total = e.value;

    // ราคาสินค้า
    let a = e.parentElement.parentNode.children[2].innerHTML;

    // ช่องราคารวม
    let b = e.parentElement.parentNode.children[4].querySelector('input');

    // บวกลบ คูณหาร
    let totalsumPrice = parseInt(a) * total;

    // แสดงผลช่องราคารวม
    b.value = totalsumPrice;
    sumTotal();
    sumTotalall();

    if (!total) {
        alert('กรุณาใส่ 0 หรือ จำนวนอื่นๆ');
        e.focus();
    }
}

// ฟังชั่น รวมราคาทั้งหมด 
let sumTotalall = () => {
    let total = 0;
    for (let index = 0; index < sumprice.length; index++) {
        total += parseInt(sumprice[index].value);
    }

    if (total) {
        totalPrice.innerHTML = total;
    } else {
        totalPrice.innerHTML = "กำลังคำนวณ";
    }

}
sumTotalall();

// เช็คเมื่อไม่่มีค่าใช้คู้กัยบ onblur
let blurFun = (e) => {
    const value = e.value;
    if (!value) {
        alert('กรุณาใส่ 0 หรือ จำนวนอื่นๆ');
        e.focus();
    }
}
