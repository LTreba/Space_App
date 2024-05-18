import TitleStyled from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Image from "./Image";
import { styled } from "styled-components";

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const FluidSection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: flex-start;
`;

const Gallery = ({ photos = [], onPhotoSelected, onToggleFav, setTag }) => {
    return (
        <>
            <Tags setTag={setTag}/>
            <GalleryContainer>
                <FluidSection>
                    <TitleStyled>Navigate through the Gallery</TitleStyled>
                    <ImagesContainer>
                        {photos.map((photo) => (
                            <Image key={photo.id} photo={photo} onZoom={onPhotoSelected} onToggleFav={onToggleFav}/>
                        ))}
                    </ImagesContainer>
                </FluidSection>
                <Popular onZoom={onPhotoSelected} />
            </GalleryContainer>
        </>
    );
};

export default Gallery;
