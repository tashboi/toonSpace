<?php
class ApiThreadListController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new ThreadGateway();
    }
    
    protected function processRequest() {
        $tid = $this->getRequest()->getParameter('threadid');
        $uid = $this->getRequest()->getParameter('userid');
        $title = $this->getRequest()->getParameter('title');
        $content = $this->getRequest()->getParameter('content');

        if ($this->getRequest()->getRequestMethod() === "GET") {$this->getGateway()->findAll();}
        else if ($this->getRequest()->getRequestMethod() === "POST") {$this->getGateway()->newThread($tid,$uid,$title,$content);}
        
        return $this->getGateway()->getResult();
    }
}