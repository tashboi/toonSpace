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


}

