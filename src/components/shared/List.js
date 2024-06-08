const Products = [
  {
    id:1,
    name: "Audi q7",
    description:
      "The Audi Q7 is a premium midsize SUV that combines advanced technology, luxurious comfort, and powerful performance. ",
    price: "$103,915",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2025-audi-q7-exterior-motion-101-65b912b91d9ca.jpg?crop=0.479xw:0.538xh;0.119xw,0.320xh&resize=768:*",
      interior1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDXBQKYs2agkDU5k6aS05qbISUK3f1JXHw5BsRuXBDVRm2QxOlD6p3m-b5mHibGHeL1A&usqp=CAU",
      interior2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpSWd-8mBRGBDfhI7sBEPCA9cchcRttDWxDGSlRcDZe4LwHN6ekeXmi7n456AwQfNfsE&usqp=CAU"
  },
  {
    id:2,
    name: "Audi TT",
    description:
      "The Audi TT is a stylish and sporty coupe that embodies the perfect blend of performance, design, and cutting-edge technology.",
    price: "$92,786",
    image:
      "https://www.topgear.com/sites/default/files/2023/05/32776-TTRSICONICDEANSMITH009_0.jpg",
      interior1:"https://t3.ftcdn.net/jpg/02/96/35/14/240_F_296351466_DXzdLOMpxcVM3LdaxcwUOci8LyMw5l89.jpg",
      interior2:"https://t3.ftcdn.net/jpg/02/96/35/14/240_F_296351466_DXzdLOMpxcVM3LdaxcwUOci8LyMw5l89.jpg",
  },
  {
    id:3,
    name: "Audi e tron",
    description:
      "The Audi e-tron is a groundbreaking electric SUV that combines Audi’s legendary craftsmanship with cutting-edge electric vehicle technology. ",
    price: "$88,921",
    image:
      "https://images.prismic.io/carwow/2cab4514-1fd5-4554-80fc-e259d4c74a76_Front+%C2%BE+static.jpg?auto=format&cs=tinysrgb&fit=crop&q=60&w=750",
      interior1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJn2nFb4tZmE3a1Oxar2KoVYNadBRh8yBAg&s",
      interior2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lmm4bx5k4ZRgxwQujE7znQ30I9bqTEF0xA&s",
  },
  {
    id:4,
    name: "Mercdes-Benz ",
    description:
      "The Mercedes-Benz C-Class is a premium sedan that combines luxury, comfort, and performance. ",
    price: "$103,915",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Wi7ftWuqLSDXN3uxfb7vwZXBzPcwZOg1TtUoVJEaFEbLV44L0ksA-zszEIzcDylQeYs&usqp=CAU",
      interior1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRYSzJ2mB-u3yS0uXvlNew2mqTPsGkQNc9A&s",
      interior2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4X7vH_OeAmYidKtuvNaLA4ew5Sqx-jwjFJg&s",
  },
  {
    id:5,
    name: "Mercedes-Benz S-Class",
    description:
      "The Mercedes-Benz S-Class is a premium sedan that combines luxury, comfort, and performance. ",
    price: "$105,761",
    image:
      "https://img.freepik.com/premium-photo/mercedesbenz-cls-500-amg-stylish-luxury-business-class-fast-car-isolated-white-background-3d-render_396607-67336.jpg?w=826",
      interior1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDNg8WpYTDiE3GbTX98NFlQQW4pdAxtHDzBg&s",
      interior2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVICdyacoYNIoAlvCisSqhHt_RxmmtswWN5w&s",
  },
  {
    id:6,
    name: "Mercedes-Benz G-Class",
    description:
      "The Mercedes-Benz G-Class is a premium sedan that combines luxury, comfort, and performance. ",
    price: "$100,334",
    image:
      "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=600",
      interior1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwINIAT3-SDm0XltYB29fNJONOgrQK1aplg&s",
      interior2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdzAITnFOH-1Kvu-sWjGIkX-XoxxY1WibaXQ&s",
  },
  {
    id:7,
    name:"BMW X5",
    description:
    "The BMW X5 is a premium SUV that combines luxury, comfort, and performance. ",
    price: "$104,101",
    image:"https://imgd.aeplcdn.com/1200x900/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    interior1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjN4I4AwR9PbZtvXexI2nSEroactDb9T72g&s",
    interior2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUG2mx--A2HEQfAC9xJcnO1yJrosDHxwKvA&s",
  },
  {
    id:8,
    name:"BMW X6",
    description:
    "The BMW X6 is a premium SUV that combines luxury, comfort, and performance. ",
    price: "$105,219",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmS2OHTcsT1IdzgkkhQLKVRa3iLDw8FSfz9w&s",
    interior1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZO24yyTfuzyEil8G_XBBoCph_XlPG3v634w&s",
    interior2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLXv7MUbymfQ2-6wh8fX1B4B6DfX44Dr9SQ&s",
  }
];

export default Products;
