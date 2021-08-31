<?php include_once 'layout/top.inc.php'; ?>
<?php include_once 'layout/nav.inc.php'; ?>

<div class="container"></div>

<form name="register">
    <fieldset>
      <legend>Register</legend>
      <div class="form-group">
        <label for="username" class="form-label mt-4">Username</label>
        <input name="username" type="username" class="form-control" id="name" placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="password" class="form-label mt-4">Password</label>
        <input name="password" type="password" class="form-control" id="passwd" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="password" class="form-label mt-4">Confirm password</label>
        <input name="confirmPassword" type="password" class="form-control" id="confirm" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="formFile" class="form-label mt-4">Default file input example</label>
        <input class="form-control" type="file" id="formFile">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>

</div>

  <script src="js/register.js"></script>

        <?php include_once 'layout/bottom.inc.php'; ?>