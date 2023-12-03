import tags from './tags.json'
import styled from 'styled-components'  


const TagsContainer = styled.div`
    display: flex;
    gap: 64px;
    margin-top: 56px;

`
const TagEstilizada = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    line-height: 49px;
`

const DivButton = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const ButtonEstilizado = styled.button`
    display: flex;
    height: 49px;
    border-radius: 10px;
    text-align: center;
    font-size:24px;
    color:white;
    transition: background-color 0.3s ease;
    cursor: pointer;
    background: rgba(217, 217, 217, 0.3);
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    padding: 10px;
    position: relative;
    top: 50%;
    transform: translateY(-50%); 
`

const Tags = () => {
    return (<>
        <TagsContainer>
            <TagEstilizada>Busque por tags:</TagEstilizada>
            <DivButton>
                {tags.map(tag => ( 
                    <ButtonEstilizado key={tag.id}>{tag.titulo}</ButtonEstilizado>
                ))}
            </DivButton>
        </TagsContainer>
    </>)
}



export default Tags