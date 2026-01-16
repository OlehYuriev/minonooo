import { IProduct } from "@/type/product";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Футболка класична",
    price: 399,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description: "Комфортна класична футболка з бавовни для щоденного носіння.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
        ],
        sizes: ["XS", "S", "M"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["M", "L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["XS", "S"],
      },
    ],
  },
  {
    id: 2,
    name: "Джинси стильні",
    price: 1299,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description: "Сучасні джинси з високою посадкою для будь-якого образу.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Темно-синій",
        colorCode: "#00008B",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["M", "L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M"],
      },
    ],
  },
  {
    id: 3,
    name: "Светр теплий",
    price: 899,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
    description:
      "М’який светр для прохолодної погоди, підходить під будь-який стиль.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["M", "L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
        ],
        sizes: ["XS", "S", "M"],
      },
    ],
  },
  {
    id: 4,
    name: "Куртка демісезонна",
    price: 2299,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
    description: "Легка куртка для міжсезоння, захищає від вітру та дощу.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["M", "L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
        ],
        sizes: ["XS", "S", "M"],
      },
    ],
  },
  {
    id: 5,
    name: "Футболка спортивна",
    price: 499,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description:
      "Легка спортивна футболка для тренувань та активного відпочинку.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  {
    id: 6,
    name: "Джинси класичні",
    price: 1399,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description:
      "Класичні джинси для повсякденного носіння, зручні та стильні.",
    category: "Одяг",
    variants: [
      {
        colorName: "Темно-синій",
        colorCode: "#00008B",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
        ],
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  {
    id: 7,
    name: "Светр вовняний",
    price: 1099,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
    description: "Теплий вовняний светр, м’який та приємний на дотик.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L", "XL"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
        ],
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  {
    id: 8,
    name: "Куртка зимова",
    price: 2999,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
    description:
      "Зимова куртка для холодної погоди, захист від снігу та вітру.",
    category: "Одяг",
    variants: [
      {
        colorName: "Зелена",
        colorCode: "#00FF00",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
        ],
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  {
    id: 9,
    name: "Футболка з принтом",
    price: 549,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description:
      "Стильна футболка з принтом, підходить для повсякденного носіння.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  {
    id: 10,
    name: "Джинси модні",
    price: 1499,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description:
      "Модні джинси з сучасним кроєм, підходять під будь-який стиль.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Зелений",
        colorCode: "#00FF00",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  {
    id: 11,
    name: "Светр класичний",
    price: 999,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
    description:
      "Класичний светр для прохолодної погоди, підходить до джинсів та штанів.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L"],
      },
    ],
  },
  {
    id: 12,
    name: "Куртка легка",
    price: 1999,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
    description: "Легка куртка для щоденного носіння в міжсезоння.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синя",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide4.jpg?alt=media&token=b0490729-e780-4482-b92f-32a5f64a1cd1",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
        ],
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  {
    id: 13,
    name: "Футболка для спорту",
    price: 499,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description: "Спортивна футболка для тренувань, дихаючий матеріал.",
    category: "Одяг",
    variants: [
      {
        colorName: "Зелена",
        colorCode: "#00FF00",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
        ],
        sizes: ["S", "M", "L"],
      },
    ],
  },
  {
    id: 14,
    name: "Джинси повсякденні",
    price: 1299,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description: "Зручні джинси для повсякденного носіння, класичний крій.",
    category: "Одяг",
    variants: [
      {
        colorName: "Темно-сині",
        colorCode: "#00008B",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L"],
      },
    ],
  },
  {
    id: 15,
    name: "Светр з коміром",
    price: 1099,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
    description: "Теплий светр з коміром для прохолодних вечорів.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide3.jpg?alt=media&token=61914de9-6156-481b-82f4-e92fbbfa799b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
        ],
        sizes: ["S", "M", "L", "XL"],
      },
    ],
  },
];
