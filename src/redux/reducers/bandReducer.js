import {
    UPDATE_HEADER,
    TOGGLE_BAND_STYLE,
    PAGE_SELECT
} from '../actions/bandActions';

const initialState = {
    header: "SAD 80'S BANDS",
    page: 1
}

function bandReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_HEADER:
            return Object.assign({}, state, {
                header: action.header
            });
        case TOGGLE_BAND_STYLE:
            return Object.assign({}, state, {
                isBandView: action.isBandHeader
            });
        case PAGE_SELECT:
            return Object.assign({}, state, {
                page: action.page
            });
        default:
            return state
    }
}

export default bandReducer;