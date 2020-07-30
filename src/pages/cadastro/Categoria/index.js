import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor'
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    useEffect(() => {
        console.log('alo alo w brasil');
        const URL = 'http://localhost:8080/categorias';
        fetch(URL)
        .then(async (response) => {
            const resposta = await response.json();
            setCategorias(
                [
                    ...resposta,
                ]
            );
        });

        /*  setTimeout(() => {
             setCategorias([
                 ...categorias,
                 {
                     "id": 1,
                     "nome": "Ciência",
                     "descricao": "Aprenda sobre Ciência",
                     "cor": "#26FFF9"
                 },
                 {
                     "id": 2,
                     "nome": "Biologia",
                     "descricao": "Aprenda sobre Ciência",
                     "cor": "#26FFF9"
                 },
             ]);
         }, 4 * 1000); */
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Cadastro: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();

                setTimeout(() => {
                    setCategorias([
                        ...categorias,
                        values
                    ]);
                }, 4 * 1000);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />


                <Button>
                    Cadastrar
                </Button>

            </form>



            <ul>
                {categorias.length === 0 && (
                    <div>
                        Loading...
                    </div>
                )}
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.nome}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;