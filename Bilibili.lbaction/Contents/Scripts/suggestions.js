// LaunchBar Action Script

function runWithString(string) {
    if (string == '') {
        return [];
    }

    let response = JSON.parse((HTTP.get(`http://api.bilibili.cn/suggest?term=${encodeURIComponent(string)}`)).data);
    let suggestions = [];

    for (let key in response) {
        suggestions.push({
            title: response[key].name,
            icon: 'bilibili-icon.ico'
        });
    }

    return suggestions;
}