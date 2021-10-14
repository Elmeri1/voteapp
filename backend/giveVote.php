<?php 

// giveVote.php - save vote for option in database.


if (!isset($_GET['id'])){
    header('location: ../index.php');
}

$optionid = $_GET['id'];

include_once 'pdo-connect.php';

/*
Tarkistetaan ennen äänestystä seuraavat asiat

1) Onko käyttäjä äänestänyt kyseistä äänestystä

2) äänestystä voi edelleen äänestää:
    eli tämä päivämäärä on alku ja loppu -päivän välissä

Täytyyy hakea tietoja poll-taulusta
*/

$data = array();

try {
    $stmt = $conn->prepare("SELECT id, start, end
                            FROM poll
                            WHERE id = (
                                SELECT poll_id
                                FROM option
                                WHERE id = :optionid
                            );");

                            $stmt->bindParam(":optionid", $optionid);
// executesssa oli kirjoitusvirhe
    if ($stmt->execute() == false){
        $data['error'] = 'Error occured!';
    } else {
        // Haetaan äänestyksen id
        $poll = $stmt->fetch(PDO::FETCH_ASSOC);

        // Haetaan äänestyksen id
        $pollid = $poll['id'];

        // Selvitetään onko käyttäjä jo äänestänyt kyseistä äänestystä
        $cookie_name = "poll_$pollid";
        if (isset($_COOKIE[$cookie_name])){
            $data['warning'] = 'You already voted this poll';
        }
    }

    // Jos ei tullut varoitusta, niin voidaan tallentaa ääni
    if (!array_key_exists('warning', $data)){

        $stmt = $conn->prepare("UPDATE option SET votes = votes + 1 WHERE (id = :optionid);");
        $stmt->bindParam(':optionid', $optionid);
    
    if ($stmt->execute() == false){
        $data['error'] = 'Error occured';
    } else {
            $data['success'] = 'Vote successful!';

            // Asetetaan eväste
            $cookie_name = "poll_$pollid";
            $cookie_value = 1;

            setcookie($cookie_name, $cookie_value, time() + (86400*30), "/");
        }
    }

} catch (PDOException $e) {
    $data = array(
        'error' => 'tapahtui virhe tallennuksessa!!'
    );

}


header("Content-type: application/json;charset=utf-8");
echo json_encode($data);

// UPDATE option SET votes = votes+1 WHERE (id = 21);