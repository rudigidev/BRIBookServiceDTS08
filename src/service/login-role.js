
function PostData (type, DataUser) {
    let baseUrl = 'http://3.136.86.135:5000';

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

export default PostData;