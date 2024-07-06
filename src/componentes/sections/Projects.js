import styles from "./Projects.module.css"
import Card from "../elements/Card"
import port from '../../image/projects/portifolio.png'
import lpdc from '../../image/projects/descon.png'
import ButtonB from "../elements/ButtonB"

function Projects(){
    return(
        <div className={styles.projetos} id="Projects">
            <h1>Projetos</h1>
            <Card 
            img={port}
            title='Portifolio'
            tech='HTML, CSS, JS'
            description='Desenvolvimento do portifolio em React'
            repo='https://github.com/fernandorgoncalves/PortifolioDNC'
            site='https://portifoliofernando.vercel.app/'
            />
            <Card
            img={lpdc}
            title='Previsão do tempo'
            tech='HTML, CSS, JS'
            description='Desenvolvimento de API de localização e Previsão do tempo'
            repo='https://github.com/fernandorgoncalves/Desafio-2--ConsumodeAPI'
            site='https://desafio2base.netlify.app/'
            />
            <a className={styles.btn} href='https://github.com/fernandorgoncalves' target='_blank'>
            <ButtonB text='Acesse o repositorio Completo'/> 
            </a>  
        </div>
    )
}
export default Projects