import axios from 'axios';

export function searchImages(request) {
    return axios.get('https://pixabay.com/api/',
        {
            params: {
                key: "49242094-b67d71fe272541c15bafae494",
                q: request,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: "true",
            }
        });
}
