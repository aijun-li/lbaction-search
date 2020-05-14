// LaunchBar Action Script

function runWithString(string) {
    if (string == '') {
        return [];
    }

    let response = HTTP.get(`https://api.bing.com/qsonhs.aspx?type=cb&q=${encodeURIComponent(string)}&cb=bing`);
    let suggestions = eval(response.data);

    return suggestions.map(item => ({
        title: item.Txt,
        icon: 'bing-icon.png'
    }));
}

function bing(data) {
    return data.AS.Results[0].Suggests;
}