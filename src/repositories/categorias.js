import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
    return fetch(URL_CATEGORIAS)
        .then(async (response) => {
            if (response.ok) {
                const resposta = await response.json();
                return resposta;
            }

            throw new Error('Não foi possível pegar os dados: (');
        });
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
        .then(async (response) => {
            if (response.ok) {
                const resposta = await response.json();
                return resposta;
            }

            throw new Error('Não foi possível pegar os dados: (');
        });
}

function create(values) {
    fetch(URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
        .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }

            throw new Error('Não foi possível cadastrar os dados :(');
        });
}

export default {
    getAll,
    getAllWithVideos,
    create,
};