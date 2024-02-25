import greekSaladImage from './assets/greek salad.png';
import bruschettaImage from './assets/Bruschetta2.png';
import lemonDessertImage from './assets/lemon dessert.png';

const specials = [
  {
    title: "Greek Salad",
    price: "$8.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, and olives, garnished with crunchy garlic and rosemary croutons.",
    image: greekSaladImage,
  },
  {
    title: "Bruschetta",
    price: "$6.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschettaImage,
  },
  {
    title: "Lemon Special",
    price: "$4.99",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be.",
      image: lemonDessertImage,
  }
];

export default specials;