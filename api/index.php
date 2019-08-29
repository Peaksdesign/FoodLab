<?php
require_once("DB.php");

$db = new DB("localhost", "api-lab", "api-lab", "qYX3h6q9NLW8w");

if ($_SERVER['REQUEST_METHOD'] == "GET") {

        if ($_GET['url'] == "auth") {



        }

} else if ($_SERVER['REQUEST_METHOD'] == "POST") {

        if ($_GET['url'] == "auth") {
                $postBody = file_get_contents("php://input");
                $postBody = json_decode($postBody);

                if(!isset($postBody->email) || !isset($postBody->password)){
                  echo '{ "Error": "One or more credentials missing." }';
                  http_response_code(401);
                  die;
                }
                $email = $postBody->email;
                $password = $postBody->password;

                if ($db->query('SELECT email FROM users WHERE email=:email', array(':email'=>$email))) {
                        if (password_verify($password, $db->query('SELECT password FROM users WHERE email=:email', array(':email'=>$email))[0]['password'])) {
                                $cstrong = True;
                                $token = bin2hex(openssl_random_pseudo_bytes(64, $cstrong));
                                $user_id = $db->query('SELECT user_id FROM users WHERE email=:email', array(':email'=>$email))[0]['user_id'];
                                $db->query('INSERT INTO login_tokens (token, user_id) VALUES (:token, :user_id)', array(':token'=>sha1($token), ':user_id'=>$user_id));
                                echo '{ "Token": "'.$token.'" }';
                                // echo '{ "Success": "User verified. }';
                                http_response_code(200);
                        } else {
                                echo '{ "Error": "Wrong credentials. }';
                                http_response_code(401);
                        }
                } else {
                        echo '{ "Error": "User do not exist. }';
                        http_response_code(401);
                }

        }
        if ($_GET['url'] == "registration") {
                $postBody = file_get_contents("php://input");
                $postBody = json_decode($postBody);

                if(!isset($postBody->email) || !isset($postBody->password)){
                  echo '{ "Error": "One or more credentials are missing." }';
                  http_response_code(401);
                  die;
                }
                $email = $postBody->email;
                $password = password_hash($postBody->password, PASSWORD_DEFAULT);

                if (!$db->query('SELECT email FROM users WHERE email=:email', array(':email'=>$email))) {
                  if (!$db->query('INSERT INTO users (email, password) VALUES (:email, :password)', array(':email'=>$email, ':password'=>$password))) {
                    echo '{ "Success": "User created successfully. }';
                    http_response_code(200);
                  } else {
                          echo '{ "Error": "Something went wrong. }';
                          http_response_code(401);
                  }
                } else {
                        echo '{ "Error": "User already exist. }';
                        http_response_code(403);
                }

        }
        if ($_GET['url'] == "user") {

                $postBody = file_get_contents("php://input");
                $postBody = json_decode($postBody);

                if( !isset($postBody->token) ){
                  echo '{ "Error": "Token missing." }';
                  http_response_code(401);
                  die;
                }
                $token = sha1($postBody->token);

                if ( $user_id = $db->query("SELECT user_id FROM login_tokens WHERE token=:token", array(':token'=>$token))[0]['user_id']) {
                  echo json_encode($db->query('SELECT email,firstName,lastName FROM users WHERE user_id=:user_id', array(':user_id'=>$user_id)));
                  http_response_code(200);
                } else {
                  echo '{ "Error": "Invalid token" }';
                  http_response_code(400);
                }

        }

}  else if ($_SERVER['REQUEST_METHOD'] == "DELETE") {

        if ($_GET['url'] == "auth") {

                $postBody = file_get_contents("php://input");
                $postBody = json_decode($postBody);

                if (isset($postBody->token)) {
                        $token = sha1($postBody->token);

                        if ($db->query("SELECT token FROM login_tokens WHERE token=:token", array(':token'=>$token))) {
                                $db->query('DELETE FROM login_tokens WHERE token=:token', array(':token'=>$token));
                                echo '{ "Status": "Success" }';
                                http_response_code(200);
                        } else {
                                echo '{ "Error": "Invalid token" }';
                                http_response_code(400);
                        }
                } else {
                        echo '{ "Error": "Malformed request" }';
                        http_response_code(400);
                }
        }
} else {
        http_response_code(405);
}
?>
