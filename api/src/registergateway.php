<?php

class RegisterGateway extends Gateway  {


    public function __construct() {
        $this->setDatabase(USER_DATABASE);
    }
    public function register($email, $password) {
        $id = rand(10, 100000);
        $sql = "INSERT into user (id, email, password) VALUES ('$id','$email','$password')";
        $result = $this->getDatabase()->executeSQL($sql);
    }

}