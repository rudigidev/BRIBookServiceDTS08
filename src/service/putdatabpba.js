
function PutDataBpba (type, dataUser) {
    let baseUrl = 'http://3.136.86.135:5000';

    return new Promise ( (resolve, reject) => {
        fetch(baseUrl+type,{
            method: 'PUT',
            mode:'cors',
            credentials: 'same-origin',
            body: JSON.stringify(dataUser),
            headers:{
                'Content-Type':'application/json',
                "Authorization" : `Bearer ${sessionStorage.getItem('user')}`
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

export default PutDataBpba;