var http = require('http');
var cheerio = require('cheerio');

var url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.mod-chapters');

    var courseData = [];

    chapters.children().each(function(item) {
        var chapter = $(this);
        var chapterContent = chapter.find('strong');
        var chapterTitle = chapterContent.text();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        };

        videos.each(function(item) {
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];

            chapterData.videos.push({
                title: videoTitle,
                id: id
            });
        });

        courseData.push(chapterData);
    });

    return courseData;
}

function printCourseData(courseData) {
    courseData.forEach(function(item) {
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');

        item.videos.forEach(function(video) {
            console.log('【' + video.id + '】' + video.title + '\n');
        });
    });
}


function getPageAsync(url) {
    return new Promise(function(resolve, reject) {

        console.log('crawlering... ' + url);

        http.get(url, function(res) {
            var html = '';

            res.on('data', function(data) {
                html += data;
            });

            res.on('end', function() {
                resolve(html);
            })
        }).on('error', function(e) {
            reject(e);
            console.log('获取课程出错!');
        });
    });
}

getPageAsync(url);
// http.get(url, function(res) {
//     var html = '';

//     res.on('data', function(data) {
//         html += data;
//     });

//     res.on('end', function() {
//         var courseData = filterChapters(html);
//         printCourseData(courseData);
//     })
// }).on('error', function() {
//     console.log('获取课程出错!');
// });