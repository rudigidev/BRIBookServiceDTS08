 
function LoginRole (type, DataUser) {
    let baseUrl = 'http://localhost:5000';

    return new Promise ( (resolve, reject) => {
        fetch(baseUrl+type,{
            method: 'POST',
            mode:'cors',
            credentials: 'same-origin',
            body: JSON.stringify(DataUser),
            headers:{
                'Content-Type':'application/json'
            }
        })
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