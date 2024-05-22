//function MudarCor() {
//  alert('Oi')
//}

function MudarTema() {
  const html = document.documentElement

  //Pode ser feito com IF e ELSE

  //if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //  html.classList.add('light')
  //
  //Ou Pode ser feito com o TOGGLE
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')){
     img.setAttribute("src", "assets/perfil.png")
   }else{
    img.setAttribute("src", "./assets/assets/github.svg")
}
}
