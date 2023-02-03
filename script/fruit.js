const link = document.querySelector('.link-fruit');

link.addEventListener('click', function(event){
   event.preventDefault();
});

const openModal = document.querySelector('.user__basket');//кнопка открытия модалки
const modalBody = document.querySelector('.bkg-modal');//модалка
const closeX = document.querySelector('.close-modal'); //кнопка забкрытия внутри модалки

 openClose();

    function openClose(e){

       
          openModal.addEventListener('click',function(e){
             modalBody.classList.add('open');
          });

          closeX.addEventListener('click',function(e){
              modalBody.classList.remove('open');
          });
       
         
    };

    $(document).click(function (e) {
      if ($(e.target).is('.bkg-modal')) {
         modalBody.classList.remove('open');
      }
  });

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
         });
   
         bodyContent.forEach(function(item){
            item.classList.remove('active');
         });
   
         frutTab.classList.add('active');
         frutBtn.classList.add('active');
      };
      
   });
});
   
 document.querySelector('.tab-link').click();






