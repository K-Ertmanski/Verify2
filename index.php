<?php
session_start();

if (isset($_SESSION["user_id"])) {
    $mysqli = require __DIR__ . "/database.php";
    $sql = "SELECT * FROM user WHERE id = {$_SESSION["user_id"]}";
    $result = $mysqli->query($sql);
    $user = $result->fetch_assoc();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro-Artisan</title>
    <link rel="stylesheet" href="index.css"> <!-- Link to main stylesheet -->
    <link rel="stylesheet" href="sidebar.css"> <!-- Link to sidebar stylesheet -->
</head>
<body>

<div class="banner">
    <img src="RetroArtisanBaner.png" alt="RETRO ARTISAN Baner Logo med Capybara">
</div>

<ul class="navbar">
    <li><a class="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
</ul>

<div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="login.php">Logga in</a>
    <a href="signup.html">Skapa konto</a>
</div>

<div id="main">
    <button class="openbtn" onclick="openNav()">☰ Menu</button>  

    <div class="container-wrapper">

        <div class="container">
            <h1>Välkommen till Retro-Artisan!</h1>

            <?php if (isset($user)): ?>
                <p>Välkommen <?= htmlspecialchars($user["name"]) ?>!</p>
                <p><a href="logout.php">Logga ut</a></p>
            <?php else: ?>
                <p><a href="login.php">Logga in</a> eller <a href="signup.html">Skapa konto</a></p>
                <br><br>
                <h2>Har du inget konto, men är intreserad i 2D-grafik och pixel art? Fortsätt som <a href="1-startsida.html">gäst</a>!</h2>
            <?php endif; ?>  
        </div>

        <div class="container">
            <h1>Second Container Title</h1>
            <p>This is the content of the second container.</p>
            <!-- Add more content here as needed -->
        </div>
        
    </div>

</div>

<script>
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.zIndex = "1001"; /* Ensure sidebar is above everything */
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
</script>

</body>
</html>
