<?php

class ErrorController extends Controller
{


    protected function processRequest()


    {
        $request = new Request();


        $page = new HomePage("Error Page", "Error 404", "Incorrect URL");
        $page->addParagraph("Page: <em>".$request->getPath()."</em> was not found");
        return $page->generateWebpage();
    }
}
