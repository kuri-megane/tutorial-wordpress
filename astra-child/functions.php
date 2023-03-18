<?php

/**
 * functions.php
 * 
 * Description: child thema of astra for nbaku.makenexus.com
 * Author: kuri-megane
 * Author URI: https://github.com/kuri-megane
 */

function enqueue_scripts()
{
    // css
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));

    // js
    wp_enqueue_script('jquery-js', '//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/up-overlay.js');
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');
