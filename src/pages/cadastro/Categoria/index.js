import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '',
    }

    const { values, handleChange, clearForm } = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        categoriasRepository.getAll()
            .then((categoriasComVideos) => {
                setCategorias(categoriasComVideos);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Cadastro: {values.titulo}</h1>

            <form onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();

                categoriasRepository.create();

                setCategorias([
                    ...categorias,
                    resposta
                ]);

                clearForm();
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="titulo"
                    value={values.titulo}
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
                        <li key={`${categoria.titulo}${indice}`}>
                            {categoria.titulo}
                        </li>
                    )
                })}
            </ul>
            <br />
            <br />

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;