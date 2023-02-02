


const openModal = document.querySelector('.user__basket');
const modalBody = document.querySelector('.modal-wrapper');
const closeX = document.querySelector('.close-modal');

if(openModal){
   openModal.addEventListener('click',function(e){
      document.body.classList.add('lock');
      modalBody.classList.add('open');
   });
}
if(closeX,modalBody){
   closeX,modalBody.addEventListener('click',function(e){
      modalBody.classList.remove('open');
      document.body.classList.remove('lock');
   });
}

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



