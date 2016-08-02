<?php
	if (!isset($page_id)) {
		$page_id = "1";
	}

	$menu_items = array(
		"Bio &amp; Contact" => "fa-at",
		"Projects" => "fa-flask",
		"Publications" => "fa-book",
		"Source code" => "fa-code",
		"Teaching" => "fa-graduation-cap"
	);

	$menu_keys = array_keys($menu_items);
?>

<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8"> <![endif]-->
<!--[if IE 9 ]><html class="ie ie9"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html><!--<![endif]-->
	<head>
		<title><?php echo($menu_keys[intval($page_id) - 1]); ?> |  Romain Tavenard</title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
		<link rel='stylesheet' id='sds-google-web-font-css'  href='http://fonts.googleapis.com/css?family=Lato%3A400&#038;ver=4.0' type='text/css' media='all' />
		<link rel='stylesheet' id='socialize-based--css'  href='../css/research.php' type='text/css' media='all' />
		<script language="javascript" type="text/javascript">
			function showHide(shID) {
			   if (document.getElementById(shID)) {
			      if (document.getElementById(shID).style.display != 'none') {
			         document.getElementById(shID).style.display = 'none';
			      } else {
			         document.getElementById(shID).style.display = 'block';
			      }
			   }
			}
	</script>
	</head>
	<body lang="fr-FR" class="page page-template no-customize-support custom-background">
		<!-- Header	-->
		<header id="header" class="cf">
			<div class="in">
				<section class="logo-box logo-box-no-header-cta logo-box-full-width">
					<div id="title-slogan">
						<p id="title" class="site-title site-title-no-logo no-logo">Romain Tavenard</p>
						<p id="slogan" class="slogan ">
							Assistant Professor (MCF)<br />
							Université de Rennes 2 / LETG-COSTEL<br />
							Associate member at IRISA-Obelix group
						</p>
					</div>

					<nav class="primary-nav-container">
					<ul id="primary-nav" class="primary-nav menu">
						<?php
							$idx_item = 1;
							foreach($menu_items as $item_id => $item_name) {
								if($idx_item == $page_id) {
									echo("<li id=\"menu-item-".$idx_item."\" class=\"menu-item current-menu-item\"><a href=\"?page=".$idx_item."\"><i class=\"fa ".$item_name." fa-2x\"></i><p class=\"menu-text\">".$item_id."</p></a></li>");
								} else {
									echo("<li id=\"menu-item-".$idx_item."\" class=\"menu-item\"><a href=\"?page=".$idx_item."\"><i class=\"fa ".$item_name." fa-2x\"></i><p class=\"menu-text\">".$item_id."</p></a></li>");
								}
								$idx_item++;
							}
						?>
					</ul>

					</nav>
				</section>
			</div>
		</header>
