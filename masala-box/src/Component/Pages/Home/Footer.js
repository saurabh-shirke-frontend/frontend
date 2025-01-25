import '../../commons/styles/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
    return (
        <div className="footer">
            <InstagramIcon className='footer-item'/>
            <WhatsAppIcon className='footer-item'/>
            <FacebookIcon className='footer-item'/>
            <XIcon className='footer-item'/>
</div>
    )
}
export default Footer