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
        echo "hello";
        break;

    case 'home':
        echo "hello home";
        break;

    case 'test': 
        echo 'work?';
        break;

    case 'api':
        $controller = new ApiBaseController($request, $response);
        break;

    case 'api/authenticate':
        $controller = new ApiAuthenticateController($request, $response);
        break;
    default:
        
        break;
}
 
echo $response->getData();