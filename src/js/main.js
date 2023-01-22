const URL = 'https://randomuser.me/api/';
const PARAMETERS = '?nat=br,es,mx,us&noinfo';

function changePageData(response) {
}

try {
    fetch(URL + PARAMETERS)
        .then(response => response.json())
        .then(response => {
            let responseData = response.results[0];
            changePageData(responseData);
        });
} catch (error) { console.error(error); }


