let label = document.getElementById("dynamic_label");
let heading = document.getElementById("dynamic_heading");
let content = document.getElementById("dynamic_content");
let img = document.getElementById("dynamic_img");
let elements = [img];

//Info section
function changeContents(identifier, e) {
    e.preventDefault();

    img.style.opacity = 0;


    setTimeout(() => {

        img.style.opacity = 1;
    }, 800);
    switch (identifier) {
        case "Mission":
            label.innerText = "Mission";
            heading.innerHTML = `<span class="accent">Illuminating</span> the Path to Technological Brilliance`;
            content.innerText = "Our mission is to lead the charge in technological innovation, crafting solutions that not only meet the needs of today but also pave the way for a brighter, more connected future. We're committed to empowering individuals and businesses alike, harnessing the power of technology to spark transformative change. With passion as our fuel and innovation as our compass, we navigate the digital landscape, illuminating pathways to success for all";

            img.src = "../assest/mission.jpeg";
            const secondAnchor = document.querySelector('.info__links a:nth-child(2)');
            document.querySelectorAll(".info__links a").forEach(anchor => {
                anchor.style.color = "black";
            });
            secondAnchor.style.color = "#4a87ce";
            break;
        case "Value":
            const thirdAnchor = document.querySelector('.info__links a:last-child');
            document.querySelectorAll(".info__links a").forEach(anchor => {
                anchor.style.color = "black";
            });
            thirdAnchor.style.color = "#4a87ce";
            break;

        default:
            label.innerText = "About us";
            heading.innerHTML = `<span class="accent">Sparkle Coder</span>: Where innovation ignites brilliance`;
            content.innerText = "At Sparkle Coder, we're more than just a team - we're a beacon of innovation. With passion as our compass, we navigate the digital landscape, crafting solutions that redefine excellence.From concept to execution, we thrive on pushing boundaries and illuminating pathways to success. Join us as we spark transformative change in the world of technology.";
            img.src = "../assest/about.jpeg";
            const first = document.querySelector('.info__links a:nth-child(1)');
            document.querySelectorAll(".info__links a").forEach(anchor => {
                anchor.style.color = "black";
            });
            first.style.color = "#4a87ce";
    }


}
//slider section

//bluring the inactive slides
let slideIndex = 2;


function displayBlock(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial__item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.filter = "blur(1.5px)";
    }
    slides[n - 1].style.filter = "blur(0)";
    displayOrder(n);
}
function displayBlockMobile(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial__item--small");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "block";
}

//displaying the active slide in the middle
function displayOrder(n) {
    let item1 = document.getElementById("item-1");
    let item2 = document.getElementById("item-2");
    let item3 = document.getElementById("item-3");
    elements = [item1, item2, item3];


    switch (n) {
        case 1:
            item2.style.order = 1;
            item1.style.order = 2;
            resetValues();
            item1.style.transform = "scale(1.1)";
            item1.style.backgroundColor = "white";

            item1.style.zIndex = "1";
            item1.style.boxShadow = "0 0 2px black";
            item3.style.order = 3
            break;
        case 3:
            item2.style.order = 1;
            item3.style.order = 2;
            resetValues();
            item3.style.transform = "scale(1.1)";
            item3.style.backgroundColor = "white";
            item3.style.boxShadow = "0 0 2px black";

            item3.style.zIndex = "1";
            item1.style.order = 3;
            break;
        default:
            item1.style.order = 1;
            item2.style.order = 2;
            resetValues();
            item2.style.transform = "scaleX(1.1)";
            item2.style.boxShadow = "0 0 2px black";

            item2.style.zIndex = "1";
            item2.style.backgroundColor = "white";
            item3.style.order = 3
    }

}
function resetValues() {
    elements.forEach(element => {
        element.style.zIndex = "0";
        element.style.backgroundColor = "transparent";
        element.style.boxShadow = "none";
        element.style.transform = "scale(1)";
    })
}
displayBlock(slideIndex);
displayBlockMobile(slideIndex);

function updateTime() {
    let time = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dates = time.toLocaleDateString(undefined, options);
    document.querySelector("#date").innerHTML = dates;
}
updateTime();
setInterval(updateTime, 1000);