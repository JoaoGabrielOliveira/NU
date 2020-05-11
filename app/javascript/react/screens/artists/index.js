import React from 'react'
import Header from '../../components/common/Header'
import Lista from '../../components/common/Lista';
import './index.scss'

const ArtistScreen = () => {
    return(
        <div id='Artist'>
            <div id='content'>
                <div id="Informacoes">
                    <div className="Titulo">System of a Down</div>
                    <div className="subInformações">1998 - 5 albuns</div>
                    <div className="Estrelas">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
                    <div className="Descrição">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin porttitor lacus at rhoncus. Nam vitae dolor eu justo ultricies ultricies nec eu lectus. Etiam aliquam turpis non dignissim tempus.
                    </div>

                <Lista title="Favorite songs:" type='0' lista>
                </Lista>
                    
                </div>

                <Header>
                    <h2>Albuns</h2>
                </Header>

                <Lista type='1'>
                </Lista>
            </div>
        </div>
    );
}

export default ArtistScreen;