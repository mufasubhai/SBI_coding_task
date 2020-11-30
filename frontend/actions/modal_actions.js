export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal) => {
    console.log('modal_open')
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const closeModal = () => {
    console.log('close_modal')
    return {
        type: CLOSE_MODAL
    };
};