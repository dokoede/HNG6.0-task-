<?php
$con = mysqli_connect("localhost","root","root","teamdominicians");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>