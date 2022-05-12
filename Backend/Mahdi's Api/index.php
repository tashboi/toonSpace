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
    case 'home':
        $controller = new HomepageController($request,$response);
        break;
    case 'documentation':
        $controller = new DocumentationController($request,$response);
        break;
    case 'api':
        $controller = new ApiBaseController($request, $response);
        break;
    case 'api/events':
        $controller = new ApiEventsController($request, $response);
        break;
        default:
        if (substr($request->getPath(),0,3) === "api") {
            $controller = new ApiErrorController($request, $response);
        } else {
            $controller = new ErrorController($request, $response);
        }
        break;
        
}
 
echo $response->getData();