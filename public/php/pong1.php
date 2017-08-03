<?php

require "functions.php";

function pageController() {
var_dump(inputGet('count'));
if (inputHas('count') && inputHas('event')){
        $var = inputGet('count') + 1;
        echo inputGet('event');
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