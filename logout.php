<?php
session_start();
session-destroy();
unset($_SESSION);
header('Location: index.php');