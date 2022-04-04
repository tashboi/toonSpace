<?php
class CommentGateway extends Gateway  {

private $sql = "SELECT * FROM Comments JOIN Threads ON Comments.ThreadID = Threads.ThreadID";

public function __construct() {
    $this->setDatabase(THREAD_DATABASE);
}
public function findComments($id) {
    $this->sql .= " WHERE Threads.ThreadID = :id ORDER BY Comments.cOrder ASC";
    $params = ["id" => $id];
    $result = $this->getDatabase()->executeSQL($this->sql, $params);
    $this->setResult($result);
}
public function newComments($id, $userid, $order, $content, $cid) {
    $sql = "INSERT into Comments (ThreadID, AuthorID, cOrder, cContent, CommentID ) VALUES ('$id','$userid','$order','$content','$cid')";
    $result = $this->getDatabase()->executeSQL($sql);
}

}