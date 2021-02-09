// LaunchBar Action Script

function run() {
  LaunchBar.openURL('https://www.npmjs.com/')
}

function runWithString(string) {
  if (string === '') {
    return []
  }

  let response = JSON.parse(
    HTTP.get(
      `https://www.npmjs.com/search/suggestions?q=${encodeURIComponent(string)}`
    ).data
  )
  let suggestions = []

  for (let key in response) {
    suggestions.push({
      title: response[key].name,
      icon: 'npm-icon.png',
      badge: response[key].version,
      alwaysShowsSubtitle: true,
      subtitle: response[key].description,
      url: response[key].links.npm
    })
  }

  return suggestions
}
