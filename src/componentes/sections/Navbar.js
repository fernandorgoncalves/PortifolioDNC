import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa";

function Navbar() {
    return(
        <div className={styles.navbar}>
            <ul>
                <li>Aprensetação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
            <ul>
                <li><FaInstagram size={30}/></li>
                <li><FaGithub size={30}/></li>
                <li><FaLinkedin size={30}/></li>
            </ul>
        </div>
    )
}
export default Navbar