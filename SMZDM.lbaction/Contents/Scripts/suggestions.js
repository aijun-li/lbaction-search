// LaunchBar Action Script

function runWithString(string) {
  if (string == '') {
    return []
  }

  const ran = new Date().getTime()
  const response = HTTP.get(
    `https://search.smzdm.com/ajax/suggestion/suggestion_jsonp?keyword=${encodeURIComponent(
      string
    )}&callback=${ran}`,
    {
      headerFields: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36 Edg/88.0.705.56'
      }
    }
  ).data

  const sugs = JSON.parse(response.slice(`${ran}`.length + 1, -1)).data
  return sugs.map((item) => ({
    title: decodeURIComponent(item),
    icon: 'smzdm.ico'
  }))
}
