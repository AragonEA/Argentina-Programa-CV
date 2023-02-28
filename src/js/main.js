
initialize();

function initialize() {
    getDataFromAPI();
    setDarkMode();
    document.getElementById('mail-btn').addEventListener('click', hideMailForm);
}

function getDataFromAPI() {
    const URL = 'https://randomuser.me/api/';
    const PARAMETERS = '?nat=br,es,mx,us&noinfo';
    try {
        fetch(URL + PARAMETERS)
            .then(response => response.json())
            .then(response => {
                let responseData = response.results[0];
                addUserDataFromAPI(responseData);
            });
    } catch (error) { console.error(error); }
}

function addUserDataFromAPI(response) {
    addName(response.name);
    addImage(response.picture.large);
    addAboutMeInfo(response);
    addContactInfo(response);
    addContactButtonsInfo(response);
}

function addContactInfo(response) {
    document.getElementById('cell-number').textContent += `${response.cell}`
    document.getElementById('phone-number').textContent += `${response.phone}`
    document.getElementById('email').textContent += `${response.email}`
}

function addContactButtonsInfo(response) {
    document.getElementById('phone-btn').href = `tel: ${response.phone}`
    document.getElementById('whatsapp-btn').href = `text: ${response.cell}`
    document.getElementById('mail-btn').href = `mailto: ${response.email}`
}

function addAboutMeInfo(response) {
    document.getElementById('location').textContent +=
        `${response.location.country}. ` + `${response.location.state}, ` + `${response.location.city}`

    document.getElementById('gender').textContent += capitalize(response.gender);

    document.getElementById('age').textContent += `${response.dob.age}`

    document.getElementById('birthdate').textContent += `${response.dob.date.split('T')[0]}`
}

function addName(name) {
    document.getElementById('profile-name').textContent = `${name.first} ` + `${name.last}`;
}

function addImage(imageSource) {
    document.getElementById('profile-img').src = imageSource;
}

function hideMailForm() {
    document.getElementById('mail-form').classList.add('hidden');
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Dark mode

function setDarkMode() {
    window.addEventListener('load', addDarkmodeWidget);

    const options = {
        bottom: '64px',
        right: 'unset',
        left: '32px',
        time: '0.2s',
        mixColor: '#fff',
        backgroundColor: '#fff',
        buttonColorDark: '#100f2c',
        buttonColorLight: '#fff',
        saveInCookies: true,
        label: '🌓',
        autoMatchOsTheme: true
    }
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
}

function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
