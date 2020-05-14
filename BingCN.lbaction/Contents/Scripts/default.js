// LaunchBar Action Script

function run() {
    LaunchBar.openURL('https://www.bing.com/');
}
function run(argument) {
    LaunchBar.openURL(`https://www.bing.com/search?q=${encodeURIComponent(argument)}`);
}
