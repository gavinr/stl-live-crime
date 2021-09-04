const Geocode = async (address) => {

    // https://fetch.spec.whatwg.org/#fetch-api
    var url = new URL("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find"),
        params = {
            'text': address,
            'f': 'json'
        };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url.toString());

    const json = await response.json();

    return json;
}

export default Geocode;