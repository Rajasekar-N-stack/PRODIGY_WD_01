const scrollrevealoption = {
distance : "50px",
origin:"bottom",
duration: 1000
};

ScrollReveal().reveal(".header_container img", {
duration: 1000

})

ScrollReveal().reveal(".header_content", {
    ...scrollrevealoption,
    origin:"right",
    delay:500,
    
})

ScrollReveal().reveal(".header_tag", {
    ...scrollrevealoption,
    origin:"left",
    delay: 1000
    
})


    