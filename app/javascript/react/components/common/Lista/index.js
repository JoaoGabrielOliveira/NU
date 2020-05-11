import React from 'react';
import './index.scss';

const Lista = (props) => 
{
    let d;

    switch(props.type)
    {
        case '1':
            d =
            <div className="container">
            <Card title='System of a Down' src='https://upload.wikimedia.org/wikipedia/tr/b/bc/System_of_a_down.jpg' />
            <Card title='Toxicity' src='https://static.fnac-static.com/multimedia/Images/PT/NR/c0/3b/01/80832/1540-6/tsp20160815190130/Toxicity.jpg' />
            <Card title='Steal this Album' src='https://http2.mlstatic.com/system-of-a-down-steal-this-album-cd-lacrado-D_NQ_NP_892233-MLB29454162412_022019-F.webpG' />
            <Card title='Hypnotize' src='https://images-na.ssl-images-amazon.com/images/I/815-Uw2-UhL._AC_SX679_.jpg' />
            <Card title='Mezmerize' src='https://1.bp.blogspot.com/-KvK3s7cwg0Q/V5vUDWEjc-I/AAAAAAAAZTo/wJDpdrLNmzw-WwuzbgEFTkJEpInsxZhcwCLcB/s1600/mezmerize+cover+soad.jpg' />
          </div>
        break;

        case '0':
            d =
              <div className="ListaMusicas">
              <div className='text'> Músicas favoritas:</div>
                <ul className="ListaComImagens">
                <Card li 
                title='Sugar' src='https://upload.wikimedia.org/wikipedia/tr/b/bc/System_of_a_down.jpg' />
                <Card li 
                title='Peephole' src='https://upload.wikimedia.org/wikipedia/tr/b/bc/System_of_a_down.jpg' />
                <Card li 
                title='P.L.U.C.K.' src='https://upload.wikimedia.org/wikipedia/tr/b/bc/System_of_a_down.jpg' />
                <Card li 
                title='Toxicity' src='https://static.fnac-static.com/multimedia/Images/PT/NR/c0/3b/01/80832/1540-6/tsp20160815190130/Toxicity.jpg' />
                </ul>
            </div>
        break;

        default:
            d =
            <div className="ListaMusicas">
            <div> Músicas favoritas:</div>
                <ul className="ListaComImagens">
                    {props.children}
                </ul>
            </div>
           break;
    }

    return (d);

}


const Card = (props) =>
{
  if(!props.li)
  {
    return(
      <div className="card">
        <img src={props.src} />
      <div className="card__head">{props.title}</div>
      </div>
      //Creditos para Daniel Subat
    );
  }

  else
  {
    return (
    <li>
      <img src={props.src} alt="" />
      <p>{props.title}</p>
    </li>
    );
  }
}


export default Lista;