import React from 'react';
import {KolaciContent, KolaciItems, KolaciH1, KolaciP, KolaciContainer} from '../components/KolaciElements';

const Product = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            
            <KolaciContainer>
            <KolaciContent>
                <KolaciItems>
                    <KolaciH1>Recept za domaći keks</KolaciH1>
                    <KolaciP>
                    300g brašna
                    150g šećra
                    ½ kesice praška za pecivo
                    2 ili 3 jaja
                    150g putera
                    Prstohvat soli
                    Kesica vanilinog šećera
                    U činiju sa brašnom dodajte iseckani ili 
                    narendani puter, prašak za pecivo, šećer, 
                    vanilin šećer i malo soli. Smesi postepeno dodajte jaja i 
                    umesti glatko testo. Na brašnjavoj površini razvucite testo do 
                    željene debljine i modlama oblikujte keks. Najčešće se koristi okrugla modla, 
                    ali se uvek možete igrati i odlučiti za različite oblike i veličine. 
                            
                    </KolaciP>
                </KolaciItems>
            </KolaciContent>
            </KolaciContainer>
            
        </div>
    )
}

export default Product
