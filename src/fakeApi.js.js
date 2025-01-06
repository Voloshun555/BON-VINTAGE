import { faker } from "@faker-js/faker";

const generateFakeData = (count) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    price: faker.commerce.price(100, 5000, 0, " "),
    title: `King size ${faker.company.name()}`,
    description: faker.lorem.sentences(2),
    country: faker.location.country(1),
    category: faker.helpers.arrayElement([
      "Сервізи",
      "Тарілки",
      "Декоративні тарілки",
      "Чайні та кавові трійки",
      "Різний посуд",
      "Келихи для вина",
      "Келихи пивні",
      "Попільнички",
      "Предмети інтер’єру",
      "Картини та гравюри",
      "Вази",
      "Статуетки та фігурки",
      "Скриньки",
      "Скатертини та серветки",
      "Іграшки",
      "Меблі",
      "Карти колекційні",
    ]),
    material: faker.helpers.arrayElement([
      "Порцеляна",
      "Кераміка",
      "Кришталь",
      "Скло",
      "Дерево",
      "Олово",
      "Позолота",
      "Тканина",
      "Папір",
    ]),
    image: `https://picsum.photos/300/400?random=${index + 1}`,
    createdAt: faker.date.recent(30),
  }));
};

export const fetchFakeData = async (count = 12) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateFakeData(count));
    });
  });
};

 export const sortOptions = [
   { value: "newest", label: "За найновішими" },
   { value: "highPrice", label: "За найбільшою ціною" },
   { value: "lowPrice", label: "За найменшою ціною" },
 ];
export const categories = [
  "Сервізи",
  "Тарілки",
  "Декоративні тарілки",
  "Чайні та кавові трійки",
  "Різний посуд",
  "Келихи для вина",
  "Келихи пивні",
  "Попільнички",
  "Предмети інтер’єру",
  "Картини та гравюри",
  "Вази",
  "Статуетки та фігурки",
  "Скриньки",
  "Скатертини та серветки",
  "Іграшки",
  "Меблі",
  "Карти колекційні",
];
export const materials = [
  "Порцеляна",
  "Кераміка",
  "Кришталь",
  "Скло",
  "Дерево",
  "Олово",
  "Позолота",
  "Тканина",
  "Папір",
];
