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

var checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}
