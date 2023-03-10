const hide =document.querySelector('.hide')
const tabel = document.querySelector('.tabel') 
const hide2 =document.querySelector('.hide2')
const hide_revers =document.querySelector('.hide_revers')
const hidden =document.querySelector('.hidden')


hide.addEventListener('click', () => {
  async function getResponse(){
    let response = await fetch('/vielas.json');
    let PHONE_NUMBER = response = await response.json();
      
  let key;
     document.querySelector('.content').innerHTML=`<table class="tabel">
     <thead>
                      <tr class="row1">
                          <th scope="col">ID</th>
                          <th scope="col">Nosaukums</th>
                          <th scope="col">Tips</th>
                          <th scope="col">Apakštips</th>
                          <th scope="col">Skaitlis</th>
                          <th scope="col">mervienibas</th>
                          <th scope="col">daudzums</th>
                          <th scope="col">Komentāri</th> 
                       </tr>
                  </thead></table>`
  for(key in PHONE_NUMBER){
    console.log(PHONE_NUMBER[key])
    let row = document.createElement('tr')
    row.innerHTML=`<td>${PHONE_NUMBER[key].id}</td>
    <td scope="row">${PHONE_NUMBER[key].nosaukums}</td>
    <td scope="row">${PHONE_NUMBER[key].tips}</td>
    <td scope="row">${PHONE_NUMBER[key].apakstips}</td>
    <td scope="row">${PHONE_NUMBER[key].skaits}</td>
    <td scope="row">${PHONE_NUMBER[key].mervienibas}</td>
    <td scope="row">${PHONE_NUMBER[key].daudzums}</td>
    <td scope="row">${PHONE_NUMBER[key].komentari}</td>`
    document.querySelector('.tabel').appendChild(row)
   
  }
  }
  getResponse()


  tabel.classList.add('hidden')
  hidden.classList.remove('hidden')
  hidden.classList.add('active')

})



hide2.addEventListener('click', () => {
  async function getResponse1(){
    let response = await fetch('/inventars.json');
    let PHONE_NUMBER = response = await response.json();
      
  let key;
     document.querySelector('.content').innerHTML=`<table class="tabel">
     <thead>
                      <tr class="row1">
                          <th scope="col">ID</th>
                          <th scope="col">Nosaukums</th>
                          <th scope="col">Tips</th>
                          <th scope="col">Apakštips</th>
                          <th scope="col">Skaitlis</th>
                          <th scope="col">mervienibas</th>
                          <th scope="col">daudzums</th>
                          <th scope="col">Komentāri</th> 
                       </tr>
                  </thead></table>`
  for(key in PHONE_NUMBER){
    console.log(PHONE_NUMBER[key])
    let row = document.createElement('tr')
    row.innerHTML=`<td>${PHONE_NUMBER[key].id}</td>
    <td scope="row">${PHONE_NUMBER[key].nosaukums}</td>
    <td scope="row">${PHONE_NUMBER[key].tips}</td>
    <td scope="row">${PHONE_NUMBER[key].apakstips}</td>
    <td scope="row">${PHONE_NUMBER[key].skaits}</td>
    <td scope="row">${PHONE_NUMBER[key].mervienibas}</td>
    <td scope="row">${PHONE_NUMBER[key].daudzums}</td>
    <td scope="row">${PHONE_NUMBER[key].komentari}</td>`
    document.querySelector('.tabel').appendChild(row)
   
  }
  }
  getResponse1()

  tabel.classList.add('hidden')
  hidden.classList.remove('hidden')
  hidden.classList.add('active')
})

hide_revers.addEventListener('click', () => {
 
  tabel.classList.remove('hidden')
  tabel.classList.add('active')
  hidden.classList.remove('active')
  hidden.classList.add('hidden')
  
})

