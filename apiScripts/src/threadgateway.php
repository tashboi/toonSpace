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
public function newThread($tid,$uid,$title,$content){
    $sql = "INSERT into Threads (ThreadID, AuthorID, ThreadTitle, ThreadContent) VALUES ('$tid','$uid','$title','$content')";
    $result = $this->getDatabase()->executeSQL($sql);
}
public function editThread($tid,$content){
    $sql = "UPDATE Threads SET ThreadContent = '$content' WHERE ThreadID = '$tid'";
    $result = $this->getDatabase()->executeSQL($sql);
}
public function deleteThread($tid){
    $sql = "DELETE FROM Threads WHERE ThreadID = '$tid'";
    $result = $this->getDatabase()->executeSQL($sql);
}
}