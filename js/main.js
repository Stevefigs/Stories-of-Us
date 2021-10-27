const btn = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const content = document.querySelector('main');
const rectone = document.getElementById('Rectangle_1')
const recttwo = document.getElementById('Rectangle_2')
const bars = document.querySelector('svg')



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

bars.addEventListener('mouseover',function(){
})

// bars.addEventListener('mouseenter',function(){
//   rectone.classList.remove('moveup');
//   recttwo.classList.remove('movedown');
// })
  console.log('it works');
