<?php

class UserGateway extends Gateway  {

    public function __construct() {
        $this->setDatabase(USER_DATABASE);
    }
    public function findPassword($email)
{
    $sql = " Select id, password from user where email = :email";
    $params = [":email" => $email];
    $result = $this->getDatabase()->executeSQL($sql, $params);
    $this->setResult($result);
}
    public function getID($email)
    {
        $sql = " Select id from user where email = :email";
        $params = [":email" => $email];
        $result = $this->getDatabase()->executeSQL($sql, $params);
        return $result;
    }
}