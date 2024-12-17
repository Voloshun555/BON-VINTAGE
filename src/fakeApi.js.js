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
      "Вази",
      "Статуетки та фігурки",
      "Кришталь",
      "Скло",
      "Дерево",
    ]), 
    material: faker.helpers.arrayElement([
      "Порцеляна",
      "Кераміка",
      "Кришталь",
      "Дерево",
      "Олово",
      "Позолота",
      "Тканина",
    ]), 
    image: `https://picsum.photos/300/400?random=${index + 1}`, 
    createdAt: faker.date.recent(30),
  }));
};

export const fetchFakeData = async (count = 12) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateFakeData(count));
    }, 500);
  });
};

export  const sortOptions = [
  "За найновішими",
  "За найбільшою ціною",
  "За найменьшою ціною",
];
export const categories = [
  "Сервізи",
  "Тарілки",
  "Декоративні тарілки",
  "Чайні та кавові трійки",
  "Келихи для вина",
  "Вази",
  "Статуетки та фігурки",
  "Скриньки",
  "Іграшки",
  "Меблі",
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
];
