// LaunchBar Action Script

function runWithString(string) {
  if (string == '') {
    return []
  }

  let response = HTTP.get(
    'https://suggest.taobao.com/sug?code=utf-8&q=' + encodeURIComponent(string)
  )
  let sugs = JSON.parse(response.data).result
  return sugs.map(item => ({
    title: item[0],
    icon: 'taobao-icon.png'
  }))
}
