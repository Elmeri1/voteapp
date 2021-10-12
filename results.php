<?php session_start(); ?>
<?php
if (!isset($_GET['id'])){
    header('Location: index.php');
}

$id = intval($_GET['id']);

?>
<?php include_once 'layout/top.inc.php'; ?>
<?php include_once 'layout/nav.inc.php'; ?>

<div class="container">

    <h1></h1>

    <ul id="optionsUl" class="list-group">
        
    </ul>

</div>

<script src="js/common.js"></script>
<script src="js/results.js"></script>

<?php include_once 'layout/bottom.inc.php'; ?>