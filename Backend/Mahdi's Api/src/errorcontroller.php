<?php

class ErrorController extends Controller 
{
    protected function processRequest() {
        $page = new HomePage("Error","Error page");
        return $page->generateWebpage();
    }
}