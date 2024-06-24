const carrossel = document.querySelector('.carrossel');

// Criar elementos de imagem para cada pote e adicioná-los ao carrossel
const pote1 = document.createElement('img');
pote1.src = 'img/pote1.png';
pote1.alt = 'Pote de Vidro com Tampa';
carrossel.appendChild(pote1);

const pote2 = document.createElement('img');
pote2.src = 'img/pote2.png';
pote2.alt = 'Pote de Plástico com Tampa Hermética';
carrossel.appendChild(pote2);

const pote3 = document.createElement('img');
pote3.src = 'img/pote3.png';
pote3.alt = 'Pote de Plástico com Tampa ';
carrossel.appendChild(pote3);

// ... Adicione mais potes aqui

// Adicione funcionalidade ao carrossel (opcional)
