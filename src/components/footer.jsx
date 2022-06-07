import '../App.css';
  
function Footer(){
    return(
        <div className='footer-conteiner'>
            <div className='footer-logo-conteiner'>
            <div className='logo' ></div>
            <div>
                <div className='home-icon'></div>
            </div>
            <div>
                <div className='travel-icon'></div>
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
                    <p>📧 Email: example@gmail.com</p>
                    <p>🗺 Direction: Cordoba - Argentina</p>
                </div>
            </div>
            
        </div>
    )
};

export default Footer;