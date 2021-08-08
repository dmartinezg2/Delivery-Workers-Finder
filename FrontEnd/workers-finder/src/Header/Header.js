import Logo from '../logo.svg'
import '../index.css';

const Header = () => {
    return ( 
        <div className="header" id="header">
            <div className="topbar" id="topbar" style={{backgroundColor:"#191e38"}}>
                <div className="container">
                    <div className="column one" style={{padding:"20px", margin:""}} >
                        <div className="logo" style={{textAlign:'right'}} >
                            <a data-height="60" data-padding = "15" >
                                <img src={Logo} alt="Logo de alfred" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
     );
}
 
export default Header;