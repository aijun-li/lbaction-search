// LaunchBar Action Script

function run() {
  LaunchBar.openURL('https://movie.douban.com/')
}

function runWithString(argument) {
  if (argument == '') {
    return []
  }

  let response = HTTP.get(
    `https://movie.douban.com/j/subject_suggest?q=${encodeURIComponent(
      argument
    )}`
  )
  let suggestions = JSON.parse(response.data)

  return suggestions.map((item) => ({
    title: item.title + ' (' + item.year + ')',
    subtitle: item.sub_title,
    alwaysShowsSubtitle: true,
    icon: 'doubanmovie-icon.png',
    url: item.url,
    quickLookURL: item.url
  }))
}
