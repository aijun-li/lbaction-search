// LaunchBar Action Script

function run(argument) {
  LaunchBar.openURL('https://www.smzdm.com/')
}

function runWithString(argument) {
  LaunchBar.openURL(
    `https://search.smzdm.com?s=${encodeURIComponent(argument)}&v=b`
  )
}
