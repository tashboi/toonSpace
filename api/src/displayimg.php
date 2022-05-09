<?php
$dirname = "imgs/web/";
$images = glob($dirname."*.jpg");
echo "<div class='grid-container'>";
foreach($images as $image) {
    echo $image;
    echo '<div class="grid-item"><img src="'.$image.'" height="250"width="250"/></div>';

}
echo "</div>";