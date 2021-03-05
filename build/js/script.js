'use strict';
const modalQuestionsTemplate = document.querySelector('#questions').content.querySelector('.questions');
const body = document.querySelector('body');
const linksToModal = document.querySelectorAll('.header__link');

const onIndexReturn = (evt) => {
  if (evt.key !== 'Escape' && evt.target.classList.contains('questions__box--m')) {
    return;
  }
  evt.preventDefault();
  console.log('work');
  body.classList.remove('overflow');
  document.querySelector('.questions--m').remove();
}

const onlinksToModalClick = (evt) => {
  evt.preventDefault();
  const newModal = modalQuestionsTemplate.cloneNode(true);
  body.insertAdjacentElement('afterbegin', newModal);
  body.classList.add('overflow');
  const returnToIndex = newModal.querySelector('.questions__return-text');
  returnToIndex.addEventListener('click', onIndexReturn);
  document.addEventListener('keydown', onIndexReturn);
}

linksToModal.forEach((link) => {
  link.addEventListener('click', onlinksToModalClick)
});
