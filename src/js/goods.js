const goods = [
    {
        id: 0,
        title: 'Пробка на мира',
        description: 'Вечер на двоих',
        benefit: '-50%',
        benefitType: 'Скидка',
        img: '../dist/img/goods-background/1.png'
    },
    {
        id: 1,
        title: 'Кино и немцы',
        description: 'Бесплатный бокал пива',
        benefit: 'Варвар',
        benefitType: 'промокод',
        img: '../dist/img/goods-background/2.png'
    },
    {
        id: 2,
        title: 'Valery cakes',
        description: 'Торт',
        benefit: '30%',
        benefitType: 'Скидка',
        img: '../dist/img/goods-background/3.png'
    },
    {
        id: 3,
        title: 'Sushi sell',
        description: 'Набор "Праздник"',
        benefit: '45%',
        benefitType: 'Скидка',
        img: '../dist/img/goods-background/4.png'
    },
    {
        id: 4,
        title: 'Mangosteen',
        description: 'Фрукт в подарок',
        benefit: 'J130',
        benefitType: 'Купон',
        img: '../dist/img/goods-background/5.png'
    },
    {
        id: 5,
        title: 'Теленок табака',
        description: 'Стейк "Мачете"',
        benefit: '20%',
        benefitType: 'Скидка',
        img: '../dist/img/goods-background/6.png'
    },
    {
        id: 6,
        title: 'Fire food',
        description: 'Вторая шаурма в подарок',
        benefit: 'Огонь',
        benefitType: 'Промокод',
        img: '../dist/img/goods-background/7.png'
    },
    {
        id: 7,
        title: 'Aroma cremeria',
        description: 'Джелато "Пармезан"',
        benefit: '20%',
        benefitType: 'Скидка',
        img: '../dist/img/goods-background/8.png'
    },
    {
        id: 8,
        title: 'Пробка на мира',
        description: 'Вечер на двоих',
        benefit: '-50%',
        benefitType: 'Скидка',
        img: '../dist/img/goods-background/10.png'
    },
    {
        id: 9,
        title: 'Кино и немцы',
        description: 'Бесплатный бокал пива',
        benefit: 'Варвар',
        benefitType: 'промокод',
        img: '../dist/img/goods-background/9.png'
    },
    {
        id: 10,
        title: 'Valery cakes',
        description: 'Торт',
        benefit: '30%',
        benefitType: 'Скидка',
        img: '../dist/img/goods-background/11.png'
    },
    {
        id: 11,
        title: 'Sushi sell',
        description: 'Набор "Праздник"',
        benefit: '45%',
        benefitType: 'Скидка',
        img: '../dist/img/goods-background/12.png'
    }
];

let out = ''
goods.forEach(({ title, description, benefit, benefitType, img}) => {
    out+= `
    <div class="goods-shadow">
    <div class="goods-wrapper">
    <div class="goods">
    <div class="goods__name">
    <p class="name__title">${title}</p>
    <p class="name__description">${description}</p>
    </div>
    <div class="goods__benefit">
    <p class="benefit__value">${benefit}</p>
    <p class="benefit__type">${benefitType}</p>
    </div>
    <img src="${img}" class="goods__image" alt="">
    </div>
    </div>
    </div>
    </div>
    `
})
document.getElementById('out').innerHTML = out;