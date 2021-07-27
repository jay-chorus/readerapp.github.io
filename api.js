eventListener();
function eventListener(){
    window.addEventListener('DOMContentLoaded', () =>
        herokuappApiTest();
    });
}
function herokuappApiTest(){
    fetch("json/user.json")
    .then(userResponse => response.json())
    .then(data => {
        let postURL = 'http://readerapp-production.herokuapp.com/ebook/api/v1/login';
        let postRequest = new XMLHttpRequest();
        postRequest.open('POST', postURL, true);
        postRequest.onreadystatechange = function(){// load index page when state changes
         if (this.readyState===postRequest.Done&&this.status===200){
            let postresponse = postRequest.response;
            const token = postresponse.token;
            window.location.assign("https://jay-chorus.github.io/readerapp.github.io/index");
         }
        }
    }
    postRequest.send("email="+userResponse.email+"&password="+userResponse.password);
    )

}