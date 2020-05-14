// LaunchBar Action Script

function runWithString(string) {
    if (string == '') {
        return [];
    }

    let response = HTTP.get(`https://www.zhihu.com/api/v4/search/suggest?q=${encodeURIComponent(string)}`);
    let suggestions = JSON.parse(response.data).suggest;

    return suggestions.map(item => ({
        title: item.query,
        icon: 'zhihu-icon.png'
    }));
}
