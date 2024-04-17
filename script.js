document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {
        const scrollDirection = window.scrollY > 0 ? "down" : "up";

        if (scrollDirection === "down") {
            
            window.scrollTo(0, 100)
        } else if (scrollDirection === "up"){
            window.scrollTo(0,0)
        } else {
            
        }
    });
});
