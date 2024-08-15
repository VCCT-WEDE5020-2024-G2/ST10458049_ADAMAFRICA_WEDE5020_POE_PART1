function setPage(pageSel){

    Content = redirectRule(pageSel)

    // customElements.define('content-component', Content);


}

function redirectRule(pageSel){

    switch(pageSel){

        case 0:
            window.location.href = "service_type.html";
            break;


        case 1:
            window.location.href = "news.html";
            break;

    }

};


