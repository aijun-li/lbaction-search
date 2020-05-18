// LaunchBar Action Script

function run() {
    LaunchBar.openURL('https://movie.douban.com/');
}

function run(argument) {
  LaunchBar.openURL(`https://search.douban.com/movie/subject_search?search_text=${encodeURIComponent(argument)}`);
}
