function getUrlParam(param) {
    let url_current = window.location.href;
    let url = new URL(url_current);
    let id = url.searchParams.get(param);
    return id;
}


