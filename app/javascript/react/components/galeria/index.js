import React from 'react'
import Header from '../common/Header'

/*
    title:string
    menu:bool
    menu_itens:json
*/

export default class Galeria extends React.Component 
{
    render()
    {
        return (
            <div id='Galeria'>
            <Header>
                <h1>{this.props.title}</h1> 
            </Header>
                {this.props.children}
            </div>
        );
    }
}
export class Galeria_Imagens extends React.Component 
{
    constructor(props)
    {
        super();        
    }

    render()
    {
        return(
            <div className='galeria-collection'>
                {this.props.children}
            </div>
        );
    }  
}
export class Galeria_Item extends React.Component 
{
    constructor(props)
    {
        super();        
    }

    render()
    {
        return(
            <div className='item'>
                <p>{this.props.title}</p>
                <img src={this.props.src} />
            </div>
        );
    }  
}