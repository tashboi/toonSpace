<?php

class homepage extends webpage
{
    public function __construct($title, $h1, $h2) {
        $this->setHead($title);
        $this->addHeading1($h1);
        $this->addHeading2($h2);
        $this->setFoot();
    }

    private function addHeading2($text){
        $this->setBody("<h2>$text</h2>");
    }
}