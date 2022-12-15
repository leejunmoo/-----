// app.js

fetch('http://localhost:3001/api/all')
  .then(function(응답) {
    return 응답.json()
  })
  .then(function(data){
    console.log(data)
    const pokemon_list = document.getElementById('pokemon-list');
   
   
    for(let i = 0; i<4; i++) {
         // div 생성
        const itemEl = document.createElement('div');
        // div 태그에 .item 클래스 추가 
        itemEl.classList.add('item');

        itemEl.innerHTML = `
        <img src="${data[i].imgUrl}" alt="${data[i].name}">
        <div class="info">
          <h3>이름: ${data[i].name}</h3>
          <p>타입: ${data[i].type}</p>
        </div>
        `
        // pokemon-list 에 item을 추가
        pokemon_list.appendChild(itemEl)
        console.log(itemEl)
    }

    

    // 숙제 : 전체 포켓몬을 표시하기
  })


