/**
 * Created by adminHOC on 22/02/2019.
 */

export const API = "http://localhost:8000/";
export const uriContact = "contact/mail";
export const apiParams = (props) => ({
    method: 'post',
    url:  API+uriContact,
    data: JSON.stringify(props)
});