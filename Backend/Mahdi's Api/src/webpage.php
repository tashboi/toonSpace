<?php

/**
 * Generate a webpage
 *
 * In this example, the class has been declared abstract.
 *
 * @author Anon Anon w123456789
 */
abstract class Webpage 
{
    private $head;
    private $foot;
    private $body;

    protected function setHead($title) {
        $this->head = webpageComponents::webpageHead($title);
    }

    private function getHead() {
       
    	return $this->head;
    }

    protected function setBody($text) {
    	$this->body .= $text;
    }

    private function getBody() {
        return $this->body;
    }

    protected function setFoot() {
        $this->foot = webpageComponents::webpageFoot();
    }

    private function getFoot() {
        return $this->foot;
    }

    protected function addMenu($links, $activePage) {
        $menu = webpageComponents::menu($links,$activePage);
    	$this->setBody($menu);
    }

    protected function addHeading1($text) {
        $this->setBody("<h1>$text</h1>");
    }
    protected function addHeading2($text) {
        $this->setBody("<h1>$text</h1>");
    }



    public function addParagraph($text) {
        $this->setBody("<p>$text</p>");
    }
    
    public function generateWebpage() {
        return $this->head . $this->body . $this->foot;
    }

}
