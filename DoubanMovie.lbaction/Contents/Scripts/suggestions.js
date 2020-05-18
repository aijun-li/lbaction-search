// LaunchBar Action Script

function runWithString(string) {
  if (string == "") {
    return [];
  }

  let response = HTTP.get(`https://movie.douban.com/j/subject_suggest?q=${encodeURIComponent(string)}`);
  let suggestions = JSON.parse(response.data);

  return suggestions.map(item => {
    return {
      title: item.title + " (" + item.year + ")",
      subtitle: item.sub_title,
      alwaysShowsSubtitle: true,
      icon: 'doubanmovie-icon.png'
    };
  })
}
