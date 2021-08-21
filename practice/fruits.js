const fruits = [
    {
        id : 1,
        name : '사과',
        price : '1,000원',
        quantityLeft : '200 개',
        DeliveryAvailable : '가능'
    },
    {
        id : 2,
        name : '배',
        price : '1,200원',
        quantityLeft : '250 개',
        DeliveryAvailable : '가능'
    },
    {
        id : 3,
        name : '바나나',
        price : '2,900원',
        quantityLeft : '180 개',
        DeliveryAvailable : '불가'
    },
    {
        id : 4,
        name : '수박',
        price : '1,8000원',
        quantityLeft : '80 개',
        DeliveryAvailable : '가능'
    },
    {
        id : 5,
        name : '토마토',
        price : '800원',
        quantityLeft : '270 개',
        DeliveryAvailable : '가능'
    },
    {
        id : 6,
        name : '복숭아',
        price : '2,700원',
        quantityLeft : '480 개',
        DeliveryAvailable : '가능'
    },
    {
        id : 7,
        name : '오렌지',
        price : '1,100원',
        quantityLeft : '170 개',
        DeliveryAvailable : '불가'
    },
    {
        id : 8,
        name : '참외',
        price : '1,300원',
        quantityLeft : '210 개',
        DeliveryAvailable : '가능'
    },
    {
        id : 9,
        name : '자몽',
        price : '2,000원',
        quantityLeft : '200 개',
        DeliveryAvailable : '불가'
    },
    {
        id : 10,
        name : '레몬',
        price : '1,000원',
        quantityLeft : '320 개',
        DeliveryAvailable : '가능'
    }
]

function fruitList (arr) {
    for(let i = 0; i < fruits.length; i++){
        const ul = document.querySelector(".fruits");
        const li = document.createElement('li');
        const name = document.createElement('a');
        const price = document.createElement('span');
        const quantityLeft = document.createElement('span');
        ul.appendChild(li);
        li.appendChild(name);
        li.appendChild(price);
        li.appendChild(quantityLeft);
        name.textContent = `과일명 : ${fruits[i].name}`;
        price.textContent = `개당 가격 : ${fruits[i].price}`;
        quantityLeft.textContent = `남은 수량 : ${fruits[i].quantityLeft}`;
        li.classList.add('list')
        name.classList.add('name');
        name.onclick = function () {
            printDeliveryAvailable(arr[i]);
        }
    }   
}
fruitList(fruits);

function printDeliveryAvailable (fruit) {
    console.log(`${fruit.name} 배송가능 여부 : ${fruit.DeliveryAvailable}`);
}
