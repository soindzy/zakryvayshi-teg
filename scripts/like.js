/* этот скрипт использует такие имена классов:
✦ heart-icon — для svg-иконки анимированного сердца
✦ like-btn — для кнопки Like рядом с иконкой
✦ heart-btn — для кнопки, оборачивающей иконку
✦ heart-btn — для кнопки, оборачивающей иконку
✦ heart-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ btn-text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.heart-icon');
const likeButtonArray = document.querySelectorAll('.like-btn');
const iconButtonArray = document.querySelectorAll('.heart-btn');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('heart-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('heart-liked')) {
    setTimeout(
      () => (button.querySelector('.btn-text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.btn-text').textContent = 'Like'),
      500
    );
  }
}
