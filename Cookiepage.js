document.addEventListener('DOMContentLoaded', function() {
    const cookieModal = document.getElementById('cookieModal');
    const customCookieModal = document.getElementById('customCookieModal');
    const closeBtn = document.querySelector('.close');
    const acceptBtn = document.getElementById('acceptCookies');
    const customtbtn = document.getElementById('customcookies');
    const label = document.getElementById('switch');
    const RejectAllbtn= document.getElementById('RejectAll');
    const necessaryBtn = document.getElementById('necessayCookies');
    const acceptAllBtn = document.getElementById('AcceptAll');
    const SavePrefbtn = document.getElementById('SavePref');
    customCookieModal.style.display = 'none';
    
    // Event listeners to close the modal
    closeBtn.addEventListener('click', function() {
        cookieModal.style.display = 'none';
    });

    acceptBtn.addEventListener('click', function() {
        cookieModal.style.display = 'none';
    });

    customtbtn.addEventListener('click', function() {
        cookieModal.style.display = 'none';
        customCookieModal.style.display = 'block';
    });

    RejectAllbtn.addEventListener('click', function() {
        cookieModal.style.display = 'none';
        customCookieModal.style.display = 'none';
    });

    necessaryBtn.addEventListener('click', function() {
        cookieModal.style.display = 'none';
    });

    acceptAllBtn.addEventListener('click', function() {
        customCookieModal.style.display = 'none';
    });

    SavePrefbtn.addEventListener('click', function() {
        customCookieModal.style.display = 'none';
    });

});