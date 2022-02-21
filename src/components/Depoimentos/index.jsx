import {Card} from './style'
import logoTwitter from '../../assets/icon-twiiter.svg'

export default function CardDepoimento({nome, depoimento}) {
    return <Card>
        <div>
            <span>{nome}</span>
            <img src={logoTwitter} alt="twitter" title='logo twitter' />
        </div>
        <p>{depoimento}</p>
    </Card>
}