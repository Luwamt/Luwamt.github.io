/**
 * index.js
 */

 $(document).ready(
    function () {
    $("#view_button").click(getPicture);
    });

    function getPicture () {
       let date=$("#date").val();
    $.ajax({
    url: `https://api.nasa.gov/planetary/apod?date=${date}`,
    type: "GET",
    data: { api_key: "tfofVD2BzaJDMUT3znaYMv06ec8AN3CR0CuiSQNY" },
    dataType: "json",
    "success": showPicture,
    "error": noPicture
    });
    };
    function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").text(data.title);
    $("#explanation").text(data.explanation);
    };
    function noPicture(error) {
    alert(error.responseText);
    };