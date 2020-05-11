import React from 'react';
import './index.scss';

const Lista = (props) => 
{
    let d;
    if(props.lista)
    {
        //Musicas Favoritas: font-size: 25px; margin-bottom: 2%; font-weight: 400;
        d =
        <div className="ListaMusicas">
        <div> Músicas favoritas:</div>
            <ul className="ListaComImagens">
        <li>
            <img src="https://static.fnac-static.com/multimedia/Images/PT/NR/c0/3b/01/80832/1540-6/tsp20160815190130/Toxicity.jpg" alt="" />
            <p>Toxicity</p>
        </li>

        <li>
            <img src="https://static.fnac-static.com/multimedia/Images/PT/NR/c0/3b/01/80832/1540-6/tsp20160815190130/Toxicity.jpg" alt="" />
            <p>B.Y.O.B</p>
        </li>
        
        <li>
            <img src="https://static.fnac-static.com/multimedia/Images/PT/NR/c0/3b/01/80832/1540-6/tsp20160815190130/Toxicity.jpg" alt="" />
            <p>Lost in Hollywood</p>
        </li>

        <li>
            <img src="https://static.fnac-static.com/multimedia/Images/PT/NR/c0/3b/01/80832/1540-6/tsp20160815190130/Toxicity.jpg" alt="" />
            <p>Science</p>
        </li>
    </ul>
    </div>
    }

    else
    {
        d =
        <div className="ListaMusicas">
        <div> Músicas favoritas:</div>
            <ul className="ListaComImagens">
                {props.children}
            </ul>
        </div>
    }
return (d);

}

export default Lista;