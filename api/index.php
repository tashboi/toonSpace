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
    case 'api':
        $controller = new ApiBaseController($request, $response);
        break;
 case 'api/authenticate':
            $controller = new ApiAuthenticateController($request, $response);
        break;
    case 'api/register':
            $controller = new ApiRegisterController($request, $response);
        break;
    default:
        
        break;
}
 
echo $response->getData();