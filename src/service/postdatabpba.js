
function PostDataBpba (type, DataUser) {
    let baseUrl = 'http://3.136.86.135:5000';
    let token = sessionStorage.getItem('user');

    return new Promise ( (resolve, reject) => {
        fetch(baseUrl+type,{
            method: 'POST',
            mode:'cors',
            credentials: 'same-origin',
            body: JSON.stringify(DataUser),
            headers:{
                'Content-Type':'application/json',
                "Authorization" : `Bearer ${token}`
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