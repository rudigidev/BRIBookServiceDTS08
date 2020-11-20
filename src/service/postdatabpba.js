
function PostDataBpba (type, DataUser) {
    let baseUrl = 'http://localhost:5000';
    let token = sessionStorage.getItem('token');

    return new Promise ( (resolve, reject) => {
        fetch(baseUrl+type,{
            method: 'POST',
            mode:'cors',
            credentials: 'same-origin',
            body: JSON.stringify(DataUser),
            headers:{
                'Content-Type':'application/json',
                "Authorization" : `${token}`
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

export default PostDataBpba;