import bcrypt from 'bcryptjs';

const data = { 
    users: [
        {
        name:'sivaani',
        email:'admin@gmail.com',
        password: bcrypt.hashSync('1719',8), //8 is used to get the hash automatically
        isAdmin: true,
        
        },

    ],
    products: [
        {
            // _id: '1',
            name:'Gawin Hi-Grip Street Basketball',
            category:'Basketball',
            image:'/pics/item1.jpg',
            price:320.00,
            InStockcount: 15,
            brand:'Gawin',
            rating:4.5,
            nReviews:10,
            description:'high durability',
        },
        {
            // _id: '2',
            name:'ALFA AX4 Hockey Stick',
            category:'Hockey Stick',
            image:'/pics/item2.jpg',
            price:3649.00,
            InStockcount: 17,
            brand:'ALFA',
            rating:5,
            nReviews:10,
            description:'high quality',
        },
        {
            // _id: '3',
            name:'Wilson Ultra Power Tennis Racket',
            category:'Tennis Racket',
            image:'/pics/item3.jpg',
            price:1955.00,
            InStockcount: 18,
            brand:'Wilson',
            rating:4,
            nReviews:11,
            description:'Power Tennis Racket',
        },
        {
            // _id: '4',
            name:'NIKE Revolution 5 Panelled Running Shoes',
            category:'Shoes',
            image:'/pics/item4.jpg',
            price:2697.00,
            InStockcount: 0,
            brand:'NIKE',
            rating:5,
            nReviews:10,
            description:'Best quality product',
        },
        {
            // _id: '5',
            name:'GM Haze Contender Kashmir-Willow Bat',
            category:'Cricket',
            image:'/pics/item5.jpg',
            price:962.00,
            InStockcount: 14,
            brand:'GM',
            rating:5,
            nReviews:10,
            description:'Supreme quality',
        },
        {
            // _id: '6',
            name:'Shrey Classic Steel',
            category:'Cricket',
            image:'/pics/item6.jpg',
            price:2410.00,
            InStockcount: 12,
            brand:'Shrey',
            rating:5,
            nReviews:10,
            description:'Strong',
        },
        {
            // _id: '7',
            name:'SUN FLY SPORTS Volleyball',
            category:'Vollyball',
            image:'/pics/item7.jpg',
            price:1215.00,
            InStockcount: 10,
            brand:'SUN FLY SPORTS',
            rating:4,
            nReviews:10,
            description:'Long lasting vollyball',
        },
        {
            // _id: '8',
            name:'UTC leather ball stumps 4 and ball Cricket Kit',
            category:'Cricket',
            image:'/pics/item8.jpg',
            price:'599.00',
            InStockcount: 9,
            brand:'UTC',
            rating:4.5,
            nReviews:10,
            description:'Genuine leather ball stumps 4 and ball ',
        },
    ],
};
export default data;