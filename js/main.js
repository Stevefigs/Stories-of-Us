const btn = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const content = document.querySelector('main');


btn.addEventListener('click',function(){
  overlay.classList.remove('hide');
  setTimeout(function(){overlay.classList.remove('fade')},100);
  content.classList.add('hide');
})

overlay.addEventListener('click',function(){
  overlay.classList.add('fade');
  setTimeout(function(){overlay.classList.add('hide')},200);
  content.classList.remove('hide');
})

