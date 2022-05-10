<?php
use Firebase\JWT\JWT;

class ApiAuthenticateController extends Controller {
    
    protected function setGateway() {
        $this->gateway = new UserGateway();
    }
    
    protected function processRequest() {
        $data = [];

        $email = $this->getRequest()->getParameter("email");
        $password = $this->getRequest()->getParameter("password");

        if ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($email) && !is_null($password)) {

                $this->getGateway()->findPassword($email);

                if (count($this->getGateway()->getResult()) == 1) {
                    $hashpassword = $this->getGateway()->getResult()[0]['password'];
                    if (password_verify($password, $hashpassword)) {
                        $key = SECRET_KEY;
                      
                        // The token will contain two items of data, a
                        // user_id and an exp (expiry) time. 
                        $payload = array(
                            "user_id" => 1,
                            "exp" => time() + 7776000
                        );
                    
                        // Use the JWT class to encode the token
                        $jwt = JWT::encode($payload, $key, 'HS256');
                    
                        $data = ['token' => $jwt];
                     
                    }
                }
            } 
          
            // If the token was not created then
            // return a 401 unauthorised response.
            if (!array_key_exists('token',$data)) {
                $this->getResponse()->setMessage("Unauthorized");
                $this->getResponse()->setStatusCode(401);
            }

        } else {
            $this->getResponse()->setMessage("Method not allowed");
            $this->getResponse()->setStatusCode(405);
        }

        return $data;
    }
}