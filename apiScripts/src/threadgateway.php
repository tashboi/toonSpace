<?php
class ThreadGateway extends Gateway  {

private $sql = "SELECT Threads.ThreadID, Threads.AuthorID, Threads.ThreadTitle, Threads.ThreadContent FROM Threads";

public function __construct() {
    $this->setDatabase(THREAD_DATABASE);
}
public function findAll() {
    $result = $this->getDatabase()->executeSQL($this->sql);
    $this->setResult($result);
}

}