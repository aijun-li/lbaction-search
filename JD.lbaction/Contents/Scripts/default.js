// LaunchBar Action Script

function run(argument) {
	LaunchBar.openURL('https://www.jd.com/')
}

function runWithString(argument) {
	LaunchBar.openURL(`https://search.jd.com/Search?keyword=${encodeURIComponent(argument)}&enc=utf-8`)
}