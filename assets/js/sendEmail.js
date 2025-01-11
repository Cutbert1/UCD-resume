function sendMail(contactForm) {
    emailjs.send("service_ilry935","template_977a20n", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,

    })

    //method for our promise
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }

    );
    return false;  // To block from loading a new page

}