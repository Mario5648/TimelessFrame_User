function sendCheer()
{
    let userToken = localStorage.getItem("TF_LOGGEDIN")
    let params = {"userToken": userToken, "name":"karla"};
    endpointCall("sendCheer", params, function(data)
                                {
                                    if(data["status"] == "success")
                                    {
                                        populateSuccess();
                                        return;
                                    }
                                    return;
                                });
}


function sendMessage()
{
    let userToken = localStorage.getItem("TF_LOGGEDIN");
    let fromName = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let params = {"userToken": userToken, "fromName":fromName, "message":message};
    endpointCall("sendMessage", params, function(data)
                                {
                                    if(data["status"] == "success")
                                    {
                                        populateSuccess();
                                        return;
                                    }
                                    return;
                                });
}