import styles from "./Projects.module.css"
import Card from "../elements/Card"
import lpdc from '../../image/projects/ipdnc.svg'


function Projects(){
    return(
        <div className={styles.projetos} id="Projects">
            <h1>Projetos</h1>
            <Card 
            img={lpdc}
            title='LP-DNC'
            tech='HTML, CSS, JS'
            description='Desenvolvimento de uma Landing Page para lançamento de formação em técnologia'
            repo='https://github.com/fernandorgoncalves/Desafio-1-Landing-Page.git'
            site='https://desafiobasefernando.netlify.app/'
            />
            <Card
            img={lpdc}
            title='LP-DNC'
            tech='HTML, CSS, JS'
            description='Desenvolvimento de uma Landing Page para lançamento de formação em técnologia'
            repo='https://github.com/fernandorgoncalves/Desafio-1-Landing-Page.git'
            site='https://desafiobasefernando.netlify.app/'
            
            />
        </div>
    )
}
export default Projects