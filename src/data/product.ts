import { IProduct } from "@/type/product";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "/slide1.jpg",
    description: "Description 1",
    category: "Category 1",

    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["XS"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["M"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["XS"],
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    price: 100,
    image: "/slide2.jpg",
    description: "Description 1",
    category: "Category 12",

    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: ["/slide2.jpg", "/slide1.jpg"],
        sizes: ["M", "L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["S"],
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    price: 100,
    image: "/slide3.jpg",
    description: "Description 1",
    category: "Category 12",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["S", "L"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["XS", "S"],
      },
    ],
  },
  {
    id: 4,
    name: "Ім'я продукту 4",
    price: 100,
    image: "/slide4.jpg",
    description:
      "Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и реализации форм развития. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и реализации форм развития.",
    category: "Category 12",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["S", "L"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: ["/slide2.jpg", "/slide1.jpg", "/slide3.jpg"],
        sizes: ["XS", "S"],
      },
    ],
  },
];
