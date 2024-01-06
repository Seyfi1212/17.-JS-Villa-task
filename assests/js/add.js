let id = new URLSearchParams(window.location.search).get("id")
const name = document.querySelector("#name")
const image = document.querySelector("#image")
const category = document.querySelector("#category")
const image2 = document.querySelector("img")
const categoryForm = document.querySelector(".category-form")

const getAllType = function () {
    fetch(`http://localhost:3000/villa/${id}`)
        .then(res => res.json())
        .then(data => {
            name.value = data.name
            image2.src = data.img
            category.value = data.info
        })

}
getAllType()

image.addEventListener('input', (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            image2.src = reader.result;
        }
    }
})

categoryForm.addEventListener("submit", (event) => {
    event.preventDefault()
    axios.put(`http://localhost:3000/villa/${id}`, {
        name: name.value,
        img: image2.src,
        info: category.value
    })
        .then(res => {
            window.location = "../index.html"
        })
})