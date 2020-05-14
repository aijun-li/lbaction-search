// LaunchBar Action Script

function run(argument) {
    LaunchBar.openURL('https://www.baidu.com/');
}

function runWithString(argument) {
    LaunchBar.openURL('https://www.baidu.com/s?wd=' + encodeURIComponent(argument));
}