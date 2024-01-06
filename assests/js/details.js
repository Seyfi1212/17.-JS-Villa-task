let id = new URLSearchParams(window.location.search).get("id")
let dorda = document.querySelector(".dorda")

const getAllType = function () {
    fetch(`http://localhost:3000/villa/${id}`)
        .then(res => res.json())
        .then(data => {
            dorda.innerHTML = `<div class="dorda"> <img src="${data.img}" alt="">
           <span>${data.date}</span>
           <h3>${data.info}</h3>
        </div>
    `;
        })
        .catch(error=>console.log("error",error))
        
}
getAllType()