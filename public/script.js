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

//festive_container
ScrollReveal().reveal(".festive_content .section_header",{
    ...scrollrevealoption
});

ScrollReveal().reveal(".festive_content .section_desc",{
    ...scrollrevealoption,
    delay : 500,
});


ScrollReveal().reveal(".festive_content .festive_btn",{
    ...scrollrevealoption,
    delay : 1000
});


ScrollReveal().reveal(".shopping_card", {
...scrollrevealoption,
interval : 500,

})


ScrollReveal().reveal(".explore_content .section_header",{
    ...scrollrevealoption,
});

ScrollReveal().reveal(".explore_content .section_desc",{
    ...scrollrevealoption,
    delay: 500,
});

ScrollReveal().reveal(".explore_content .explore_btn",{
    ...scrollrevealoption,
    delay: 1000,
});


    