<?php

class ApiAuthenticateController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new UserGateway();
    }
    
    protected function processRequest() {
        $data = [];

        // Only support POST requests
        // Return a 405 status otherwise
        if ($this->getRequest()->getRequestMethod() === "POST") {


        } else {
            $this->getResponse()->setMessage("Method not allowed");
            $this->getResponse()->setStatusCode(405);
        }

        return $data;
    }
}