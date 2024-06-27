document.addEventListener("DOMContentLoaded", function() {
  // Adiciona a classe 'animar' ao elemento com a classe 'apresentacao_img'
  const imgElement = document.querySelector('.apresentacao_img');
  if (imgElement) {
      imgElement.classList.add('animar');
  }

  // IDs das imagens que precisam da classe 'shadow'
  const imageIds = ['myImage', 'myImage2', 'myImage3', 'myImage4', 'myImage5'];
  // ID da imagem que precisa da classe 'shadow1'
  const image5Id = 'ecofuryimg';
 


  // Adiciona a classe 'shadow' a todas as imagens listadas em imageIds
  imageIds.forEach(id => {
      const img = document.getElementById(id);
      if (img) {
          img.classList.add('shadow');
      }
  });

  // Adiciona a classe 'shadow1' à imagem com o ID image5Id
  const img5 = document.getElementById(image5Id);
  if (img5) {
      img5.classList.add('shadow1');
  }

});



