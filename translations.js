<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Information</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<div class="background"></div>
<div class="overlay"></div>

<section class="hero">

<div class="glass-card">

<h1 id="infoTitle">
Before You Continue
</h1>

<p id="infoText">
For your privacy and security, please review the following information before proceeding.
</p>

<div class="features">

<div class="feature">
✔ <span id="info1">Private Conversation</span>
</div>

<div class="feature">
✔ <span id="info2">Secure Connection</span>
</div>

<div class="feature">
✔ <span id="info3">Verified Platform</span>
</div>

</div>

<div class="buttons">

<a href="index.html" class="btn telegram">

← Back

</a>

<a id="continueLink" href="#" class="btn whatsapp">

Continue

</a>

</div>

</div>

</section>

<script>

const CONFIG={

continueLink:""

};

document.getElementById("continueLink").href=CONFIG.continueLink;

</script>

</body>

</html>