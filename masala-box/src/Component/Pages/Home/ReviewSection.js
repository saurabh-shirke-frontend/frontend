import '../../commons/styles/review.css'
import Cat1 from '../../Images/cat1.jpg'
import Cat2 from '../../Images/cat2.jpg'
import Cat3 from '../../Images/cat3.jpeg'
const ReviewSection = () => {
    return (
        <>
            <div className="review">
                <div>
                    <h1><span>------- Shop by our variety of Spices offered -------</span></h1>
                </div>
            </div>
            <div className="category">
  <div className="box" style={{ backgroundImage: `url(${Cat1})` }}>
    <span>Whole Spices</span>
  </div>
  <div className="box" style={{ backgroundImage: `url(${Cat2})` }}>
    <span>Ground Spices</span>
  </div>
  <div className="box" style={{ backgroundImage: `url(${Cat3})` }}>
    <span>Blends</span>
  </div>
  <div className="box show-more" style={{ backgroundImage: "url('/path-to-image4.jpg')" }}>
    <span>Show More</span>
  </div>
</div>
        </>
    )
}
export default ReviewSection