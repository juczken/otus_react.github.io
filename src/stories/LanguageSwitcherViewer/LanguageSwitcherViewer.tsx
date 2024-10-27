import React, { FC } from "react"
import { LanguageProvider } from "../../shared/providers/LanguageProvider/LanguageProvider"
import LanguageSwitcher from "../../shared/ui/LanguageSwitcher/LanguageSwitcher"
import ProductItem from "../../entities/Product/ui/ProductItem/ProductItem"

const LanguageSwitcherViewer:FC=()=>{
    
    return (
        <>
        <LanguageProvider>
            <div style={{height:'30px', width:'300px'}}>
            <LanguageSwitcher/>
            </div>
            <hr/>
            <ProductItem name="Lorem ipsum" price={19.95} desc="Lorem ipsum dolor sit amet consectetur adipiscing elit nostra." photo="https://via.placeholder.com/500.png?text=Lorem+ipsum"/>
        </LanguageProvider>
        </>
    )
}

export default LanguageSwitcherViewer