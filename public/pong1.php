<?php

function pageController() {

if (isset($_GET['count'])){
    if ($_GET['event'] == 'hit') {
        $var = $_GET['count'] + 1;
        echo $_GET['event'];
    }
} else {
    $var = 0;
}

return ['var' => $var];
}
    extract(pageController());
?>
<!doctype html>
<html>
    <head>
        <title>Counter</title>
    </head>
    <body>
    <h1>HITS = <?= $var ?></h1>
    <a href='pong1.php?event=hit&count=<?=$var?>'><button>HIT</button></a>
    <a href='failure.html'><button>MISS</button></a>
    </body>
</html>