<?php
  
/**
 * Components for Webpage
 *
 * This class provides static methods for creating webpage components 
 *
 * @author Anon Anon w123456789
 */
class WebpageComponents 
{
    public static function webpageHead($title) {
        $css = BASEPATH . "assets/style.css";
        return <<<EOT
        <!DOCTYPE html>
        <html lang="en-gb">
        <head>
            <title>$title</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href=$css>
        </head>
        <body>
EOT;
    }

    public static function webpageFoot() {
        return <<<EOT
        </body>
        </html>
EOT;
    }

    /**
     * Create a menu
     *
     * This method creates a menu as an unordered list. This is best practice for
     * menus. It can be styled using CSS to better look like a menu.
     *
     * @param array   $links      Associative array of name=>link pairs for menu
     * @param string  $activePage Name of active page (should match a name in $links)
     */
    public static function menu($links, $activePage) {
        $menu = "<nav><ul>";
        
        foreach($links as $name=>$link) {
            $active = ($name === $activePage) ? "active" : "";
            $menu .= "<li><a href='$link' class='$active'>$name</a></li>";
        }

        $menu .= "</ul></nav>";
        return $menu;
    }
}