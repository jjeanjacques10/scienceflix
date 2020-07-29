import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Cadastro</h1>

            <form>
                <label>
                    Nome da Categoria:
                 <input type="text" />
                </label>
                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;