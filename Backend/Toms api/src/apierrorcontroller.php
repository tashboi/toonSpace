<?php

class ApiErrorController extends Controller {

    protected function processRequest() {
        $data = [];

        if ($this->getRequest()->getRequestMethod() === "GET") {
            $data['Error Code'] = "Error 404";
            $data['message'] = "Endpoint does not exist";
            return $data;
        }
        else{$this->getResponse()->setMessage("Method not allowed");
            $this->getResponse()->setStatusCode(405);
        }

        return $data;

    }
}

