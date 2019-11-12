import axios from 'axios';
const baseUrl = 'https://localhost:44392/api';

const getAllTrainers = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/trianers`)
    .then(result => resolve(result))
    .catch(err => reject(err));
});

export default getAllTrainers;