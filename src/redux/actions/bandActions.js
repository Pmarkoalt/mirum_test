// Action Types

export const UPDATE_HEADER = "UPDATE_HEADER";
export const TOGGLE_BAND_STYLE = "TOGGLE_BAND_STYLE";
export const PAGE_SELECT = 'PAGE_SELECT'

// Action Creators

export function updateHeader(header) {
    return {type: UPDATE_HEADER, header}
}

export function toggleBandStyle(isBandHeader) {
    return {type: TOGGLE_BAND_STYLE, isBandHeader}
}

export function pageSelect(page) {
    return {type: PAGE_SELECT, page}
}   