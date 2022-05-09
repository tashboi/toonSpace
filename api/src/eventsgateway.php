<?php

class EventsGateway extends Gateway  {


    private $sql = "SELECT * from event";

    public function __construct() {
        $this->setDatabase(EVENTS_DATABASE);
    }

    public function findAll()
    {
        $this->sql.= ' ORDER BY title ASC';
        $result = $this->getDatabase()->executeSQL($this->sql);
        $this->setResult($result);
    }
    public function findRandom(){
        $this->sql .= " order by random() limit 1";
        $result = $this->getDatabase()->executeSQL($this->sql);
        $this->setResult($result);
    }
    public function findID($id){
        $this->sql .= " WHERE event.id = :id";
        $params = ["id" => $id];
        $result = $this->getDatabase()->executeSQL($this->sql, $params);
        if (count($result) > 0){
            $this->setResult($result);
        }else{
            $result = "No Event with this ID!";
            $this->setResult($result);
        }
    }
    public function sortDate(){
        $this->sql .= " ORDER BY date desc";
        $result = $this->getDatabase()->executeSQL($this->sql);
        $this->setResult($result);
    }


}

