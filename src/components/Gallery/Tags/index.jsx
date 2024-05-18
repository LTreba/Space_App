import tags from "./tags.json"
import {styled} from "styled-components"

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
}`

const TagContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
`

const TagsId = styled.div`
    display: flex;
    flex-grow: 1;
    gap: 20px;
    margin-left: 60px;
`

const Tags = ({setTag}) => {

    return(
        <TagContainer>
            <TagTitle>Search for tags:</TagTitle>
            <TagsId>
                {tags.map(tag=><Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.title}</Tag>)}
            </TagsId>
        </TagContainer>
    )
}

export default Tags;