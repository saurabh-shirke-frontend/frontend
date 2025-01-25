import React, { useEffect, useState } from "react";
import Loader from "../../commons/Loader";
import Landing from "./Landing";
import ProductSection from "./ProductSection";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";
function Index(){
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },[4000])
    },[])
    return(
        <div className="home-page">
            {
                isLoading ? (
                    <Loader/>
                ):(
                    <>
                    <Landing/>
                    <ProductSection/>
                    <ReviewSection/>
                    <Footer/>
                    </>
                )
            }
        </div>
    )
}
export default Index