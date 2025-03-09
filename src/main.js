import { searchImages } from "./js/pixabay-api";
import { render } from "./js/render-functions";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const loader = document.querySelector(".loader")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = formInput.value.trim();

     if (formData === "") {
        iziToast.warning({
            message: 'Please fill the field',
            position: 'topRight',
        });
        render([]);
        return
    }

    loader.hidden = false;
    
    searchImages(formData)
        .then(response => {
            const images = response.data.hits;
            if (images.length === 0) {
                render([]);
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            } else {
                render(images);
            }
        })

        .catch(() => {
            render([]);
            iziToast.error({
                message: 'Something went wrong :(',
                position: 'topRight',
            });
        })

        .finally(() => {
            formInput.value = "";
            loader.hidden = true;
        });
         
}) 

