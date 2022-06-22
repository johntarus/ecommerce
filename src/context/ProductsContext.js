import React, { useState, createContext } from "react";
import blackdress from "../assets/images/black-dress.jpg";
import blackshirt from "../assets/images/black-shirt.jpg";
import bomba from "../assets/images/bomba.jpg";
import bluesthirts from "../assets/images/blue-tshirt.jpg";
import bodycorn from "../assets/images/bodycorn.jpg";
import checkedshirt from "../assets/images/checked-shirt.jpg";
import combo from "../assets/images/combo.jpg";
import dress from "../assets/images/dress.jpg";
import jeans from "../assets/images/jeans.jpg";
import khakishirt from "../assets/images/khaki-shirt.jpg";
import navykhaki from "../assets/images/navy-khaki.jpg";
import curvedress from "../assets/images/fit-dress.jpg";
import navytshirt from "../assets/images/navy-tshirt.jpg";
import official from "../assets/images/official.jpg";
import ragged from "../assets/images/ragged.jpg";
import winterjackets from "../assets/images/winter-jacks.jpg";
import whiteshirt from "../assets/images/white-shirt.jpg";
import sneakers from "../assets/images/sneakers.jpg";
import Tshirt from "../assets/images/product.jpg";
import whitesneakers from "../assets/images/white-sneaker.jpg";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Black Dress",
      price: 600,
      description:
        "Show your curves some love with our Most elegant Bodycon dresses.",
      image: blackdress,
    },
    {
      id: 2,
      name: "Black Shirt",
      price: 900,
      description:
        "We provide solid color t-shirts with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: blackshirt,
    },
    {
      id: 3,
      name: "Bomba Jacket",
      price: 1500,
      description:
        "We provide solid color jackets with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: bomba,
    },
    {
      id: 4,
      name: "Blue T-shirt",
      price: 500,
      description:
        "We provide solid color t-shirts with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: bluesthirts,
    },
    {
      id: 5,
      name: "Bodycorn",
      price: 900,
      description:
        "We provide solid color bodycorn with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: bodycorn,
    },
    {
      id: 6,
      name: "Checked Shirts",
      price: 1300,
      description:
        "We provide solid color shirts with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: checkedshirt,
    },
    {
      id: 7,
      name: "Combo T-shirt & Short",
      price: 1800,
      description:
        "We provide combos with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: combo,
    },
    {
      id: 8,
      name: "Decorated Dress",
      price: 799,
      description:
        "We provide dresses with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: dress,
    },
    {
      id: 9,
      name: "Jeans",
      price: 1900,
      description:
        "We provide cool jeans with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: jeans,
    },
    {
      id: 10,
      name: "Khaki Shirts",
      price: 1100,
      description:
        "We provide khaki shirts with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: khakishirt,
    },
    {
      id: 11,
      name: "Navy Khaki",
      price: 1600,
      description:
        "We provide solid color jkhaki trousers with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: navykhaki,
    },
    {
      id: 12,
      name: "Curved Dress",
      price: 1450,
      description:
        "We provide solid color Dresses with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: curvedress,
    },
    {
      id: 13,
      name: "Official Trouser",
      price: 1250,
      description:
        "We provide Official Trousers best quality for solid color for quality misty materials",
      image: official,
    },
    {
      id: 14,
      name: "Navy Tshirt",
      price: 650,
      description:
        "We provide T-shirts best quality for solid color for quality misty materials",
      image: navytshirt,
    },
    {
      id: 15,
      name: "Ragged Trouser",
      price: 2000,
      description:
        "We provide ragged trousers best quality for solid color for quality misty materials",
      image: ragged,
    },
    {
      id: 16,
      name: "Winter Jackets",
      price: 2200,
      description:
        "We provide winter jackets with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: winterjackets,
    },
    {
      id: 17,
      name: "White Shirt",
      price: 1400,
      description:
        "We provide white shirts with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: whiteshirt,
    },
    {
      id: 18,
      name: "Sneakers",
      price: 2500,
      description:
        "We provide the best quality sneakers for solid color for quality misty materials",
      image: sneakers,
    },
    {
      id: 19,
      name: "Green Tshirt",
      price: 550,
      description:
        "We supply the best quality for solid color tshirts for quality misty materials",
      image: Tshirt,
    },
    {
      id: 20,
      name: "White Sneakers",
      price: 3000,
      description:
        "We provide solid color sneakers with 100% cotton combined 30s best quality for solid color for quality misty materials",
      image: whitesneakers,
    },
  ]);
  return (
    <ProductsContext.Provider value={[products]}>
      {children}
    </ProductsContext.Provider>
  );
};
