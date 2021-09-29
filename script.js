let words = {
  apple: "яблоко",
  house: "дом",
  mouse: "мышь",
};
let words1 = {
  яблоко: "apple",
  дом: "house",
  мышь: "mouse",
};
let n = prompt("Желаемое количество повторов слов");
let i = 0;
let languagec = prompt("Введите enRu или ruEn ");
let language = ["enRu", "ruEn"];

if (languagec == language[0]) {
  alert("с англиского  на русский ");
  let word;
  let ball = 0;
  let errors = 0;
  let translate;
  label: while (n > i) {
    for (word in words) {
      alert("Слово: " + word);
      translate = prompt("Введите перевод, для завершения -'!'");
      if (translate == "!") break label;
      if (n == 0) break label;
      if (translate == words[word]) {
        alert("Правильно!");
        ball++;
      } else {
        alert("Неправильно!");
        errors++;
      }
    }
    i++;
  }

  alert("Правильно: " + ball + ", неправильно: " + errors);
  for (word in words) {
    document.write(word + ": " + words[word] + "<br>");
  }
} else if (languagec == language[1]) {
  alert("с русского на англиский");
  let word1;
  let ball1 = 0;
  let errors1 = 0;
  let translate1;

  label1: while (n > i) {
    for (word1 in words1) {
      alert("Слово: " + word1);
      translate1 = prompt("Введите перевод, для завершения -'!'");
      if (n == 0) break label1;
      if (translate1 == words1[word1]) {
        alert("Правильно!");
        ball1++;
      } else {
        alert("Неправильно!");
        errors1++;
      }
    }
    i++;
  }

  alert("Правильно: " + ball1 + ", неправильно: " + errors1);
  for (word1 in words1) {
    document.write(word1 + ": " + words1[word1] + "<br>");
  }
} else {
  alert("Язык введен не правильно");
}
