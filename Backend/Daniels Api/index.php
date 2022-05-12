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
    case 'api/threadit':
            $controller = new ApiEditThreadController($request, $response);
        break;
    case 'api/threadelete':
            $controller = new ApiDeleteThreadController($request, $response);
        break;
        case 'api/ecomment':
            $controller = new ApiEditCommentController($request, $response);
        break;
        case 'api/dcomment':
            $controller = new ApiDeleteCommentController($request, $response);
        break;
 case 'api/authenticate':
            $controller = new ApiAuthenticateController($request, $response);
        break;
    case 'api/register':
            $controller = new ApiRegisterController($request, $response);
        break;
    case 'api/thread';
            $controller = new ApiThreadListController($request, $response);
        break;
    case 'api/comment';
            $controller = new ApiCommentController($request, $response);
        break;
    default:
        
        break;
}
 
echo $response->getData();