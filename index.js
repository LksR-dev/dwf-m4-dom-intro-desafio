const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  //Borro los li del ul
  const liEl = document.querySelectorAll(".lista li");

  liEl.forEach((element) => {
    element.remove();
  });

  //Creo nuevos li basados en el array
  const ulEl = document.querySelector(".lista");

  cosasQueAprendimos.forEach((i) => {
    const newLi = document.createElement("li");
    ulEl.appendChild(newLi);

    newLi.textContent = i.tema;
    newLi.classList = i.class;

    console.log(newLi);
  });
}

main();
