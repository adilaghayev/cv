window.onload = function () {
    var checkbox = document.getElementById('switch');
    var body = document.body;
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

    checkbox.addEventListener('change', function () {
        if(checkbox.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });

    // Initialize page with first tab active and light mode
    if (tabs.length > 0) {
        tabs[0].click();
    }
    checkbox.checked = false;
    body.classList.add('light-mode');
};
