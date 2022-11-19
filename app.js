const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


$(document).ready(function () {
    $('#mode').click(function () {
        if ($('link#styles').attr('href') == "Night.css") {
            $('link#styles').attr('href', 'Day.css')
            $('#mode').attr('value', 'Toggle Night Mode')
        }
        else {
            $('link#styles').attr('href', 'Night.css')
            $('#mode').attr('value', 'Toggle Day Mode')
        }
    })

});