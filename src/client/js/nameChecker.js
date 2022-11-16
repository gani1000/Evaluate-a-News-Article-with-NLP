
function Check() {
    const urlChecks = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if(urlChecks.test(url)){
        return true;
    } else {
        return false;
    }
}

export { Check }
