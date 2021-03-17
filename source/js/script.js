'use strict';
const modalQuestionsTemplate = document.querySelector('#questions').content.querySelector('.questions');
const thankYouTanplate = document.querySelector('#thankyou').content.querySelector('.thankyou');
const badTanplate = document.querySelector('#bad-modal').content.querySelector('.bad');
const body = document.querySelector('body');
const linksToModal = document.querySelectorAll('.header__link');
const newModal = modalQuestionsTemplate.cloneNode(true);
const formSubscribe = newModal.querySelector('.form-subscribe');
const noList = newModal.querySelector('.question-no__list')

const onIndexReturn = (modal, box, link, evt) => {
  if (evt.key !== 'Escape' && !evt.target.classList.contains(box) && !evt.target.classList.contains(link)) {
    return;
  }
  evt.preventDefault();
  body.classList.remove('overflow');
  modal.remove();
  document.removeEventListener('keydown', onIndexReturn);
}
const onBadClick = (evt) => {
  if(!evt.target.classList.contains('question-no__link')){
    return;
  }
  evt.preventDefault();
  const newBad = badTanplate.cloneNode(true);
  newModal.remove();
  body.insertAdjacentElement('afterbegin', newBad);
  body.classList.add('overflow');
  document.addEventListener('keydown', onIndexReturn.bind(null, newBad, 'bad', 'bad'));
  newBad.addEventListener('click', onIndexReturn.bind(null, newBad, 'bad', 'bad'));
}

const onlinksToModalClick = (evt) => {
  evt.preventDefault();
  body.insertAdjacentElement('afterbegin', newModal);
  body.classList.add('overflow');
  const returnToIndex = newModal.querySelector('.questions__return-text');
  returnToIndex.addEventListener('click', onIndexReturn.bind(null, newModal, 'questions', 'questions__return-text'));
  document.addEventListener('keydown', onIndexReturn.bind(null, newModal, 'questions', 'questions__return-text'));
  newModal.addEventListener('click', onIndexReturn.bind(null, newModal, 'questions', 'questions__return-text'));
  formSubscribe.addEventListener('submit', onSubscribe);
  noList.addEventListener('click', onBadClick)
}

const onSubscribe = (evt) => {
  evt.preventDefault();
  newModal.remove();
  const newThankYou = thankYouTanplate.cloneNode(true);
  body.insertAdjacentElement('afterbegin', newThankYou);
  body.classList.add('overflow');
  document.addEventListener('keydown', onIndexReturn.bind(null, newThankYou, 'thankyou', 'thankyou'));
  newThankYou.addEventListener('click', onIndexReturn.bind(null, newThankYou, 'thankyou', 'thankyou'));
}

linksToModal.forEach((link) => {
  link.addEventListener('click', onlinksToModalClick)
});

$(document).ready(function () {
  $('.reviews__slider').slick({
    slidesToShow: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    arrows: true,
    appendArrows: $('.reviews__layout'),
    prevArrow: $('.reviews__btn--prev'),
    nextArrow: $('.reviews__btn--next'),
    // autoplay: true,
    // autoplaySpeed: 3000,
  });
});

