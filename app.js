function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const navList = document.querySelector('#nav ul')
const navItem = navList.querySelectorAll('li')
const burger = document.querySelector('.burger-menu')
const close = document.querySelector('.burger-menu-close')

console.log(burger);

burger.addEventListener('click', () => {
  console.log('clicked');
  navList.classList.add('active-nav')
})

close.addEventListener('click', () => {
  console.log('clicked');
  navList.classList.remove('active-nav')
})

navItem.forEach(item => {
  item.addEventListener('click', () => {
    navList.classList.remove('active-nav')
  })
})

console.log(123);