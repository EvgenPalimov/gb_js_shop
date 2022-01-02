export function send(onError, onSuccess, url, method = 'GET', data = '', headers = {}, timeout = 60000) {

    let xhr;

    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if(window.ActiveXObject){
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    for([key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
    }

    xhr.timeout = timeout;

    xhr.ontimeout = onError;

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if(xhr.status < 400) {
                onSuccess(xhr.responseText)
            } else if(xhr.status >= 400) {
                onError(xhr.status)
            }
        }
    }

    xhr.open(method, url, true);

    xhr.send(data);
}

