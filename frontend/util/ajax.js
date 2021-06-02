async function ajax(url,options = []){
    let config = await loadConfig();
    return fetch(config.host + url,options);
}