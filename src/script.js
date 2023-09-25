
function AlterarModo() {
    const html = document.documentElement
    
    html.classList.toggle('dark')
    
     const body = document.getElementById("body");
     const img = document.getElementById("perfilimg");
    // Alterna as classes do body
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    // Alterna a imagem de perfil
    if (body.classList.contains("light-mode")) {
        img.setAttribute("src", "/img/avatar-light.png");
body.style.backgroundImage = "url('/img/bg-mobile-light.jpg')";
        
    } else {
        img.setAttribute("src", "/img/Avatar meu.png");
body.style.backgroundImage = "url('/img/bg-mobile.jpg')";
    }

    // Altera a cor do texto
    // const texto = document.querySelectorAll(".text-white, .text-gray-300, .text-gray-400");
    // texto.forEach((element) => {
    //     element.classList.toggle("dark:text-black");
    // });
}
