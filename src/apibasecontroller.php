<?php

class ApiBaseController extends Controller {

    protected function processRequest() {
        $data['author']['name'] = "My name";
        $data['message'] = "This is a basic Web API";
        $data['documentation'] = "http://www.google.com";

        return $data;
    }
}