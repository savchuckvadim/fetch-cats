//Получение ответа на запрос Fetch через асинхронную функцию и await перед fetch
let api = 'http://jsonplaceholder.typicode.com/photos'
let apicats = 'https://api.thecatapi.com/v1/images/search'


async function getResponse() {
    let response = await fetch(apicats);
    let json = await response.json();
    let content = json.splice(0, 10); // оставляем только 10 элементов из всего массива json
    let list = document.querySelector('.post');

     console.log(json);

    
    let key;
    for (key in content) {
        console.log(content[key].url);

        list.innerHTML += `
        <ul>
            <li>
                
                <img src="${content[key].url}" id="cats" alt="img${key}">
            </li>
       
        </ul>
    `
    }
    
}


getResponse();

setInterval(() => {
    document.location.reload();
}, 5000);

// let htmlCats = document.querySelector('#cats');

// document.addEventListener('click', ()=>{
//   document.location.reload();
// })





