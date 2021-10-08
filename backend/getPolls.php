<?php
// Get all polls from database
if (isset($_GET['user_id'])){
    $user_id = $_GET['user_id'];
} else {
    $user_id = false;
}

include_once 'pdo-connect.php';

try {
    if ($user_id == false){
        $stmt = $conn->prepare("SELECT id, topic, start, end, user_id FROM poll");
    } else {
        $stmt = $conn->prepare("SELECT id, topic, start, end, user_id FROM poll WHERE user_id = :userid");
        $stmt->bindparam(':userid', $user_id);
    }

    if ($stmt->execute() == false){
        $data = array(
            'error' => 'Error occured!'
        );
    } else {
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $data = $result;
    }
} catch (PDOException $e) {

    $data = array(
        'error' => 'tapahtui virhe tallennuksessa!!'
    );
}

header("Content-type: application/json;charset=utf-8");
echo json_encode($data);