// ------------------------1-------ЗАВДАННЯ----------

// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

const findEl = document.querySelectorAll(".item");
console.log(`У списку ${findEl.length} категорії.`);

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

findEl.forEach((item) => {
  const textEl = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("li").length;

  console.log(`Категорія: ${textEl}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});

// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

// ----------------2---ЗАВДАННЯ----------

// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredients);

const listEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  return itemEl;
});

ingredientsEl.append(...listEl);




// ------------------------4----------Завдання------------------

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.



// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

  let currentCount = 0;
  const displayEl = document.getElementById('display');

  function increase() {
    currentCount += 1;
    refreshDisplay();
  }

  function decrease() {
    currentCount -= 1;
    refreshDisplay();
  }

  function refreshDisplay() {
    displayEl.textContent = currentCount;
  }

  const btnDecrease = document.querySelector('button[data-action="decrement"]');
  const btnIncrease = document.querySelector('button[data-action="increment"]');

  btnDecrease.addEventListener('click', decrease);
  btnIncrease.addEventListener('click', increase);