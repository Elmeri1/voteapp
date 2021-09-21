<?php 

if (!isset($_POST['topic']) || !isset($_POST['option1'])){
    $data = array(
        'error' => 'POST_dataa ei saatavilla'
    );
    die();
}

include_once 'pdo-connect.php';

try{
    $stmt = $conn->prepare("INSERT INTO vote (topic, start, end, user_id) 
                            VALUES (:topic, :start, :end, :user_id);");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':pwd', $password);
    if($stmt->execute() == false){
        $data = array(
            'error' => 'tapahtui virhe tallennuksessa'
        );
    } else {
        $data = array(
            'success' => 'Uusi käyttäjä on tallennettu'
        );
    }
} catch (PDOException $e) {
    if (strpos($e->getMessage(), '1062 Duplicate entry ')){
        $data = array(
            'error' => 'Käyttäjä on jo olemassa'
        );
    } else {
        $data = array(
            'error' => 'tapahtui virhe tallennuksessa'
        );
    }

}

$data = array(
    'success' => 'Uusi käyttäjä on tallennettu'
);

header("Content-type: application/json;charset=utf-8");
echo json_encode($data);