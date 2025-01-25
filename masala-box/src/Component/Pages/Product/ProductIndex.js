import { useEffect, useState } from 'react'
import '../../commons/styles/product.css'
import Loader from '../../commons/Loader'

const ProductIndex = () => {
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        setIsloading(true)
        setTimeout(() => {
            setIsloading(false)
        }, [2000])
    }, [])


    return (
        <div className='product'>
            {
                isLoading ? (
                    <Loader/>
                ):(
                    <div>Product Details Here</div>
                )
            }
        </div>
    )}
export default ProductIndex