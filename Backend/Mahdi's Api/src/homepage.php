<?php

class HomePage extends Webpage
{
    public function __construct($title,  $heading1,$links, $activePage, $heading2, $paragraph1) {
        $this->setHead($title);
        $this->addHeading1($heading1);
        $this->addMenu($links, $activePage);
        
        $this->addHeading2($heading2);
        $this->addParagraph($paragraph1);
        $this->setFoot();
    } 
}