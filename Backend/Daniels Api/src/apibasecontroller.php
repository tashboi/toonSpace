<?php

class ApiBaseController extends Controller {

    protected function processRequest() {
        $data['author']['name'] = "Daniel Fimister";
        return $data;
    }
}