export const getToken = () => {
    const _token = sessionStorage.getItem('token')?.split('BEARER ')[1];
    return `Bearer ${_token}`;
};
