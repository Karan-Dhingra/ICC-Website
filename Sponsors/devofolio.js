// Initialize elements and events
document.addEventListener('DOMContentLoaded', function () {
    let devfolioOptions = {
        buttonSelector: '#devfolio-apply-now',
        key: 'test', // put the hackathon key here
    }

    let script = document.createElement('script');
    script.src = "https://apply.devfolio.co/";
    document.head.append(script);

    script.onload = function () {
        new Devfolio(devfolioOptions);
        document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
            window.location.href = 'https://icc.devfolio.co/';
        });
    }

    script.onerror = function () {
        document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
            window.location.href = 'https://icc.devfolio.co/';
        });
    }
});