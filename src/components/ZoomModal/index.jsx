import styled from "styled-components"
import Image from "../Gallery/Image"

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const StyledDialog = styled.dialog`
    position: absolute;
    top: 94px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            border: solid;
        }
    }
`

const CloseButton = styled.button`
    position: relative;
    top: 20px;
    right: 20px;
    background-color: transparent;
    color: #fff;
    border: 2px solid #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const ZoomModal = ({photo, onClose, onToggleFav}) => {
    return(
        <>
            {photo && <>
            <Overlay>
                <StyledDialog open={!!photo}>
                    <Image photo={photo} expanded={true} onToggleFav={onToggleFav}></Image>
                    <form method="dialog">
                        <CloseButton onClick={onClose}>Close</CloseButton>
                    </form>
                </StyledDialog>
            </Overlay> </>}
        </>
    )
}

export default ZoomModal