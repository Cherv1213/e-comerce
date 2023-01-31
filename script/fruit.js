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