<?php
    include 'connect/db.inc.php';
    // Login Api
    header('Content-Type: application/json');

    function password($pass) {
        return md5(sha1($pass));
    }

    function clean($field) {
        return mysql_real_escape_string(trim($field));
    }

    if(isset($_POST)) {
        $email = $_POST['email'];
        $hashed_pass = password($_POST['password']);
        $sql="SELECT * FROM users WHERE `u_email` = '$email' && `u_password` = '$hashed_pass'";
        $result = mysqli_query($con,$sql);
        $token = sha1(mt_rand());
        if($result->num_rows > 0){
            $user = mysqli_fetch_array($result,MYSQLI_ASSOC);
            // echo(http_response_code(200));
            echo json_encode(array('status' => 'success','user'=> $user, 'token' => $token ));
        }else{
            echo(http_response_code(401));
            echo json_encode(array('status' => 'error','message'=> 'Invalid User Credentials'));
        };
    }
?>