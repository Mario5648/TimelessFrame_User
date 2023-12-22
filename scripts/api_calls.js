/*
var loginEndPoint = "http://127.0.0.1:5000/login";
var sendCheerEndPoint = "http://127.0.0.1:5000/sendCheer";
var sendMessageEndPoint = "http://127.0.0.1:5000/sendMessage";
*/

var loginEndPoint = "http://54.174.252.67/login";
var sendCheerEndPoint = "http://54.174.252.67/sendCheer";
var sendMessageEndPoint = "http://54.174.252.67/sendMessage";

var ERROR_FLAG = "ERROR";

function endpointCall(endpoint=null, params={}, callBack=null)
{
    let endpointLink = identifyEndPoint(endpoint);
    const Http = new XMLHttpRequest();
    var params = JSON.stringify(params);
    Http.open( "POST", endpointLink );
    Http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    Http.send(params);
    Http.onreadystatechange = ( e ) => 
    {
        //If the request was successful then populate everything
        if (Http.readyState == 4 && Http.status == 200) 
        {
            //parse the response from power automate to make it readable for the functions
            callBack(JSON.parse( Http.responseText ));
            
        }else
        {
            callBack(ERROR_FLAG);
        }
    }
}

function identifyEndPoint(endpoint=null)
{
    switch(endpoint)
    {
        case "login":
            return loginEndPoint;
        case "sendCheer":
            return sendCheerEndPoint;
        case "sendMessage":
            return sendMessageEndPoint;
    }
}