<?php
	include_once("fun_hal.php");
	/* Get page variable */
	if(isset($_GET["page"])) {
		$page_id = htmlspecialchars($_GET["page"]);
	} else {
		$page_id = "1";
	}
	
	/* Print header */
	include("header.php");
	
	/* Print content */
	switch($page_id) {
		case "2":
			$curPage = "projects.php";
			break;
		case "3":
			$curPage = "pub.php";
			break;
		case "4":
			$curPage = "src.php";
			break;
		case "5":
			$curPage = "teaching.php";
			break;
		default:
			$curPage = "bio.php";
	}
	include($curPage);
	
	/* Print footer */
	include("footer.php");
?>