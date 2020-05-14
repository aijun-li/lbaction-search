// LaunchBar Action Script

function run(argument) {
    LaunchBar.openURL('https://www.zhihu.com/');
}

function runWithString(argument) {
    LaunchBar.openURL('https://www.zhihu.com/search?type=content&q=' + encodeURIComponent(argument));
}
