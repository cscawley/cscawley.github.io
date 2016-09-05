window.onload = function () {

  function ajax() {
     $.ajax({
      url: "https://api.twitch.tv/kraken/streams/carrucan",
      datatype: "jasonp",
      data: {
        format: "json"
      },
      success: function(data) {
        fetchData(data);
      },
      error: function() {
        console.log("unable to access json");
      }
     })  
  }

function fetchData(data) {
    if (data.stream === null) {
      url = data._links.channel.substr(38);
      updateOfflineUsers();
    } else if (data.status == 422 || data.status == 404) {
      status = data.message;
      updateHTML(".unavailable");
    } else {
      if (data.stream.channel.logo !== null) {
        picture = 'url("' + data.stream.channel.logo + '")';
      } else {
        picture = 'url("http://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png")';
      }
      url = data._links.channel.substr(38);
      status = "<a href='https://twitch.tv/" + url + "' target='_blank'" + "'>" + data.stream.channel.display_name + "</a>" + " is currently streaming" + data.stream.game;
      updateHTML(".online");
    }
  }
  //another API call for more info on the offline users
  function updateOfflineUsers() {
    $.ajax({
      url: "https://api.twitch.tv/kraken/channels/" + url,
      dataType: "jsonp",
      data: {
        format: "json"
      },
      success: function(json) {
        status = "'<a href='" + json.url + "' target='_blank'" + "'>" + json.display_name + "</a>'" + " is currently offline";
        if (json.logo !== null) {
          picture = 'url("' + json.logo + '")';
        } else {
          picture = 'url("http://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png")';
        }
        updateHTML(".offline");
      }
    });
  }
}