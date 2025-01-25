import HomeMade from '../../Images/homemade.png'
import Natural from '../../Images/natural.png'
import Preserve from '../../Images/preserve.png'
const ProductSection = () =>{
    return (
        <div className="product-section">
            <img src={HomeMade} alt="" height={'100%'} style={{alignSelf:'initial',marginTop:'5%', marginRight:'5%',marginLeft:'-5%'}} />
            <img src={Preserve} alt="" height={'300rem'} style={{alignSelf:'initial',marginRight:'10%'}}/>
            <img src={Natural} alt="" height={'300rem'} style={{alignSelf:'initial'}}/>
        </div>
       
    )

}
export default ProductSection;