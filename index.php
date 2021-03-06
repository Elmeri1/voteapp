<?php session_start(); ?>
<?php include_once 'layout/top.inc.php'; ?>
<?php include_once 'layout/nav.inc.php'; ?>
      

    
<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">Welcome to VoteApp</a>
    <?php if (isset($_SESSION['logged_in'])): ?>
      <p>Olet kirjautunut käyttäjänä <?php echo $_SESSION['username']; ?></p>
    <?php endif; ?>
</div>

<div class="container">

  <div id="msg" class="alert alert-dismissible alert-warning d-none">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <h4 class="alert-heading">Onnistui</h4>
    <p class="mb-0"></a>.</p>
  </div>

  <h2>Votes</h2>
  <button class="btn btn-info" onclick="showPolls('old')">Show old polls</button>
  <button class="btn btn-info" onclick="showPolls('future')">Show future polls</button>
  <button class="btn btn-info" onclick="showPolls('current')">Show current polls</button>
  <ul id="votesUl" class="list-group">
  </ul>

</div>

<script src="js/index.js"></script>
<script src="js/common.js"></script>

<?php include_once 'layout/bottom.inc.php'; ?>