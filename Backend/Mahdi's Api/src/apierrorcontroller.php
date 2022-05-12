<?php
class ApiErrorController extends Controller {

protected function processRequest() {
    $data['message'] = "Endpoint not found";
    $data['documentation'] = "http://www.google.com";

    return $data;
}
}