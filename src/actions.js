import { CHANGE_NAME_FIELD, CHANGE_EMAIL_FIELD, CHANGE_MESSAGE_FIELD, CHANGE_SUBJECT_FIELD } from './constants';

export const setNameField = (text) => ({
    type: CHANGE_NAME_FIELD,
    payload: text
});

export const setEmailField = (text) => ({
    type: CHANGE_EMAIL_FIELD,
    payload: text
});

export const setMessageField = (text) => ({
    type: CHANGE_MESSAGE_FIELD,
    payload: text
});

export const setSubjectField = (text) => ({
    type: CHANGE_SUBJECT_FIELD,
    payload: text
});