<?php include 'database.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>shoutbox</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
  </head>
  <body>
    <div id='container'>
      <header>
        <h1>JS Shoutbox</h1>
      </header>
      <div id="shouts">
        <ul>
          <li></li>
        </ul>
      </div>
      <footer>
        <form>
          <label for="">Name: </label>
          <input type="text" id="name" value="">
          <label for="">Shout Text: </label>
          <input type="text" id="shout" value="">
          <input type="submit" id="submit" value="SHOUTS!">
        </form>
      </footer>
    </div>
  </body>
</html>
