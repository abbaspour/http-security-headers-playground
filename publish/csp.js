function loadSelfImage() {
    document.getElementById('self-img').innerHTML = '<img src="img/okta-blue.png" alt="local okta blue"/>';
}

function loadRemoteImage() {
    document.getElementById('remote-img').innerHTML = '<img src="https://www.okta.com/sites/default/files/media/image/2021-03/Logo_Okta_Blue_RGB.png" alt="remote okta blue"/>';
}

document.getElementById('self-img-btn').addEventListener("click", loadSelfImage);
document.getElementById('remote-img-btn').addEventListener("click", loadRemoteImage);
