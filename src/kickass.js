var KickassTorrents = {
  getDownloadLink: function(showName, seasonNr, episodeNr, callback) {
    var pad = function(num) {
      return ('00' + num).substr(-2);
    }

    var query = showName + " " + "S" + pad(seasonNr) + "E" + pad(episodeNr);
    var link = "https://kickass.to/usearch/" + encodeURIComponent(query) + "/";

    callback(link);
  }
}