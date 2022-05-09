
<?php
class ApiDeleteCommentController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new CommentGateway();
    }
    
    protected function processRequest() {
        $cid = $this->getRequest()->getParameter("commentid");
            
        
        if ($this->getRequest()->getRequestMethod() === "GET") {$this->getGateway()->findComments($cid);}
        else if ($this->getRequest()->getRequestMethod() === "POST") {$this->getGateway()->deleteComment($cid);}
        
        return $this->getGateway()->getResult();
    }
}