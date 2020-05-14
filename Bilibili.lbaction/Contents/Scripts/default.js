// LaunchBar Action Script

function run() {
    LaunchBar.openURL('https://www.bilibili.com');
}

function runWithString(argument)
{
    LaunchBar.openURL('https://search.bilibili.com/all?keyword=' + encodeURIComponent(argument));
}