<?php
class ApiEditCommentController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new CommentGateway();
    }
    
    protected function processRequest() {
        $content = $this->getRequest()->getParameter("content");
        $cid = $this->getRequest()->getParameter("commentid");
            
        
        if ($this->getRequest()->getRequestMethod() === "GET") {$this->getGateway()->findComments($id);}
        else if ($this->getRequest()->getRequestMethod() === "POST") {$this->getGateway()->editComment($content, $cid);}
        
        return $this->getGateway()->getResult();
    }
}