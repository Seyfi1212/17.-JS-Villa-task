const ikia = document.querySelector('.dorda')
const getAllType = function () {
    fetch(`http://localhost:3000/villa`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                ikia.innerHTML += ` <div> <img src="${element.img}" alt="">
                <span>${element.date}</span>
                <h3>${element.info}</h3>
                <button onclick="deleteCard(${element.id})">DELETE</button>
                <button>Update</button>
                <a href="details1.html?id=${element.id}"<button>Details</button></a>
            </div>
                `
            });
        })
        .catch(error => console.log("error", error))
}
getAllType()

function deleteCard(id) {
    console.log("salam");
        axios.delete(`http://localhost:3000/villa/${id}`)
        window.location.reload()
    }