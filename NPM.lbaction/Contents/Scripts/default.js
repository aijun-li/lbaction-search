// LaunchBar Action Script

function run() {
  LaunchBar.openURL('https://www.npmjs.com/')
}

function runWithString(string) {
  LaunchBar.openURL(
    'https://www.npmjs.com/package/' + encodeURIComponent(string)
  )
}
