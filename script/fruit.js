const link = document.querySelector('.link-fruit');

link.addEventListener('click', function(event){
   event.preventDefault();
});

// const buttons = document.querySelectorAll('.button');

// buttons.forEach(function(item){
//    item.addEventListener('click', function(e){
//       buttons.forEach(el=>{
//          el.classList.remove('green');
//       });
//       item.classList.add('green');
//    });
   
// });
//    document.querySelector('.').click();

const openModal = document.querySelector('.user__basket');//кнопка открытия модалки
const modalBody = document.querySelector('.bkg-modal');//модалка
const closeX = document.querySelector('.close-modal'); //кнопка забкрытия внутри модалки
const basket = document.querySelector('.basket-modal');
 openClose();

    function openClose(){

       
          openModal.addEventListener('click',function(e){
             modalBody.classList.add('open');
          });

          closeX.addEventListener('click',function(e){
              modalBody.classList.remove('open');
          });
          
          modalBody.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(basket);
           if(!click){
            modalBody.classList.remove('open');
           }
          })
    };

/*-------------------------------------------------------------------------------------------------*/
const tabLink = document.querySelectorAll('.tab-link');
const bodyContent = document.querySelectorAll('.body-content');

tabLink.forEach(function(item){
   item.addEventListener("click", function(){
      let frutBtn = item;
      let frutId = frutBtn.getAttribute("data-tabs");
      let frutTab = document.querySelector(frutId);

      if ( ! frutBtn.classList.contains('active')){
         tabLink.forEach(function(item){
            item.classList.remove('active');
            item.classList.remove('green');
         });
   
         bodyContent.forEach(function(item){
            item.classList.remove('active');
         });
         frutBtn.classList.add('green');
         frutTab.classList.add('active');
         frutBtn.classList.add('active');
      };
      
   });
});
   
 document.querySelector('.tab-link').click();


const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>{
   item.addEventListener('click', () =>{
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;
   })
});