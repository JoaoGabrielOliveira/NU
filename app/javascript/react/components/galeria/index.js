import React from 'react'


/*
    Titulo:string
    Pagination:bool

    
*/
const Galeria = (props) =>
{
    return(
        <div className='Galeria'>
            <Header>
                <h1>{props.title}</h1>
            </Header>
            {props.children}
        </div>
    );
}

const Header = (props) => 
{
        return(
            <header>
                {props.children}
            </header>
        );
}

const Galeria_Imagens = (props) => 
{
    <div className='Galeria-Imagens'>
        {props.children}
    </div>
}

const Galeria_Item = (props) =>
{
    <img src={props.src}/>
}

export default Galeria;