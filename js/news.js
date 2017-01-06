function escapeHTML(string) {
    var pre = document.createElement('pre');
    var text = document.createTextNode(string);
    pre.appendChild(text);
    return pre.innerHTML;
}

window.fbAsyncInit = function () {    
    FB.init({
        appId: '197210964033736',
        xfbml: true,
        version: 'v2.7'
    });
    jQuery.get("js/page_token", function(data) {
            FB.api('/1455491921426690', {
        fields: 'posts',
        access_token: data
    }, function (response) {
        var postsArray = response["posts"]["data"]
        var count = 0;
        console.log(postsArray.length);
        for (i = 0; i < postsArray.length; i++) {
            var msg = response["posts"]["data"][count]["message"];
            console.log(msg);
            if (msg != undefined) {
                //sorry for cancerous hardcoded html
                document.getElementById("news").innerHTML += `
                    <div style="white-space:pre-wrap; overflow-wrap:break-word; text-align:center">
                        <img src="img/logo.jpg" width=10% style="display: block; margin: 0 auto;">
                        <h1>Stuyvesant Junior Caucus</h1>
                        ` + escapeHTML(msg) + "<br><hr><br><br></div>";
                count++;
            }
        }
    });
        return data;
    })
};


(function (d, s, id) {
    var js;
    var fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/all.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
