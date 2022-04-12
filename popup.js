document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('button').addEventListener('click', onclick, false);

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true},
        
            function (tabs) {
            var tab = tabs[0];
            /*
            //Gets the video ID of the YouTube Video
            function YouTubeGetID(url){
                url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
            }
            */
            const apiCall = `https://yt-download.org/api/button/mp3?url=${tabs[0].url}`;
            document.getElementById('buttonApi').src = apiCall;
            console.log(window.location.href);
            })
    }
}, false);