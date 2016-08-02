<?php

function strAuthors($arrAuthors) {
	$strRet = "";
	$nAuthors = sizeof($arrAuthors);
	for($i = 0; $i < $nAuthors; $i++) {
		if($i > 0) {
			$strRet = $strRet." - ";
		}
		$curAuthor = utf8_decode($arrAuthors[$i]);
		$arrCurAuthor = explode(" ", $curAuthor);
		$strCurAuth = "";
		for($j = 0; $j < sizeof($arrCurAuthor); $j++) {
			if($j == 0) {
				$arrFirstName = explode("-", $arrCurAuthor[$j]);
				for($k = 0; $k < sizeof($arrFirstName); $k++) {
					$strCurAuth = $strCurAuth.$arrFirstName[$k][0].". ";
				}
			} else {
				$strCurAuth = $strCurAuth.$arrCurAuthor[$j]." ";
			}
		}
		$strRet = $strRet.$strCurAuth;
	}
	return trim($strRet);
}


function strPaper($dataPaper, $i, $showNumber = false) {
	if($dataPaper == null) {
		return "";
	}
	$pubTitle = utf8_decode($dataPaper->title_s[sizeof($dataPaper->title_s)-1]);
	if($dataPaper->halId_s == "hal-00872048") {
		$pubTitle = ucwords(strtolower($pubTitle));
	}
	$pubAuthors = strAuthors($dataPaper->authFullName_s);
	$pubType = $dataPaper->docType_s;
	if($pubType == "ART") {
		$pubPlace = utf8_decode($dataPaper->journalTitle_s);
	} else if($pubType == "UNDEFINED" || $pubType == "REPORT") {
		$pubPlace = "Research Report,";
	} else if($pubType == "THESE") {
		$pubPlace = "Thesis,";
	} else {
		if($dataPaper->bookTitle_s != "") {
			$pubPlace = utf8_decode($dataPaper->bookTitle_s);
		} else {
			$pubPlace = utf8_decode($dataPaper->conferenceTitle_s);
		}
	}
	$pubYear = $dataPaper->producedDateY_i;
	if($dataPaper->fileMain_s == "" && $dataPaper->halId_s != "") {
		$localFilename = "pdf/".$dataPaper->halId_s.".pdf";
		if(file_exists($localFilename)) {
			$pubPdfUrl = $localFilename;
		} else {
			$pubPdfUrl = $dataPaper->halId_s;
		}
	} else {
		$pubPdfUrl = $dataPaper->fileMain_s;
	}
	if(sizeof($dataPaper->files_s) > 1) {
		$suppURL = utf8_decode($dataPaper->files_s[sizeof($dataPaper->files_s)-1]);
		$suppStr = "<a href=\"".$suppURL."\">Supplementary material</a>";
	} else {
		$suppStr = "";
	}
	$s = "<p class=\"condensed\">";
	if($showNumber) {
		$s .= "[".$i."] ";
	}
	$s .= $pubAuthors.". <a href=\"".$pubPdfUrl."\">".$pubTitle."</a>. ".$pubPlace." ".$pubYear.". ".$suppStr."<br />\n";
	$s .= "<a href=\"javascript:showHide('bibtex_".$i."');\" id=\"bibtex_".$i."-show\">Show/Hide BiBTeX</a>";
	$s .= "<div id=\"bibtex_".$i."\" style=\"display:none;\"><pre>".$dataPaper->label_bibtex."</pre></div></p>\n";
	return $s;
}

function pickThePaper($paperList, $bibLabel) {
	foreach($paperList as $paper) {
		if($paper->halId_s == $bibLabel) {				
			return $paper;
		}
	}
	return null;
}


function echoPaper($paperList, $bibLabel, $i) {
	echo(strPaper(pickThePaper($paperList, $bibLabel), $i));
}

function echoLastUpdate($page) {
	echo(date("F Y", filemtime($page)));
}

?>
