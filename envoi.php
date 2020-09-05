<html>
<head>
<meta charset="utf-8">
<title>Message</title>
</head>

<?php
mail('oligolle@gmail.com', 'Test envoi', 'expediteur@gmail.com');
var_dump(mail($mail,$sujet,$message,$header));
?>

</html>