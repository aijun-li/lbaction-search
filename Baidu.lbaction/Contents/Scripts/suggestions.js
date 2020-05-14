// LaunchBar Action Script

function runWithString(string) {
    if (string == '') {
        return [];
    }

    let response = HTTP.get(`http://suggestion.baidu.com/su?wd=${encodeURIComponent(string)}&cb=baidu`);
    let suggestions = eval(response.data);

    return suggestions.map(item => ({
        title: item,
        icon: 'baidu-icon.png'
    }));
}

function baidu(data) {
    return data.s;
}