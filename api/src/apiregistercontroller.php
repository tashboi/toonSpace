<?php
use Firebase\JWT\JWT;

Class ApiRegisterController extends Controller {
    protected function setGateway() {
        $this->gateway = new RegisterGateway();
    }
    protected function processRequest() {
        $data = [];

        $email = $this->getRequest()->getParameter("email");
        $password = $this->getRequest()->getParameter("password");
        $password = password_hash($password, PASSWORD_DEFAULT);

        if ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($email) && !is_null($password)) {
                $this->getGateway()->register($email, $password);
                                
            } 
          

        } else {
            $this->getResponse()->setMessage("Method not allowed");
            $this->getResponse()->setStatusCode(405);
        }

        return $data;
    }
}
