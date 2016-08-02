<!doctype html>
<?php

function startsWith($haystack, $needle) {
    // search backwards starting from haystack length characters from the end
    return $needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== FALSE;
}

function cleanPdfUrl($Url) {
	if(startsWith($Url, "https://")) {
		return $Url;
	} else if(startsWith($Url, "/")) {
		return "https://hal.archives-ouvertes.fr".$Url;
	} else {
		return "https://hal.archives-ouvertes.fr/".$Url;
	}
}

?>

<html lang="fr">
<header>
	<meta charset="UTF-8">
</header>
<body>
<?php
	$json_url = "http://api-preprod.archives-ouvertes.fr/search/?q=*romain%20tavenard*&wt=json&fl=docType_s,halId_s,authFullName_s,producedDateY_i,fileMain_s,title_s,conferenceTitle_s,bookTitle_s,journalTitle_s,&rows=1000";
	$contents = utf8_encode(file_get_contents($json_url));
	$results = json_decode($contents);
	/*var_dump($results);*/
	
	$nPapers = $results->{"response"}->{"numFound"};
	$startId = $results->{"response"}->{"start"};
	
	foreach(Array("ART" => "Journals", "COMM" => "Conferences", "THESE" => "Thesis") as $pubType => $pubTypeName) {
		echo("<h1>".$pubTypeName."</h1>");
		for($i = $startId; $i < $nPapers; $i++) {
			$curPaper = $results->{"response"}->{"docs"}[$i];
			if($curPaper->{"docType_s"} == $pubType) {
				$pubTitle = ucwords(strtolower(utf8_decode($curPaper->{"title_s"}[sizeof($curPaper->{"title_s"})-1])));
				$pubAuthors = "";
				foreach($curPaper->{"authFullName_s"} as $authorStr) {
					$pubAuthors = $pubAuthors.utf8_decode($authorStr). " ";
				}
				if($pubType == "ART") {
					$pubPlace = utf8_decode($curPaper->{"journalTitle_s"});
				} else {
					if($curPaper->{"bookTitle_s"} != "") {
						$pubPlace = utf8_decode($curPaper->{"bookTitle_s"});
					} else {
						$pubPlace = utf8_decode($curPaper->{"conferenceTitle_s"});
					}
				}
				$pubYear = $curPaper->{"producedDateY_i"};
				if($curPaper->{"fileMain_s"} == "" && $curPaper->{"halId_s"} != "") {
					$pubPdfUrl = cleanPdfUrl($curPaper->{"halId_s"});
				} else {
					$pubPdfUrl = cleanPdfUrl($curPaper->{"fileMain_s"});
				}
				echo("<p class=\"condensed\">".$pubAuthors."<br /><a href=\"".$pubPdfUrl."\">".$pubTitle."</a><br />".$pubPlace." ".$pubYear."<br /></p>");
				echo("<br />\n");
			}
		}
	}
?>
</body>
</html>