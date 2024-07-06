import { FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div id="Footer" className={styles.footer}>
            
            <ul>
                <li><a><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/fernandorgoncalves' target='_blanck'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/fernandorgoncalves' target='_blanck'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>fernandorgoncalves@hotmail.com</p>
            <p>Fernando Gonçalves © 2023</p>
        </div>
    )
}
export default Footer