document.addEventListener('DOMContentLoaded', function() {
    const pathArea = document.getElementById('urlpath');
    const paramsArea = document.getElementById('queryparams');
    
    function extractUrlComponents(url) {
        const parsedUrl = new URL(url);
        const urlPath = parsedUrl.pathname;
        const queryParams = parsedUrl.searchParams;
        const serializedQueryParams = Array.from(queryParams.entries())
            .map(pair => `${encodeURIComponent(pair[0])}=${encodeURIComponent(pair[1])}`)
            .join('&');
        return {
            path: urlPath,
            query: serializedQueryParams
        };
    }

    const currentUrl = window.location.href;
    const result = extractUrlComponents(currentUrl);
    pathArea.innerHTML = result.path;

    let queryHtml = '';
    result.query.split('&').forEach(param => {
        const [key, value] = param.split('=');
        queryHtml += `<br>${decodeURIComponent(key)}: ${decodeURIComponent(value)}`;
    });
    paramsArea.innerHTML = queryHtml;
});
