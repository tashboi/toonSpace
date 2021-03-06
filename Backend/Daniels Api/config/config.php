<?php

define('BASEPATH', '/26test/new/');
define('USER_DATABASE', 'db/user.sqlite'); 
define('THREAD_DATABASE', 'db/threads.sqlite'); 
define('DEVELOPMENT_MODE', true);
define('SECRET_KEY', '4O235jPqhv');

ini_set('display_errors', DEVELOPMENT_MODE);
ini_set('display_startup_errors', DEVELOPMENT_MODE);
  
include 'config/autoloader.php';
spl_autoload_register("autoloader");

include 'config/htmlexceptionhandler.php';
include 'config/jsonexceptionhandler.php';
set_exception_handler("JSONexceptionHandler");

include 'config/errorhandler.php';
set_error_handler("errorHandler");