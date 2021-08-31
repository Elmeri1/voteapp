<?php

if (!isset($_POST['username']) || !isset($_POST['password'])){
    echo 'tapahtui virhe, ei post-dataa saatavilla';
    die();
}

$username = $_POST['username'];
$password = $_POST['password'];

include_once 'pdo-connect.php';

$stmt = $conn->prepare("")

echo 'tallennettu'; 