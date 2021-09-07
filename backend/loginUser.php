<?php
if (!isset($_POST['username']) || !isset($_POST['password'])){
    $data = array(
        'error' => 'POST_dataa ei saatavilla'
    );
    die();
}

$username = $_POST['username'];
$password = $_POST['password'];

include_once 'pdo-connect.php';

try{
    $stmt = $conn->prepare("SELECT id, username, pwd FROM user WHERE username =:username");
    $stmt->bindParam(':username', $username);
    
    if($stmt->execute() == false){
        $data = array(
            'error' => 'tapahtui virhe tallennuksessa'
        );
    } else {
        $result = $

        $data = array(
            'success' => 'onnistui'
        );
    }
} catch (PDOException $e) {

        $data = array(
            'error' => 'tapahtui virhe tallennuksessa!!'
        );

}
header("Content-type: application/json;charset=utf-8");
echo json_encode($data);
?>