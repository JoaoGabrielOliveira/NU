import React from 'react'
import Header from '../common/Header'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

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
            <a href='/artist/1' >
            <div className='item'>
                
                <div className='itemImage'>
                    <img src={this.props.src} />
                </div>

                <div className='itemContent'>
                    <h2>{this.props.title}</h2>
                    <p> {this.props.text}</p>
                </div>
                
            </div>
            </a>
        );
    }  
}