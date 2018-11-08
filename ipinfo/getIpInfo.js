let ip = request.textContent;

const access_key = '26f4c9e7e877327d4d33574fe2d17685';
const url2 = `http://api.ipstack.com/${ip}?access_key=${access_key}`;

let results = document.querySelector('#results');


fetch(url2)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log();
                var Item = document.createElement('p');
                Item.innerText = 'Looks like there was a problem. Status Code: ' + response.status;
                results.appendChild(Item);
            }

            // Examine the text in the response
            response.json().then(function (data) {
                for (key in data) {
                    var listItem = document.createElement('p');
                    listItem.innerText = key + ':' + data[key];
                    results.appendChild(listItem);
                };
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
