import './Footer.css';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

// attributes the developer of the web app
export default function Footer() {
    return (
        <footer>
            <small>Built by Kelvin Mwangi</small><br />
            <small>rocketmancodes02@gmail.com</small><br />
            <small>{new Date().getFullYear()}</small>
            <div className='socialIconsDiv'>
                <a href='https://github.com/2Kelvin' target='blank'>
                    <FaGithubSquare className='footerIcon' />
                </a>

                <a href='https://www.linkedin.com/in/kelvin-njihia' target='blank'>
                    <FaLinkedin className='footerIcon' />
                </a>
            </div>
        </footer>
    );
}