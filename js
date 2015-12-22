$(document).ready(function () {
  var shareUrl = $("link[rel=canonical]").attr("href");
    $.getJSON('http://sharecount.twistblogger.com/?url=' + encodeURIComponent(shareUrl) + "&callback=?", function (data) {
        shares = data.shares;
        $(".count").each(function (index, el) {
            service = $(el).parents(".share-btn").attr("data-service");
            count = shares[service];
            if (count > 1000) {
                count = (count / 1000).toFixed(1);
                if (count > 1000) count = (count / 1000).toFixed(1) + "M";
                else count = count + "k";
            }
            $(el).html(count);
        });
    });
});
