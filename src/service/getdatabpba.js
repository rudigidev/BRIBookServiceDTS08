
function GetDataBpba (type) {
    let baseUrl = 'http://3.136.86.135:5000';

    return new Promise ( (resolve, reject) => {
        fetch(baseUrl+type,{
            method: 'GET',
            mode:'cors',
            credentials: 'same-origin',
            headers:{
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

export default GetDataBpba;