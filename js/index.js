document.querySelector('#year').innerText = (new Date(Date.now())).getFullYear();
loadOverlay();
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        const rand = Math.floor(Math.random() * 3);
        if (entry.isIntersecting === true) {
            // console.log(Array.from(entry.target.parentElement.children));
            const img = entry.target.querySelector("img");
            entry.target.classList.add("inview");
            entry.target.classList.add("animation");
            img.src = `./images/project${rand}.png`;
        } else {
            entry.target.classList.remove("inview");
            entry.target.classList.remove("animation");
        }
    });
});
const items = document.querySelectorAll(".grid-item");

insertOverlay(items);

items.forEach((item, index) => {
    observer.observe(item, index);
});


/**
 * 
 * @returns {Element}
 * 
 */

function createOverlay(){
    let overlay =  document.createElement('div');
    overlay.classList.add('overlay');
    return overlay;
}

/**
 * @param {HTMLAllCollection} elements
 * @returns {void}
 */

function insertOverlay(elements) {
    elements.forEach((element)=>{
        element.prepend(createOverlay());
    })
}

function loadOverlay() {
    let o = document.createElement('div');
    let loader = document.createElement('span');
    loader.classList.add("loader");
    o.style.opacity = 1;
    o.style.display = "flex";
    o.style.justifyContent =  "center";
    o.style.alignItems = "center";
    o.style.position = 'fixed';
    o.style.width = "100vw";
    o.style.height = "100vh";
    o.style.zIndex = 999;
    o.style.transform =  "translateY(0%)";
    o.style.transitionProperty = "transform";
    o.style.transitionTimingFunction = "ease-in";
    o.style.transitionDuration = "2s";
    o.style.backgroundColor = "cadetblue";
    o.append(loader);
    document.body.prepend(o);
    window.addEventListener('load',function() {
        // o.style.opacity =  0; 
        o.style.transform = "translateY(-100%)";

    })

}


