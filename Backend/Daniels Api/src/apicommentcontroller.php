<?php
class ApiCommentController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new CommentGateway();
    }
    
    protected function processRequest() {
        $id = $this->getRequest()->getParameter("id");
        $userid = $this->getRequest()->getParameter("userid");
        $order = $this->getRequest()->getParameter("order");
        $content = $this->getRequest()->getParameter("content");
        $cid = $this->getRequest()->getParameter("commentid");
            
        
        if ($this->getRequest()->getRequestMethod() === "GET") {$this->getGateway()->findComments($id);}
        else if ($this->getRequest()->getRequestMethod() === "POST") {$this->getGateway()->newComments($id, $userid, $order, $content, $cid);}
        
        return $this->getGateway()->getResult();
    }
}