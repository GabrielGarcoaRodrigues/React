import { styled } from 'styled-components'

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    width:212px;
`
const BarraLateral = () => {
    return(
        <>
            <aside>
                <nav>
                    <ListaEstilizada>
                        <li>
                            <a href="/home">Início</a>
                        </li>
                        <li>
                            <a href="/vistas">Mais Vistas</a>
                        </li>
                        <li>
                            <a href="/curtidas">Mais Curtidas</a>
                        </li>
                        <li>
                            <a href="/novas">Novas</a>
                        </li>
                        <li>
                            <a href="/surpreenda">Surpreenda-me</a>     
                        </li>   
                    </ListaEstilizada>
                </nav>
            </aside>
        </>
    )
}


export default BarraLateral