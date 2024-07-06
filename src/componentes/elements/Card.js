import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img,title,tech, description,repo,site,port}){
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt='ERROR'/>
            </a>
               <section>
                    <h3>{title}</h3>
                    <p><strong>Técnologia: </strong>{tech}</p>
                    <p>{description}</p>
                    <a href={repo} target='_blank'>
                    <ButtonB text='Acesse o Repositorio'/>
                    </a>
                </section>
        </div>

    )
}
export default Card 