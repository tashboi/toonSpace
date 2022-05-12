<?php
include 'src/webpagecomponents.php';
class HomepageController extends Controller 
{
    protected function processRequest() {
        $page = new DocumentationPage("Documentation", 
        
        "welcome to the home page",
        ["Home"=>"home", "Documentation"=>"documentation"],
        "Hello, world!!!",
        "Welcome to our website",
        "this is our documentation test page");
        return $page->generateWebpage();
    }
}