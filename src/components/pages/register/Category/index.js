import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField';
import PageDefault from '../../../PageDefault';

function CategoryRegister() {
    // Aqui fará a inicialização dos valores
    const initialValues = {
        name: '',
        description: '',
        color: '#ffffff',
    }
    
    // Este estado guarda a categoria
    const [categories, setCategories] = useState([]);

    // Este estado guarda o texto digitado
    const [values, setValues] = useState(initialValues);

    // Criando uma função para definir o primeiro valor
    function setValue(key, value) {
        //chave: qualquer valor aqui
        setValues({
            ...values,
            [key]: value, //nome: 'valor'
        })        
    }
    
    // Esta faz faz com o nome e o valor sejam recebidos dinamicamente
    // Generico o suficiente para ser utilizado em todos os campos
    function handleChange(eventsInfo){
        // const { getAttribute, value } = eventsInfo.target;
        setValue(
            eventsInfo.target.getAttribute('name'),
            eventsInfo.target.value
        );
    }

    return(
        <PageDefault>
            <h1>
               Category Registration: {values.name}
            </h1>

            {/*Criando formulário da categoria*/}
            {/* O três pontinho significa que vai
            pegar tudo que tiver feito e não joga fora ou sobrescreve*/}
            <form onSubmit={function handleSubmit(eventsInfo){
                eventsInfo.preventDefault();
                setCategories([            
                    ...categories, 
                    values
                ]); 
                setValues(initialValues)              
            }}>

                <FormField 
                    label="Category Name: "
                    value={values.name}
                    name="name"
                    type="text"
                    onChange={handleChange}
                />

                <FormField
                    
                    label="Description: "
                    type="textarea"
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                /> 

                {/* <div>
                    <label htmlFor="descriptionArea">
                    {' '} Description: {' '}
                        <textarea type="text"
                        id="descriptionArea"
                        value={values.description} 
                        name="description"
                        onChange={handleChange}
                        />
                    </label>
                </div> */}
                
                <FormField
                    label="Color: "
                    type="color"
                    value={values.description}
                    name="color"
                    onChange={handleChange}
                />


                {/* <div>
                    <label htmlFor="colorChange">
                    {' '} Color: {' '}
                        <input type="color"
                        id="colorChange"
                        value={values.color} 
                        name="color"
                        onChange={handleChange}
                        />
                    </label>
                </div> */}
                
                <div>
                    <button>
                        Register
                    </button>
                </div>
            </form>
            
            <div>
                <ul>
                    {categories.map((category, index) =>{
                        return(
                            <li key={`${category}${index}`}>
                                {category.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
            
            <div>
                <Link to="/">
                    Go back to home!
                </Link>
            </div>
           
        </PageDefault>
    );
}

export default CategoryRegister;