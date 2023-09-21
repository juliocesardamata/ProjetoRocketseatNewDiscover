function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Avatar de Júlio Césara da Mata e nenem do papai")
  } else {
    img.setAttribute("src", "./assets/avatar-normal.png")
    img.setAttribute("alt", "Avatar de Júlio Césara da Mata")
  }
}
