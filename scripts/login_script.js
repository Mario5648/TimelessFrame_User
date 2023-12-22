
function logUserIn()
{
    let username = document.getElementById("username").value
    let password = document.getElementById("userPassword").value
    let params = {"username": username, "password":password};
    endpointCall("login", params, function(data)
                                {
                                    if(data["isLogin"] == true)
                                    {
                                        localStorage.setItem("TF_LOGGEDIN", username);
                                        checkUserLogin();
                                        return;
                                    }
                                    
                                    return;
                                });
}



