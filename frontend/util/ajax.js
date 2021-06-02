async function get(url) {
    let config = await loadConfig();
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
                resolve(request.responseText);
            } else if (request.readyState == XMLHttpRequest.DONE && request.status != 200) {
                reject(request.responseText);
            }
        }

        request.open("GET",config.host + url);

        request.send();
    });
}