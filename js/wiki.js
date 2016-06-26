/* Courtesy of the MediaWiki Api: https://www.mediawiki.org/wiki/API:Main_page 
*/

$("#searchanything").keyup(function(e) {
    var wiki = $("#searchanything").val(); // val() method gets the current value of the first element in the set of matched elements.
    $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
            srsearch: wiki,
            action: "query",
            list: "search",
            format: "json"
        },
        function(data) {
            $("#results").empty(); // empty() method removes all child nodes of the set of matched elements from the DOM.
            $("#results").append("<br>  " + "</p>");
            $.each(data.query.search, function(i, item) { // .each method iterates over the jQuery object, executing a function for each matched element.
            $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a><br>" + item.snippet + "<br><br></div>");
            });
        });
});
