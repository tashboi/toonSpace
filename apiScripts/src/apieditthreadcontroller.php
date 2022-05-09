<?php
class ApiEditThreadController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new ThreadGateway();
    }
    
    protected function processRequest() {
        $tid = $this->getRequest()->getParameter('threadid');
        $content = $this->getRequest()->getParameter('content');

        if ($this->getRequest()->getRequestMethod() === "GET") {$this->getGateway()->findAll();}
        else if ($this->getRequest()->getRequestMethod() === "POST") {$this->getGateway()->editThread($tid,$content);}
        
        return $this->getGateway()->getResult();
    }
}