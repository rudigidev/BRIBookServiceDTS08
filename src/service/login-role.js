import userData from '../pages/user.json';

// 
function LoginRole (DataUser) {
    let BaseUrl = userData;

    return new Promise ( (resolve, reject) => {
        fetch(BaseUrl)
        .then((res) => res.json())
        .then((resJson) => {
            resolve(resJson);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

export default LoginRole;