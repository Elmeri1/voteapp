<?php session_start(); ?>
<?php include_once 'layout/top.inc.php'; ?>
<?php include_once 'layout/nav.inc.php'; ?>
      

    
<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">Welcome to VoteApp</a>
    <?php if (isset($_SESSION['logged_in'])): ?>
      <p>Olet kirjautunut käyttäjänä <?php echo $_SESSION['user_name']; ?></p>
    <?php endif; ?>
</div>

<div class="container">

  <div id="msg" class="alert alert-dismissible alert-warning d-none">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <h4 class="alert-heading">Onnistui</h4>
    <p class="mb-0"></a>.</p>
  </div>

</div>

<script src="js/common.js"></script>

<?php include_once 'layout/bottom.inc.php'; ?>