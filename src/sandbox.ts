const names = ["Lore", "Kami", "Sato", "Loman"];

const list = document.querySelector("#names");
names.forEach((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  list?.append(li);
});
