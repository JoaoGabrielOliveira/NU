import React from 'react'
import Galeria from '../../components/commun/galeria'

import './index.css';

const GalleryScreen  = () => {
        return (
                <Galeria title="Galeria">                
                        <Galeria_Imagens>
                                <Galeria_Item src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4bc29492520453.5e4d4be7c884f.jpg' />
                                <Galeria_Item src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4bc29492520453.5e4d4be7c884f.jpg' />
                                <Galeria_Item src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4bc29492520453.5e4d4be7c884f.jpg' />
                        </Galeria_Imagens>
                </Galeria>
        );
}
 
export default GalleryScreen;