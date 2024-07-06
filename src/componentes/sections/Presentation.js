import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation(){
    return(
        <div className={styles.presentation} id='Presentation'>
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1> Olá! eu sou Fernando</h1>
            <h4>Sou um desenvolvedor Full Stack <br/>
                apaixonado por criar soluções tecnológicas inovadoras.<br/>
                Com 2 anos de experiência na área de desenvolvimento web,<br/>
                tenho uma ampla gama de habilidades que abrangem tanto o front-end<br/> 
                quanto o back-end.
            </h4>
            <ButtonA link='https://github.com/fernandorgoncalves'text="Conecte-se comigo!"/>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
export default Presentation