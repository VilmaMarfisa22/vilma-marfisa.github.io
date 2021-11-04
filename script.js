// Gera número aleatório
function randomNumber() {
  const num = Math.floor(Math.random() * 256);
  return num;
}

// Gera cor aleatória
function randomColor() {
  const rgb = `rgb(${randomNumber()} , ${randomNumber()} , ${randomNumber()})`;
  return rgb;
}

// 02 | 03- Cria paleta com quatro cores distintas iniciando com 'preto'
function paletteColor() {
  const palette = document.querySelector('#color-palette');
  palette.classList.add('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const divColor = document.createElement('div');
    divColor.classList.add('color');
    divColor.classList.add(`color${[index]}`);
    if (index === 0) {
      divColor.style.backgroundColor = 'black';
    } else {
      const cor = randomColor();
      divColor.style.backgroundColor = cor;
    }
    palette.appendChild(divColor);
  }
}

// Cria seletor de cores
function inputColor() {
  const palette = document.querySelector('#color-palette');
  const colorLabel = document.createElement('label');
  colorLabel.id = 'c-label';
  colorLabel.classList.add('c-label');
  colorLabel.innerText = 'Selecione uma cor';
  const colorInput = document.createElement('input');
  colorInput.id = 'c-input';
  colorInput.classList.add('c-input');
  colorInput.type = 'color';
  palette.appendChild(colorLabel);
  palette.appendChild(colorInput);
}

// Dimensiona div's pixel
function pixelSize(size, sWidth, element) {
  switch (size) {
    case 5 || sWidth <= 13:
      element.style.width = '40px';
      element.style.height = '40px';
      break;
    case 6 || sWidth === 14:
      element.style.width = '35px';
      element.style.height = '35px';
      break;
    case 7:
      element.style.width = '25px';
      element.style.height = '25px';
      break;
    case 8:
      element.style.width = '15px';
      element.style.height = '15px';
      break;
    case 9:
      element.style.width = '9px';
      element.style.height = '9px';
      break;
    default:
      element.style.width = '3px';
      element.style.height = '3px';
      break;
  }
}

// 04- Cria quadro com 25 pixels
function pixelFrame(size=5, size_width=5) {
  let select = parseInt(size, 10);
  let sizeWidth = parseInt(size_width, 10)
  if (select < 5) {
    select = 5;
  } else
  if (select > 10) {
    select = 10;
  }
  if (sizeWidth === '') {
    sizeWidth = select;
  } else
  if (sizeWidth < 5) {
    sizeWidth = 5;
  } else
  if (size_width > 30) {
    sizeWidth = 30;
  }
  const container = document.querySelector('.container');
  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.classList.add('pixel-board');
  for (let index = 0; index < select; index += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixelBoard.appendChild(line);
    for (let cont = 0; cont < sizeWidth; cont += 1) {
      const divPixel = document.createElement('div');
      divPixel.classList.add('pixel');
      pixelSize(select, sizeWidth, divPixel);
      line.appendChild(divPixel);
    }
  }
  container.appendChild(pixelBoard);
}

  // 07- Tira a seleção da cor
function stripSelection() {
  const unselect = document.querySelectorAll('.color');
  for (let index = 0; index < unselect.length; index += 1) {
    unselect[index].classList.remove('selected');
  }
}

// 07- Seleciona a cor
function selectColor(classElement) {
  const color = `.${classElement}`;
  const select = document.querySelector(color);
  select.classList.add('selected');
}

// 07- Seleciona a cor ao clicar
function clicSelectColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    const classPixel = event.target.classList[0];
    if (classPixel === 'color') {
      const colorSelect = event.target;
      colorSelect.classList.add('selected');
      const color = colorSelect.classList[1];
      stripSelection();
      selectColor(color);
    }
  });
}

// 08- Preenche cor
function colorFill() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', function (event) {
    const pixelSelect = event.target;
    const colorPixel = document.querySelector('.selected').style.backgroundColor;
    if (pixelSelect.className === 'pixel') {
      pixelSelect.style.backgroundColor = colorPixel;
    }
  });
}

// Preenche cor 2
function fillColor() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', function (event) {
    const pixelSelect = event.target;
    const color = document.querySelector('#c-input').value;
    if (pixelSelect.className === 'pixel') {
      pixelSelect.style.backgroundColor = color;
    }
  });
}

// 09- Apaga quadro
function clearBoard() {
  const buttonClear = document.querySelector('.clear-board');
  buttonClear.addEventListener('click', function () {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

// Função para redimensionar o quadro
function resizeBoard() {
  const generateBoard = document.querySelector('#generate-board');
  generateBoard.addEventListener('click', function () {
    const inputValue = document.querySelector('#board-size').value;
    const inputWidth = document.querySelector('#board-size-width').value;
    const board = document.querySelector('#pixel-board');
    if (inputValue === '' || inputValue < 1 || inputWidth === '' || inputWidth < 1) {
      alert('Tamanho inválido!');
    } else {
      board.remove();
      pixelFrame(inputValue, inputWidth);
      fillColor();
    }
  });
}

// Função para criar botão
function createButton(description, identifier, dad) {
  const parentElement = document.getElementById(dad);
  const buttonCreated = document.createElement('button');
  buttonCreated.innerText = description;
  buttonCreated.id = identifier;
  buttonCreated.classList.add('buttons', identifier);
  parentElement.appendChild(buttonCreated);
}

// Adiciona uma div ao body
function divImage(number) {
  const container = document.querySelector('body');
  const circle = document.createElement('div');
  circle.id = 'div_img';
  circle.classList.add(`img-${number}`);
  container.appendChild(circle);
}

// Adiciona rodapé à página
function createFooter() {
  const container = document.querySelector('body');
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.classList.add('footer');
  footer.innerText = 'by: Web Developer Cleber Lopes Teixeira ©️ | cleber-teixeira.github.io';
  container.appendChild(footer);
}

window.onload = function () {
  // paletteColor();
  inputColor();
  // selectColor('color0');
  createButton('Redimensionar', 'generate-board', 'controls');
  createButton('Limpar Quadro', 'clear-board', 'controls');
  pixelFrame(5);
  resizeBoard();
  fillColor();
  clearBoard();
  clicSelectColor();
  createFooter();
  divImage('01');
  divImage('02');
};
