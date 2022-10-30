!function (n) { "use strict"; n((function () { })), n(window).on("load", (function () { })) }(jQuery);



function redirect(url, warning) {

    if (!url) throw new Error("No URL provided.");

    if (warning != '') {
        if (window.confirm(warning)) {
            if (window.confirm("You are being redirected to a third party website. Please be aware that we are not responsible for the content of that website. If you wish to continue, click OK.")) {
                window.location.href = url;
            }
        }
    }
    else {
        if (window.confirm("You are being redirected to a third party website. Please be aware that we are not responsible for the content of that website. If you wish to continue, click OK.")) {
            window.location.href = url;
        }
    }

   


}

function sendMessage() {
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const subject = document.getElementById("contact-subject").value;
    const messageBody = document.getElementById("contact-message").value;

    if (name === "" || email === "" || subject === "" || messageBody === "") {
        alert("Please fill out all fields.");
    }
    else {
        $.ajax({
            type: "POST",
            url: "/contact",
            data: {
                name: name,
                email: email,
                subject: subject,
                messageBody: messageBody,
            },
            success: function (data) {
                if (window.confirm("Message was sent!")) {
                    window.location.href = "/";
                }
            },
            error: function (data) {
                alert("An error occured, please try again later.");
                console.log(data);
            }
        });
    }
}


function purchaseItem(item2) {
    // Check if the localstorage for user
    if (localStorage.getItem("user") === null) {
        if (window.confirm("When you Login, it will say \"Join servers for you\", THIS IS ONLY TO JOIN THE SUPPORT SERVER. If you wish to continue, click OK.")) {
            window.location.href = "/login";
        }
    }
    else {
        fetch("/items", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((data) => {
            const item = data[item2];
            if (!item) window.location.href = "/error?err=Item+not+found&code=404";

            if (window.confirm(`Are you sure you want to purchase ${item.name}?`)) {



            const user = JSON.parse(localStorage.getItem("user"));
            $.ajax({
                type: "POST",
                url: "/purchase",
                data: {
                    item: {
                        name: data[item2].name,
                        id: data[item2].id,
                        description: data[item2].description,
                        price: data[item2].price,
                    },
                    user: {
                        username: user.username,
                        discriminator: user.discriminator,
                        id: user.id,
                        avatar: user.avatar,
                        email: user.email,
                    }
                },
                success: function (data) {
                    if (window.confirm(data)) {
                        window.location.href = "/";
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }



        })
    }
}


function getCountry() {
    // Check if the user is from japan
    if (window.navigator.language === "jp") {
        return "JP";
    }
    // Check if the user is from the US
    if (window.navigator.language === "en") {
        return "US";
    }
}




document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    // var menu = document.createElement("div");
    // menu.id = "context-menu";
    // menu.style.position = "absolute";
    // menu.style.top = e.clientY + "px";
    // menu.style.left = e.clientX + "px";
    // menu.style.backgroundColor = "white";
    // menu.style.borderRadius = "5px";
    // menu.style.padding = "5px";
    // menu.style.maxWidth = "250px";
    // menu.style.maxHeight = "250px";
    // menu.style.overflow = "hidden";
    // menu.style.textOverflow = "ellipsis";
    // menu.style.whiteSpace = "nowrap";


    // var menuItems = [
    //     {
    //         label: "About",
    //         click: function () {
    //             const aboutSection = document.getElementById("about");

    //             // Show the about section, but it uses lightbox
    //             aboutSection.style.display = "block";
    //             aboutSection.style.opacity = "1";
    //             aboutSection.style.visibility = "visible";
            

                
    //         }
    //     },
    //     {
    //         label: "View Source",
    //         click: function () {
            
    //             if (window.confirm("BRO WHY ARE YOU VIEWING THE SOURCE CODE?? Its on github...")) redirect("https://github.com/akenolol/akenodev.xyz")

                
    //         }
    //     },
    // ]

    // menuItems.forEach((item) => {
    //     var menuItem = document.createElement("div");
    //     menuItem.style.padding = "5px";
    //     menuItem.style.cursor = "pointer";
    //     menuItem.innerText = item.label;
    //     menuItem.addEventListener("click", item.click);
    //     menu.appendChild(menuItem);
    // })

    // menu.appendChild(document.createElement("br"));


    // var menuItem = document.createElement("div");

    // menuItem.style.padding = "5px";
    // menuItem.style.cursor = "pointer";
    // menuItem.innerText = "Close";
    // menuItem.addEventListener("click", function () {
    //     document.body.removeChild(menu);
    // });
    // menu.appendChild(menuItem);

    // document.body.appendChild(menu);
    // menu.style.display = "block";
});


$(document).ready(function () {
    var country = getCountry();

    if (country == "JP") {
        window.location.href = "https://jp.akenodyv.xyz";
    } 
    else if (country == "US") {
        return;
    }
    
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        // Create a style named hidden 
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.hidden { display: none; }';
    
        document.head.appendChild(style);
        

        menu.classList.remove("hidden");
        
        const profile = document.getElementById("userProfile-2");

        profile.addEventListener("click", function () {
            // window.location.href = "/profile";
            alert("This feature is not available yet.");
        })
    
    } else {
        // Add style to the menu
        menu.classList.add("hidden");
    }

    setInterval(() => {
        console.clear();
    }, 1000);
})




