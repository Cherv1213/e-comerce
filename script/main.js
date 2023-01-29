"use strict"
const openModal = document.querySelector('.user__basket');
const modalBody = document.querySelector('.modal-wrapper');
const closeX = document.querySelector('.close-modal');

if(openModal){
   openModal.addEventListener('click',function(e){
      document.body.classList.add('lock');
      modalBody.classList.add('open');
   });
}
if(closeX){
   closeX.addEventListener('click',function(e){
      modalBody.classList.remove('open');
      document.body.classList.remove('lock');
   });
}


/*-------------------------------------------------------------------------------------------------*/
const headerItem = document.querySelectorAll('.tab__item');
const mainContent = document.querySelectorAll('.tab-content');

headerItem.forEach(function(item){
   item.addEventListener("click", function(){
      let mainBtn = item;
      let mainId = mainBtn.getAttribute("data-tab");
      let mainTab = document.querySelector(mainId);

      if ( ! mainBtn.classList.contains('active')){
         headerItem.forEach(function(item){
            item.classList.remove('active');
         });
   
         mainContent.forEach(function(item){
            item.classList.remove('active');
         });
   
         mainTab.classList.add('active');
         mainBtn.classList.add('active');
      };
      
   });
});
   
document.querySelector('.tab__item').click();

/*-------------------------------------------------------------------------------------------------*/

const tabsBtn = document.querySelectorAll('.menu__tab');
const tabsItems = document.querySelectorAll('.body__tabs');

tabsBtn.forEach(onTabClick);
   

function onTabClick(item){
   item.addEventListener("click", function(){
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if ( ! currentBtn.classList.contains('active')){
         tabsBtn.forEach(function(item){
            item.classList.remove('active');
         });
   
         tabsItems.forEach(function(item){
            item.classList.remove('active');
         });
   
         currentBtn.classList.add('active');
         currentTab.classList.add('active');
      };
      
   });
};
document.querySelector('.menu__tab').click();
/*-------------------------------------------------------------------------------------------------*/
const secondItem = document.querySelectorAll('.second');
const secondContent = document.querySelectorAll('.second-body');

secondItem.forEach(function(item){
   item.addEventListener("click", function(){
      let secondBtn = item;
      let secondId = secondBtn.getAttribute("data-tab");
      let secondTab = document.querySelector(secondId);

      if ( ! secondBtn.classList.contains('active')){
         secondItem.forEach(function(item){
            item.classList.remove('active');
         });
   
         secondContent.forEach(function(item){
            item.classList.remove('active');
         });
   
         secondTab.classList.add('active');
         secondBtn.classList.add('active');
      };
      
   });
});
   
document.querySelector('.second').click();
/*-------------------------------------------------------------------------------------------------*/

new Swiper('.customers-swiper',{
   //Optional parameters
      // direction: 'horizontal',
   loop: true,
   
   spaceBetween:32,
   speed:500,

   //    //количество слайдов для прокрутки 
   //    slidesPerGroup:1,

   //    //вкючает слайдер 
   //    enabled:true,

    breakpoints:{
       1000:{
         slidesPerView:3.5,
         centeredSlides: true,
       },
       500:{
         slidesPerView:2,
       },
       320:{
         slidesPerView:1,
       },
    },
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },

   //  pagination: {
   //    el: '.swiper-pagination',
   //    clickable: true,
   //    dynamicBullets: true,
   //    type: 'fraction',
   //    type: 'progressbar',
   //  },
    
   //  scrollbar: {
   //    el: '.swiper-scrollbar',
   //    draggable: true,
   //  },

   //  //перетаскивать на пк
      simulateTouch: true,
      grabCursore: true,

   //  // нажатие на слайд
   //  slideToClickedSlide: true,

   //  //управление клавиатурой
     keyboard:{
      enable: true,
       onlyinViewport: true,
     },

   //  mousewheel:{
   //    sensitivity: 1,
   //  },

   //  //автовысота
   //  autoHeight:true,

   //  //свободный режим
   //  freeMode:true,

   //  //автопрокрутка
      autoplay:{
        delay:2000,
   // //    stoponLastSlide:true,
   // //    //отключить после ручного переключения
        disableOnInteraction: false,
      },
   
   //  //эффекты переключения слайдов
   //  effect: 'slide',// 'fade', 'cube', 'coverflow', 'flip'  'creative',
     watchOverflow: true,
});