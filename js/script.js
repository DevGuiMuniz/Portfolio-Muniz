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


const image6ID = 'murumuruimg';

const img6 = document.getElementById(image6ID);
if (img6) {
  img6.classList.add('shadow2');
}

const image7ID = 'murumuruimg';

const img7 = document.getElementById(image7ID);
if (img7) {
  img6.classList.add('shadow3');
}

const image8ID = "murumuruimg";
const img8 = document.getElementById(image8ID);
if (img8) {
  img8.classList.add('shadow4');
}