import React from "react";
import '../../commons/styles/landing.css'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Landing = () =>{
    const {t} = useTranslation();
    const navigate = useNavigate()

    const handleNavigate = (path) =>{
        navigate(path)
    }
    return(
        <div className="landing">
            <p style={{fontSize:'3rem', fontWeight:'700'}}>{t('head')}</p>
            <h4>{t('subhead')}</h4>
            <button className="btn" onClick={()=>handleNavigate('/product')}>Shop Now</button>
        </div>
    )
}
export default Landing;