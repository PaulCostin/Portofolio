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

const input = document.querySelectorAll("#mode");
$(document).ready(function () {
    input.forEach(function (handleClick) {
        handleClick.addEventListener("click", function () {
            if ($('link#styles').attr('href') == "Night.css") {
                $('link#styles').attr('href', 'Day.css')
                $('#mode').attr('value', 'Toggle Night Mode')
            }
            else {
                $('link#styles').attr('href', 'Night.css')
                $('#mode').attr('value', 'Toggle Day Mode')
            };
        })
    })
})


const hamburger = document.querySelectorAll(".material-symbols-outlined");
hamburger.forEach(function (openMenu) {
    openMenu.addEventListener("click", function () {
        document.querySelector('#contact-menubar').classList.toggle("visible");
        document.body.classList.toggle("fixed");
    })
})

function myFunction(section) {
    if (section == "aboutMe") {
        document.body.classList.remove("fixed");
        document.querySelector('#contact-menubar').classList.toggle("visible");
        document.getElementById('aboutMeSection').scrollIntoView();
    } else if (section == "projects") {
        document.body.classList.remove("fixed");
        document.querySelector('#contact-menubar').classList.toggle("visible");
        document.getElementById('portofolio').scrollIntoView();
    } else {
        document.body.classList.remove("fixed");
        document.querySelector('#contact-menubar').classList.toggle("visible");
        document.getElementById('contact-form').scrollIntoView();
    }
}






// const input = $("#mode")
// $(document).ready(function () {
//     $('#mode').forEach(input).click(function () {
//         if ($('link#styles').attr('href') == "Night.css") {
//             $('link#styles').attr('href', 'Day.css')
//             $('#mode').attr('value', 'Toggle Night Mode')
//         }
//         else {
//             $('link#styles').attr('href', 'Night.css')
//             $('#mode').attr('value', 'Toggle Day Mode')
//         }
//     })
// })
