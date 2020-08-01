import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(values) {
    fetch(URL_VIDEOS, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
        .then(async (response) => {
            const resposta = await response.json();

        });
}

export default {
    create,
};