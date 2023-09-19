const images = [
    { 'id': '1', 'url':'./img/1910.png'},
    { 'id': '2', 'url':'./img/MicrosoftTeams-image.png'},
    { 'id': '3', 'url':'./img/TODOP.png'},
    { 'id': '4', 'url':'./img/gavi.png'},
 ]
 
  const container1 = document.querySelector('.container-items');
 
     for (const image of images) {
 
         container1.innerHTML+= `
         <div class='item'>
             <img src= '${image.url}'
         </div>
 `
     }
 
     let items = document.querySelectorAll('.item');
 
     document.querySelector('#next').addEventListener('click',()=>{
         container1.appendChild(items[0]);
         items=document.querySelectorAll('.item');
     });
 
     document.querySelector('#previous').addEventListener('click',()=>{
       const lastItem = items[items.length - 1];
       container1.insertBefore( lastItem, items [0] );
       items = document.querySelectorAll('.item');
     });