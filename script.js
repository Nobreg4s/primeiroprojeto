function togglemode() {
  const html = document.documentElement
    html.classList.toggle("light")

  //       ---------------------
  // ou podemos utigilizr o seguinte código para a condição.
  //  if(html.classList.contains('ligth')){
  //    html.classList.remove('ligth')
  //   }
  //   else{
  //     html.classList.add('ligth')
  //       ---------------------

const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Imagem modo dia não encontrada")
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem modo noite não encontrada")
  }
} 