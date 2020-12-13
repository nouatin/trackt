const fetcher = (url, method, callback)=>{
    fetch(url, { 
        method,
        mode: 'cors',
        cache: 'default' }
    ).then((response) => {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then((json) => {            
                callback(json);
            });
        } else {
            callback('error');
        }
    });
}

export const getAddress = (adr)=> `${adr.street} ${adr.city}, ${adr.country} ${adr.zipCode} ${adr.state}`;
export const getName = (main)=> `${main.firstName} ${main.lastName}`;

export default fetcher;