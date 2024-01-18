import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "../stitches.config";

import "react-toastify/dist/ReactToastify.min.css";

const Wrapper = styled('div', {
    '& .Toastify__toast--success': {
        background: '#333',
        color: '#FFF',
    },
    '& .Toastify__toast--error': {
        background: 'rgb(185 28 28)',
        color: '#FFF',
    },
    '& .Toastify__toast': {
        fontSize: '0.875rem',
        minHeight: 'unset',
    },
    '& .Toastify__toast-container--top-center': {
        minWidth: '500px',
    }
});

const CloseButtonToast = ({ closeToast }) => (<button onClick={closeToast} className="font-semibold px-2" type="button">OK</button>)

class Toastify extends React.Component {
    notifyInfo = (message) => {
        document.body.style.pointerEvents = "";
        toast.success(message);
    }

    notifyError = (message) => {
        document.body.style.pointerEvents = "";
        toast.error(message);
    }

    render = () => (
        <Wrapper>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                draggable={false}
                closeOnClick={true}
                hideProgressBar={true}
                closeButton={<CloseButtonToast />}
            />
        </Wrapper>
    )
}

export default Toastify;
