import { CHANGE_NAME_FIELD, CHANGE_EMAIL_FIELD, CHANGE_MESSAGE_FIELD, CHANGE_SUBJECT_FIELD } from './constants';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

export const form = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_NAME_FIELD:
            return Object.assign({}, state, { name: action.payload })
        case CHANGE_SUBJECT_FIELD:
            return Object.assign({}, state, { subject: action.payload })
        case CHANGE_EMAIL_FIELD:
            return Object.assign({}, state, { email: action.payload })
        case CHANGE_MESSAGE_FIELD:
            return Object.assign({}, state, { message: action.payload })
        default:
            return state
    }
}