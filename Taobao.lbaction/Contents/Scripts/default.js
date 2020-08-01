// LaunchBar Action Script

function run(argument) {
  LaunchBar.openURL('https://www.taobao.com/')
}

function runWithString(argument) {
  LaunchBar.openURL(`https://s.taobao.com/search?q=${encodeURIComponent(argument)}&ie=utf8`)
}
