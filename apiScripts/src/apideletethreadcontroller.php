<?php
class ApiDeleteThreadController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new ThreadGateway();
    }
    
    protected function processRequest() {
        $tid = $this->getRequest()->getParameter('threadid');
        if ($this->getRequest()->getRequestMethod() === "GET") {$this->getGateway()->findAll();}
        else if ($this->getRequest()->getRequestMethod() === "POST") {$this->getGateway()->deleteThread($tid);}
        
        return $this->getGateway()->getResult();
    }
}