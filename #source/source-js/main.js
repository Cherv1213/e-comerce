"use strict"

const headerItem = document.querySelectorAll('.tab__item');
const mainContent = document.querySelectorAll('.tab-content');

for (let item of headerItem) {

   item.addEventListener('click', function(){

      for(let element of mainContent){
         element.classList.add('hidden')
      }

      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hidden')
   })
}
/*-------------------------------------------------------------------------------------------------*/

const tabsBtn = document.querySelectorAll('.menu__tab');

tabsBtn.forEach(function(item){
   item.addEventListener("click", function(){
      console.log("clicked");
   })
})