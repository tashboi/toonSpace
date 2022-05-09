<?php

include "config/config.php";

$request = new Request();

if (substr($request->getPath(),0,3) === "api") {
    $response = new JSONResponse();
} else {
    set_exception_handler("HTMLexceptionHandler");
    $response = new HTMLResponse();
}

switch ($request->getPath()) {
        case '':

        break;
        case 'api':
            $controller = new ApiBaseController($request, $response);
            break;
        case 'imgs':
            echo"IMGS";
            break;
        case 'api/events':
            $controller = new ApiEventsController($request, $response);
            break;
        case 'api/authenticate':
            $controller = new ApiAuthenticateController($request, $response);
            break;
        case 'api/register':
            $controller = new ApiRegisterController($request, $response);
            break;
            
            
        
    default:
        if (substr($request->getPath(),0,3) === "api"){
            $controller = new ApiErrorController($request, $response);
        }else{
            $controller = new ErrorController($request, $response);
        }
}
 
echo $response->getData();