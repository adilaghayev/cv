// Vanilla JS
window.onload = function () {
    var tabs = document.querySelectorAll('.tab');
    var cvSections = document.querySelectorAll('#cv-content > div');

    function resetTabs() {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            cvSections[i].style.display = 'none';
        }
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            resetTabs();
            tabs[i].classList.add('active');
            cvSections[i].style.display = 'block';
        });
    }

    // initialize page with first tab active
    if (tabs.length > 0) {
        tabs[0].click();
    }
};
