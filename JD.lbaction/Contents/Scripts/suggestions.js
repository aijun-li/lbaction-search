// LaunchBar Action Script

function runWithString(string) {
  if (string.length === 0) {
    return []
  }

  let response = HTTP.get(
    `https://dd-search.jd.com/?terminal=pc&newjson=1&ver=2&zip=1&key=${encodeURIComponent(
      string
    )}&t=${new Date().getTime()}`,
    {
      headerFields: {
        Referer: 'https://www.jd.com/'
      }
    }
  )
  let sugs = JSON.parse(response.data)
  return sugs
    .filter((sug) => sug.key)
    .map((sug) => ({
      title: sug.key,
      icon: 'jd-icon.png'
    }))
}
