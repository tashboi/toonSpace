<?php

class ApiEventsController extends Controller {

    protected function setGateway() {
        $this->gateway = new EventsGateway();
    }

    protected function processRequest() {

        $id = $this->getRequest()->getParameter("id");
        $upcoming = $this->getRequest()->getParameter("upcoming");
        

        if ($this->getRequest()->getRequestMethod() === "GET")
        {
            if (!is_null($id)) {
                // Check to see if the id equals random
                if ($id === "random") {
                    // invoke a newly defined method
                    $this->getGateway()->findRandom($id);
                } else {
                    $this->getGateway()->findID($id);
                }
            }
            elseif ($upcoming) {
                $this->getGateway()->sortDate($upcoming);
            }
            else {
                $this->getGateway()->findAll();
            }

        }else{$this->getResponse()->setMessage("Method not allowed");
            // Set a 405 code
            $this->getResponse()->setStatusCode(405);
        }



        return $this->getGateway()->getResult();


    }
}

