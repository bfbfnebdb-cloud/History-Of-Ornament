const galleryImages = [
  'img/portret.jpg',
  'img/portret-2.png',
  'img/portret-3.png',
  'https://kirmash.by/wp-content/uploads/2021/03/belorusskij-ornament-4.jpg',
  'https://kirmash.by/wp-content/uploads/2021/03/belorusskij-ornament-5.jpg'
];

// Массив подписей к изображениям (должен совпадать по индексу с galleryImages)
const galleryCaptions = [
  'Портрет ткачихи из деревни Неглюбка (1975)',
  ' Зайцев Е. А. Портрет Анны Григорьевны Гриньковой. 1975.',
  ' Зайцев Е. А. Ткачиха. 1975.',
  'Белорусский орнамент — растительные узоры',
  'Белорусский орнамент — символы и знаки'
];

let currentImageIndex = 0;

// Элементы модального окна
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption'); // новый элемент подписи
const modalClose = document.querySelector('.modal-close');
const modalArrowLeft = document.querySelector('.modal-arrow-left');
const modalArrowRight = document.querySelector('.modal-arrow-right');
const currentImageSpan = document.getElementById('currentImage');
const totalImagesSpan = document.getElementById('totalImages');
const tooltipImage = document.querySelector('.tooltip-container img');

// Установка общего количества изображений
totalImagesSpan.textContent = galleryImages.length;

// Открытие модального окна при клике на изображение
tooltipImage.addEventListener('click', function () {
  currentImageIndex = 0;
  updateModalImage();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

// Закрытие модального окна
modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Закрытие при клике вне изображения
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Навигация влево
modalArrowLeft.addEventListener('click', function () {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  }
  updateModalImage();
});

// Навигация вправо
modalArrowRight.addEventListener('click', function () {
  currentImageIndex++;
  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }
  updateModalImage();
});

// Обновление изображения И подписи в модальном окне
function updateModalImage() {
  modalImage.src = galleryImages[currentImageIndex];
  modalCaption.textContent = galleryCaptions[currentImageIndex];
  currentImageSpan.textContent = currentImageIndex + 1;
}

// Навигация с помощью клавиатуры
document.addEventListener('keydown', function (e) {
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowLeft') {
      modalArrowLeft.click();
    } else if (e.key === 'ArrowRight') {
      modalArrowRight.click();
    } else if (e.key === 'Escape') {
      modalClose.click();
    }
  }
});