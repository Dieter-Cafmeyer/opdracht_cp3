<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Avian Avoider</title>
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>

        <div class="container">
            <?php if(!empty($_SESSION['info'])): ?><div class="alert alert-success"><?php echo $_SESSION['info'];?></div><?php endif; ?>
            <?php if(!empty($_SESSION['error'])): ?><div class="alert alert-danger"><?php echo $_SESSION['error'];?></div><?php endif; ?>

            <?php echo $content; ?>
        </div>


    </body>
</html>