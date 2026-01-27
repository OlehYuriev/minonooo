import { IProduct } from "@/type/product";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Плаття для дитини",
    price: 399,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2Fslide1.jpg?alt=media&token=a8f29cd9-2c3e-4f54-9490-b5ee72da6fee",
    description: "Комфортне плаття для дитини.",
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
        colorCode: "#184B44",
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
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F2.jpeg?alt=media&token=764093e7-8dcf-498f-afe5-5e14512ba7ea",
    description: "Сучасні джинси з високою посадкою для будь-якого образу.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F2_1.webp?alt=media&token=d485ece2-8552-466f-8ebf-cedb590e3fc6",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F2_2.webp?alt=media&token=39b0f3cf-4448-4fb0-8e78-695e9b18b172",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F2_3.webp?alt=media&token=2f93f63e-9ffc-460e-9183-71c3c086a07b",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Темно-синій",
        colorCode: "#00008B",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F2_4.webp?alt=media&token=590c0e9e-5637-48c8-b7d1-696dc73d1de0",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F2_5.webp?alt=media&token=16018514-a9db-430b-a6a2-c792cc19700e",
        ],
        sizes: ["M", "L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#184B44",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F2_z1.webp?alt=media&token=2e2e2f83-738a-484f-9bd3-1e8a82694a2c",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F2_z2.webp?alt=media&token=31dc8c8c-07ab-468c-ae79-b44d61b2e314",
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
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_k1.webp?alt=media&token=74b6ee62-f808-4bb8-9fb7-a18e2c9a9471",
    description:
      "М’який светр для прохолодної погоди, підходить під будь-який стиль.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_k1.webp?alt=media&token=74b6ee62-f808-4bb8-9fb7-a18e2c9a9471",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_k2.webp?alt=media&token=0854a1cb-6e59-41f5-99c2-d9bc55af5cb4",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_k3.webp?alt=media&token=cd186d54-7900-4b69-ae35-49bb3299abd7",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_s1.webp?alt=media&token=09620104-524f-4364-9142-7cca333cb52d",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_s2.webp?alt=media&token=547eab1d-f3fd-4f0c-8a68-3e8c5a99fd72",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_s3.webp?alt=media&token=3c5abbb2-91a0-4914-a1d0-35137f5b80c1",
        ],
        sizes: ["M", "L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#184B44",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_z1.jpg?alt=media&token=d38e7715-145b-4197-8bb2-97b927b6e587",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_z2.jpg?alt=media&token=b80fb697-4bf9-4d28-90eb-c62050cd91d3",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F3_z3.jpg?alt=media&token=fc3fccaa-5816-4a85-b264-39290d81c1cc",
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
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_k1.webp?alt=media&token=a8832fe1-860a-4e4f-8fbf-6ad45e7a9150",
    description: "Легка куртка для міжсезоння, захищає від вітру та дощу.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_k1.webp?alt=media&token=a8832fe1-860a-4e4f-8fbf-6ad45e7a9150",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_k2.webp?alt=media&token=06ecf6d6-77de-4b89-9a9b-efe84495b405",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_k3.webp?alt=media&token=a7303e76-8ced-4e16-be41-4a97752f7115",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_s1.webp?alt=media&token=c0049507-6f67-402b-be65-0150203a25d2",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_s2.webp?alt=media&token=8bb8c413-7a6a-46e2-bd6b-f4720848365b",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_s3.webp?alt=media&token=f3f89310-f17a-4ed2-9055-b0035786fcb9",
        ],
        sizes: ["M", "L", "XL"],
      },
      {
        colorName: "Зелений",
        colorCode: "#184B44",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_z1.webp?alt=media&token=2b3a2c8d-4960-4dbe-9e13-ca6fd69aa516",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F4_z2.webp?alt=media&token=45ef0e2e-4066-4948-923f-9d80912fc0d0",
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
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F5_k1.webp?alt=media&token=0277f5e5-a5b9-4847-93ea-c5005d4cd3e2",
    description:
      "Легка спортивна футболка для тренувань та активного відпочинку.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F5_s1.webp?alt=media&token=7112d581-286c-4289-8b16-b4f117670de8",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F5_s2.webp?alt=media&token=fe2ed996-97fb-441f-bb45-f132aef75e66",
        ],
        sizes: ["S", "M", "L"],
      },
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F5_k1.webp?alt=media&token=0277f5e5-a5b9-4847-93ea-c5005d4cd3e2",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F5_k2.webp?alt=media&token=dea7c591-0af3-4791-847c-95889d8085dd",
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
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F6_s1.webp?alt=media&token=3c07fd80-fd8a-428c-9f05-de233048ea4a",
    description:
      "Класичні джинси для повсякденного носіння, зручні та стильні.",
    category: "Одяг",
    variants: [
      {
        colorName: "Темно-синій",
        colorCode: "#00008B",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F6_s1.webp?alt=media&token=3c07fd80-fd8a-428c-9f05-de233048ea4a",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F6_s2.webp?alt=media&token=ec5fd94c-0b65-488a-bb8f-824cde569129",
        ],
        sizes: ["S", "M", "L"],
      },
    ],
  },
  {
    id: 7,
    name: "Светр вовняний",
    price: 1099,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F7_s1.webp?alt=media&token=2a82cef6-38fd-4681-89a8-568db87d0f36",
    description: "Теплий вовняний светр, м’який та приємний на дотик.",
    category: "Одяг",
    variants: [
      {
        colorName: "Червоний",
        colorCode: "#FF0000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F7_s1.webp?alt=media&token=2a82cef6-38fd-4681-89a8-568db87d0f36",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F7_s2.webp?alt=media&token=dddcb1df-a37b-44d4-b536-964d0b0165af",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F7_s3.webp?alt=media&token=f1138cd0-01f7-476c-9bd0-b580112d6939",
        ],
        sizes: ["S", "M", "L", "XL"],
      },
    ],
  },
  {
    id: 8,
    name: "Куртка зимова",
    price: 2999,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F8_s1.webp?alt=media&token=76c68edd-aee1-4266-ac9b-45d67f1583f3",
    description:
      "Зимова куртка для холодної погоди, захист від снігу та вітру.",
    category: "Одяг",
    variants: [
      {
        colorName: "Cіра",
        colorCode: "#A9A9A9",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F8_s1.webp?alt=media&token=76c68edd-aee1-4266-ac9b-45d67f1583f3",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F8_s2.webp?alt=media&token=52bb1fa0-de3a-4e46-acc1-2d634dda0577",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F8_s3.webp?alt=media&token=c9096183-5aaa-43da-b85e-9582c1442c51",
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
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F9_.webp?alt=media&token=f8b490fe-e9ad-41f6-9459-88e597e98682",
    description:
      "Стильна футболка з принтом, підходить для повсякденного носіння.",
    category: "Одяг",
    variants: [
      {
        colorName: "Білий",
        colorCode: "#000000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F9_.webp?alt=media&token=f8b490fe-e9ad-41f6-9459-88e597e98682",
        ],
        sizes: ["S", "M", "L"],
      },
    ],
  },
  {
    id: 10,
    name: "Джинси модні",
    price: 1499,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F10_s.webp?alt=media&token=9d5abcc9-8ecb-4258-84f5-900397fe649e",
    description:
      "Модні джинси з сучасним кроєм, підходять під будь-який стиль.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синій",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F10_s.webp?alt=media&token=9d5abcc9-8ecb-4258-84f5-900397fe649e",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F10_s2.webp?alt=media&token=1b030538-dda4-42d4-8153-1a576f8590f3",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F10_s3.webp?alt=media&token=093c7acb-103c-45a8-9ab9-9c5dd1b79612",
        ],
        sizes: ["S", "M", "L"],
      },
    ],
  },
  {
    id: 11,
    name: "Светр класичний",
    price: 999,
    image:
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F12_%D1%811.webp?alt=media&token=28e00f84-ae70-4d35-b9cc-aae89c0234ee",
    description:
      "Класичний светр для прохолодної погоди, підходить до джинсів та штанів.",
    category: "Одяг",
    variants: [
      {
        colorName: "Чорний",
        colorCode: "#000000",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F12_%D1%811.webp?alt=media&token=28e00f84-ae70-4d35-b9cc-aae89c0234ee",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F12_%D1%812.webp?alt=media&token=81de3f27-2309-467d-bc21-87c1f8c87bea",
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
      "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F11_s3.jpg?alt=media&token=99b6fc76-aea5-4ccc-a223-210cca60e2cd",
    description: "Легка куртка для щоденного носіння в міжсезоння.",
    category: "Одяг",
    variants: [
      {
        colorName: "Синя",
        colorCode: "#0000FF",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F11_s3.jpg?alt=media&token=99b6fc76-aea5-4ccc-a223-210cca60e2cd",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F11_%D1%961.jpg?alt=media&token=0aec60f6-1093-4a04-8317-83094c852717",
          "https://firebasestorage.googleapis.com/v0/b/minonooo-f0375.firebasestorage.app/o/productsImage%2F11s2.jpg?alt=media&token=65220a5a-2ab8-4a0e-a715-b3bf36a781d9",
        ],
        sizes: ["M", "L", "XL"],
      },
    ],
  },
];
