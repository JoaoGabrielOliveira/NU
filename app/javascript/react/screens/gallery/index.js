import React from 'react'
import Galeria, { Galeria_Item, Galeria_Imagens } from '../../components/galeria/index.js'
import Header from '../../components/common/Header'
import Container from 'react-bootstrap/Container'


import './index.css';

const GalleryScreen  = () => {
        return (
                <>
                <Header>
                        <h1>Gallery</h1> 
                </Header>
                <Galeria>                
                        <Galeria_Imagens>
                                <Galeria_Item id='1' title="Boo" src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4bc29492520453.5e4d4be7c884f.jpg' />
                                <Galeria_Item id='2' title='Korn' src='http://roadie-metal.com/wp-content/uploads/2019/06/Korn-Promo.jpg' />
                                <Galeria_Item id='3' title='Disturbed' src='https://cdn2-www.musicfeeds.com.au/assets/uploads/disturbed-2018-credit-Travis-Shinn-671x377.jpg' />
                                <Galeria_Item id='4' title='System of a Down' src='https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2016/10/system-of-a-down-banda-2016.jpg' />
                        </Galeria_Imagens>
                </Galeria>
                </>
        );
}

export default GalleryScreen;