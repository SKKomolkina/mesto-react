import Api from './utils'

export default api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
    headers: {
        authorization: 'e0ccb70a-8300-4fff-b1a9-1044a866d1c7',
        'Content-Type': 'application/json'
    }
});