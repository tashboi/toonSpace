<?php
class ApiThreadListController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new ThreadGateway();
    }
    
    protected function processRequest() {
            $this->getGateway()->findAll();
        
        
        return $this->getGateway()->getResult();
    }
}