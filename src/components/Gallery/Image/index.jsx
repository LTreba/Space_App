import { styled } from "styled-components";
import ButtonImage from "./ButtonImage";

const Figure = styled.figure`
    width: 300px; // Largura ajustada para permitir várias colunas
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
        footer {
            display: flex;
            justify-content: space-between;
        }
    }
`;

const Image = ({ photo, expanded = false, onZoom, onToggleFav }) => {
    const favIcon = photo.fav ? "/icons/favorito-ativo.png" : "/icons/favorito.png"

    return (
        <Figure>
            <img src={photo.path} alt="Space image" />
            <figcaption>
                <h3>{photo.title}</h3>
                <footer>
                    <p>{photo.font}</p>
                    <div>
                        <ButtonImage onClick={() => {onToggleFav(photo)}} path={favIcon} />
                        {!expanded && (
                            <ButtonImage
                                aria-hidden={expanded}
                                path="/icons/expandir.png"
                                onClick={() => onZoom(photo)}
                            />
                        )}
                    </div>
                </footer>
            </figcaption>
        </Figure>
    );
};

export default Image;
