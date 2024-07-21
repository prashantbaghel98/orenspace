// function toggleNavbar() {
//     const navmenu = document.getElementById('navmenu');
//     if (navmenu.style.display === 'block') {
//         navmenu.style.display = 'none';
//     } else {
//         navmenu.style.display = 'block';
//     }
// }


// Navbar Button




// Select all <li> elements within the .nav-menu
let navItems = document.querySelectorAll(".nav-menu li");

// Create a new <div> to hold the cloned <li> elements
let div = document.createElement("div");
// div.style.backgroundColor="black";
// div.style.listStyle="none";
// div.style.paddingLeft="5%";
div.className="mobile-menu-toggle"


// Flag to track the visibility state of div
let divVisible = false;

// Iterate over each <li> element
navItems.forEach((item) => {
    // Clone each <li> element
    let clonedItem = item.cloneNode(true);
    // Append the cloned <li> to the new <div>
    div.appendChild(clonedItem);
});

// Select the .navigation-bar to append the new <div> after it
let navigationBar = document.querySelector(".navigation-bar");

// Add an event listener to toggle the visibility of the new <div>
document.addEventListener("click", () => {
    if (!divVisible) {
        // Append the div if it's not already visible
        navigationBar.after(div);
        divVisible = true;
    } else {
        // Remove the div if it's already visible
        div.remove();
        divVisible = false;
    }
});









window.onload = function() {
    startCounter('counter1', 558, 10);
    startCounter('counter2', 501, 20);
    startCounter('counter3', 3, 1000);
};

function startCounter(counterId, target, interval) {
    let counter = document.getElementById(counterId);
    let count = 0;
    let step = target > 100 ? Math.ceil(target / 100) : 1;
    let timer = setInterval(() => {
        count += step;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        counter.innerText = `${count}+`;
    }, interval);
}