<?php
$username = $_POST['username'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$password = $_POST['password'];
$phone = $_POST['phone'];

if (!empty($username) || !empty($email) || !empty($gender) || !empty($password) || !empty($phone)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "teamdominicians";

    //connection
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('connect Error('. mysqli_connect_error().')'. mysqli_connect_error());
    } else {
        $SELECT = "SELECT u_email from users where u_email = ? Limit 1";
        $INSERT = "INSERT Into users (u_username, u_email, u_gender, u_password, u_phone) values(?, ?, ?, ?, ?)";

        //Prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $u_email);
        $stmt->execute();
        $stmt->bind_result($u_email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;
        if ($rnum==0) {
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssssi", $u_username, $u_email, $u_gender, $u_password, $u_phone);
            $stmt->execute();
            echo "New record inserted successfully";
        }else {
            echo "Email already exists";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All field are required";
    die();
}


?>