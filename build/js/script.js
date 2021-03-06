'use strict';
const modalQuestionsTemplate = document.querySelector('#questions').content.querySelector('.questions');
const thankYouTanplate = document.querySelector('#thankyou').content.querySelector('.thankyou');
const body = document.querySelector('body');
const linksToModal = document.querySelectorAll('.header__link');
const newModal = modalQuestionsTemplate.cloneNode(true);
const formSubscribe = newModal.querySelector('.form-subscribe')

const onIndexReturn = (evt) => {
  if (evt.key !== 'Escape' || evt.target.classList.contains('questions__box--m')) {
    return;
  }
  evt.preventDefault();
  console.log('work');
  body.classList.remove('overflow');
  document.querySelector('.questions--m').remove();
}

const onlinksToModalClick = (evt) => {
  evt.preventDefault();
  body.insertAdjacentElement('afterbegin', newModal);
  body.classList.add('overflow');
  const returnToIndex = newModal.querySelector('.questions__return-text');
  returnToIndex.addEventListener('click', onIndexReturn);
  document.addEventListener('keydown', onIndexReturn);
}

const onSubscribe = (evt) => {
  evt.preventDefault();
  newModal.remove();
  const newThankYou = thankYouTanplate.cloneNode(true);
  body.insertAdjacentElement('afterbegin', newThankYou);
}

linksToModal.forEach((link) => {
  link.addEventListener('click', onlinksToModalClick)
});
formSubscribe.addEventListener('submit', onSubscribe)
