import { styled } from "styled-components";
import Title from "../../Title";
import Image from "../Image";
import photos from './popular-photos.json';

const PhotoColumn = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-left: 200px;
`;

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 50%;
    margin-top: 16px;
    align-items: center;
`;

const Popular = ({ onZoom }) => {
    return (
        <section>
            <PhotoColumn>
                <Title $align='center'>Popular</Title>
                {photos.map(photo => (
                    <Image key={photo.id} photo={photo} onZoom={onZoom} />
                ))}
                <Button>See more</Button>
            </PhotoColumn>
        </section>
    );
};

export default Popular;
