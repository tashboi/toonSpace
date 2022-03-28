<?php

class UserGateway extends Gateway  {

    public function __construct() {
        $this->setDatabase(USER_DATABASE);
    }

}