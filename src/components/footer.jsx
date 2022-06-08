import '../App.css';
import {Link as LinkRouter} from "react-router-dom"
  
function Footer(){
    return(
        <div className='footer-conteiner'>
            <div className='footer-logo-conteiner'>
            <div className='logo' ></div>
            <div>
                <LinkRouter to='/index'>
                <div className='home-icon'></div>
                </LinkRouter>
            </div>
            <div>
            <LinkRouter to='/Cities'>
                <div className='travel-icon'></div>
            </LinkRouter>
            </div>
            </div>
            <div className='content-footer'>
                <h4 className='social-text'>Social Networks</h4>
            <div className='social-conteiner'>
                <div className='logo-instagram'></div>
                <div className='logo-facebook'></div>
                <div className='logo-linkedin'></div>
            </div>
            </div>
            <div className='content-footer'>
                <h4 className='social-text'>Contact us:</h4>
                <div className='social-text'>
                    <p>☎ Number: 11-111-111</p>
                    <p>📧 Email: <a className='social-text' href="mailto: example@gmail.com">example@gmail.com</a></p>
                    <p>🗺 Direction: Cordoba - Argentina</p>
                </div>
            </div>
            
        </div>
    )
};

export default Footer;