$(document).ready(function () {
    $("#nav_list li").click(function() {
        var title = $(this).children("a").attr("title");
              var filename = "json_files/"+title+".json";
        getJsonFile(filename);
    });
});

function getJsonFile(jsonFileURL) {
$.ajax({
    url: jsonFileURL,
    dataType: "text",
    success: function (data) {
        var json = $.parseJSON(data);
            $("main > h2").html(json.speakers[0].month + "<br/>");
            $("main > h1").html(json.speakers[0].title);
            $("main > h3").html(json.speakers[0].speaker);
            $("main > img").attr("src", json.speakers[0].image);
            $("main > p").html(json.speakers[0].text);
    }
});
}