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