import { faker } from "@faker-js/faker";

// Генеруємо фейкові товари
const generateFakeData = (count) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    price: faker.commerce.price(100, 5000, 0, " "), // Ціна в діапазоні від 1000 до 50000
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
    ]), // Випадкова категорія
    material: faker.helpers.arrayElement([
      "Порцеляна",
      "Кераміка",
      "Кришталь",
      "Дерево",
      "Олово",
      "Позолота",
      "Тканина",
    ]), // Випадковий матеріал
    image: `https://picsum.photos/300/400?random=${index + 1}`, // Унікальні зображення
    createdAt: faker.date.recent(30), // Дата створення за останні 30 днів
  }));
};

// Фільтри для сторінки
const sortOptions = [
  "За найновішими",
  "За найбільшою ціною",
  "За найменьшою ціною",
];
const categories = [
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
const materials = [
  "Порцеляна",
  "Кераміка",
  "Кришталь",
  "Скло",
  "Дерево",
  "Олово",
  "Позолота",
  "Тканина",
];

// Генеруємо 12 фейкових товарів
const fakeData = generateFakeData(100);

console.log(fakeData);
console.log("Сортування:", sortOptions);
console.log("Категорії:", categories);
console.log("Фільтри:", materials);
