
const TOKEN = '9452469a869e81';
const url = 'https://ipinfo.io/json?token='+TOKEN;

let request = document.querySelector('#comment_text');

fetch(url)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log();
                var Item = document.createElement('p');
                Item.innerText = 'Looks like there was a problem. Status Code: ' +response.status;
                request.appendChild(Item);
            }

            // Examine the text in the response
            response.json().then(function (data) {
                for(key in data) {
                    if(key == "ip") request.innerText = ""+data[key];
                };

            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
