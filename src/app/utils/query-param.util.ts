export const convertJsonToQueryParams = (options) => {
    return Object.keys(options)
        .map((key) => (options[key] ? key + '=' + options[key] : null))
        .filter((item) => item)
        .join('&');
};
