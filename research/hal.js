function GetAjaxObject() {
    var xmlHttp=null;
    try{
        xmlHttp=new XMLHttpRequest();
    } catch(e) {
        try{
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}
var blacklist=[519490, 662905, 1254455, 916970];
var idhal='rtavenar';
var num_paper=0;
var header_pub = "<p>This publication list is generated automatically from my <a href=\"https://halshs.archives-ouvertes.fr/index/index\">HAL</a> record. You can also have a look at my <a href=\"http://scholar.google.com/citations?user=wn1XFWMAAAAJ&amp;hl=fr\">Google Scholar Profile</a> if you prefer.</p>";
var month=new Array('','jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec');
var countries={'AF':'Afghanistan','AX':'Aland Islands','AL':'Albania','DZ':'Algeria','AS':'American Samoa','AD':'Andorra','AO':'Angola','AI':'Anguilla','AQ':'Antarctica','AG':'Antigua And Barbuda','AR':'Argentina','AM':'Armenia','AW':'Aruba','AU':'Australia','AT':'Austria','AZ':'Azerbaijan','BS':'Bahamas','BH':'Bahrain','BD':'Bangladesh','BB':'Barbados','BY':'Belarus','BE':'Belgium','BZ':'Belize','BJ':'Benin','BM':'Bermuda','BT':'Bhutan','BO':'Bolivia','BA':'Bosnia And Herzegovina','BW':'Botswana','BV':'Bouvet Island','BR':'Brazil','IO':'British Indian Ocean Territory','BN':'Brunei Darussalam','BG':'Bulgaria','BF':'Burkina Faso','BI':'Burundi','KH':'Cambodia','CM':'Cameroon','CA':'Canada','CV':'Cape Verde','KY':'Cayman Islands','CF':'Central African Republic','TD':'Chad','CL':'Chile','CN':'China','CX':'Christmas Island','CC':'Cocos (Keeling) Islands','CO':'Colombia','KM':'Comoros','CG':'Congo','CD':'Congo, Democratic Republic','CK':'Cook Islands','CR':'Costa Rica','CI':'Cote D\'Ivoire','HR':'Croatia','CU':'Cuba','CY':'Cyprus','CZ':'Czech Republic','DK':'Denmark','DJ':'Djibouti','DM':'Dominica','DO':'Dominican Republic','EC':'Ecuador','EG':'Egypt','SV':'El Salvador','GQ':'Equatorial Guinea','ER':'Eritrea','EE':'Estonia','ET':'Ethiopia','FK':'Falkland Islands (Malvinas)','FO':'Faroe Islands','FJ':'Fiji','FI':'Finland','FR':'France','GF':'French Guiana','PF':'French Polynesia','TF':'French Southern Territories','GA':'Gabon','GM':'Gambia','GE':'Georgia','DE':'Germany','GH':'Ghana','GI':'Gibraltar','GR':'Greece','GL':'Greenland','GD':'Grenada','GP':'Guadeloupe','GU':'Guam','GT':'Guatemala','GG':'Guernsey','GN':'Guinea','GW':'Guinea-Bissau','GY':'Guyana','HT':'Haiti','HM':'Heard Island & Mcdonald Islands','VA':'Holy See (Vatican City State)','HN':'Honduras','HK':'Hong Kong','HU':'Hungary','IS':'Iceland','IN':'India','ID':'Indonesia','IR':'Iran, Islamic Republic Of','IQ':'Iraq','IE':'Ireland','IM':'Isle Of Man','IL':'Israel','IT':'Italy','JM':'Jamaica','JP':'Japan','JE':'Jersey','JO':'Jordan','KZ':'Kazakhstan','KE':'Kenya','KI':'Kiribati','KR':'Korea','KW':'Kuwait','KG':'Kyrgyzstan','LA':'Lao People\'s Democratic Republic','LV':'Latvia','LB':'Lebanon','LS':'Lesotho','LR':'Liberia','LY':'Libyan Arab Jamahiriya','LI':'Liechtenstein','LT':'Lithuania','LU':'Luxembourg','MO':'Macao','MK':'Macedonia','MG':'Madagascar','MW':'Malawi','MY':'Malaysia','MV':'Maldives','ML':'Mali','MT':'Malta','MH':'Marshall Islands','MQ':'Martinique','MR':'Mauritania','MU':'Mauritius','YT':'Mayotte','MX':'Mexico','FM':'Micronesia, Federated States Of','MD':'Moldova','MC':'Monaco','MN':'Mongolia','ME':'Montenegro','MS':'Montserrat','MA':'Morocco','MZ':'Mozambique','MM':'Myanmar','NA':'Namibia','NR':'Nauru','NP':'Nepal','NL':'The Netherlands','AN':'Netherlands Antilles','NC':'New Caledonia','NZ':'New Zealand','NI':'Nicaragua','NE':'Niger','NG':'Nigeria','NU':'Niue','NF':'Norfolk Island','MP':'Northern Mariana Islands','NO':'Norway','OM':'Oman','PK':'Pakistan','PW':'Palau','PS':'Palestinian Territory, Occupied','PA':'Panama','PG':'Papua New Guinea','PY':'Paraguay','PE':'Peru','PH':'Philippines','PN':'Pitcairn','PL':'Poland','PT':'Portugal','PR':'Puerto Rico','QA':'Qatar','RE':'Reunion','RO':'Romania','RU':'Russian Federation','RW':'Rwanda','BL':'Saint Barthelemy','SH':'Saint Helena','KN':'Saint Kitts And Nevis','LC':'Saint Lucia','MF':'Saint Martin','PM':'Saint Pierre And Miquelon','VC':'Saint Vincent And Grenadines','WS':'Samoa','SM':'San Marino','ST':'Sao Tome And Principe','SA':'Saudi Arabia','SN':'Senegal','RS':'Serbia','SC':'Seychelles','SL':'Sierra Leone','SG':'Singapore','SK':'Slovakia','SI':'Slovenia','SB':'Solomon Islands','SO':'Somalia','ZA':'South Africa','GS':'South Georgia And Sandwich Isl.','ES':'Spain','LK':'Sri Lanka','SD':'Sudan','SR':'Suriname','SJ':'Svalbard And Jan Mayen','SZ':'Swaziland','SE':'Sweden','CH':'Switzerland','SY':'Syrian Arab Republic','TW':'Taiwan','TJ':'Tajikistan','TZ':'Tanzania','TH':'Thailand','TL':'Timor-Leste','TG':'Togo','TK':'Tokelau','TO':'Tonga','TT':'Trinidad And Tobago','TN':'Tunisia','TR':'Turkey','TM':'Turkmenistan','TC':'Turks And Caicos Islands','TV':'Tuvalu','UG':'Uganda','UA':'Ukraine','AE':'United Arab Emirates','GB':'United Kingdom','US':'United States','UM':'United States Outlying Islands','UY':'Uruguay','UZ':'Uzbekistan','VU':'Vanuatu','VE':'Venezuela','VN':'Viet Nam','VG':'Virgin Islands, British','VI':'Virgin Islands, U.S.','WF':'Wallis And Futuna','EH':'Western Sahara','YE':'Yemen','ZM':'Zambia','ZW':'Zimbabwe'};
var publishers={'Institute of Electrical and Electronics Engineers':'IEEE','Springer Verlag (Germany)':'Springer','Association for Computing Machinery (ACM)':'ACM'}
var categories={'ART':'Journal articles','COMM':'Conference and Workshop papers','REPORT':'Technical reports','ALLTHESE':'Theses','PATENT':'Patents'};
var metagroups={'HDR':'ALLTHESE','UNDEFINED':'REPORT','THESE':'ALLTHESE'};
var doctypes={'ART':'Journal','COMM':'Conference','HDR':'Habilitation Thesis','REPORT':'Report','ALLTHESE':'PhD Thesis','PATENT':'Patent', 'COUV': 'Journal'};

var hals={
    "publications":JSON.parse('[]')};
    function clean(s,dict) {
        if(s in dict)
            return dict[s];
        else
            return s;
    }
    function formatDoc(doc,group_key){
        if(typeof doc.docType_s=='undefined'){
            console.error('Missing field (docType) in document '+doc.docid);return'';
        }
        var s='';
        s+='<p class="doc">';
        if(doc.docType_s=='ART'){
            if(doc.authFullName_s.length<1||typeof doc.uri_s=='undefined'||typeof doc.title_s=='undefined'||typeof doc.journalTitle_s=='undefined'){
                console.error('Missing fields in document '+doc.docid+' ('+doc.docType_s+')');
                return'';
            }
            s+='<span class="doc_authors">'+doc.authFullName_s.join(', ')+'. '+'</span>';
            s += titleWithLink(doc);

            s+='<span class="doc_booktitle">'+'In '+doc.journalTitle_s+'</span>';var s_='';
            if(typeof doc.volume_s!='undefined'&&doc.volume_s!='')
                s_+=', vol. '+doc.volume_s;
            else
                console.warn('Missing field (volume) in document '+doc.docid+' ('+doc.title_s+')');
            if(typeof doc.issue_s!='undefined'&&doc.issue_s.length>0)
                s_+=', no '+doc.issue_s[0];
            if(s_=='')
                s_+=', to appear';
            if(typeof doc.page_s!='undefined')
                if(doc.page_s.indexOf('-')>-1)
                    s_+=', pp. '+doc.page_s;
                else
                    s_+=', p. '+doc.page_s;
            else
                console.warn('Missing field (page) in document '+doc.docid+' ('+doc.title_s+')');
            if(typeof doc.producedDateY_i!='undefined'){
                s_+=', ';
                if(typeof doc.producedDateM_i!='undefined')
                    s_+=month[doc.producedDateM_i]+' ';
            }
            s_+=doc.producedDateY_i+'. ';
            s+=s_;
            if(typeof doc.journalPublisher_s!='undefined')
                s+=clean(doc.journalPublisher_s,publishers)+'. ';
        }
        if(doc.docType_s=='COMM'){
            if(doc.authFullName_s.length<1||typeof doc.title_s=='undefined'||typeof doc.conferenceTitle_s=='undefined'){
                console.error('Missing fields in document '+doc.docid+' ('+doc.docType_s+')');
                return'';
            }
            s+='<span class="doc_authors">'+doc.authFullName_s.join(', ')+'. '+'</span>';
            s += titleWithLink(doc);
            s+='<span class="doc_booktitle">'+'In Proceedings of the '+doc.conferenceTitle_s+'</span>';
            if(typeof doc.city_s!='undefined'&&typeof doc.country_s!='undefined'){
                s+=', ';
                s+=doc.city_s+', '+clean(doc.country_s.toUpperCase(),countries);
            }
            if(typeof doc.producedDateY_i!='undefined'){
                s+=', ';
                if(typeof doc.producedDateM_i!='undefined')
                    s+=month[doc.producedDateM_i]+' ';
                    s+=doc.producedDateY_i+'. ';
            }
        }
        if(doc.docType_s=='COUV'){
            if(doc.authFullName_s.length<1||typeof doc.title_s=='undefined'){
                console.error('Missing fields in document '+doc.docid+' ('+doc.docType_s+')');
                return'';
            }
            s+='<span class="doc_authors">'+doc.authFullName_s.join(', ')+'. '+'</span>';
            s += titleWithLink(doc);
            s+='<span class="doc_booktitle">'+'In '+doc.bookTitle_s+'</span>';
            if(typeof doc.city_s!='undefined'&&typeof doc.country_s!='undefined'){
                s+=', ';
                s+=doc.city_s+', '+clean(doc.country_s.toUpperCase(),countries);
            }
            if(typeof doc.producedDateY_i!='undefined'){
                s+=', ';
                if(typeof doc.producedDateM_i!='undefined')
                    s+=month[doc.producedDateM_i]+' ';
                    s+=doc.producedDateY_i+'. ';
            }
        }
        if(doc.docType_s=='REPORT' || doc.docType_s=='UNDEFINED'){
            if(doc.authFullName_s.length<1||typeof doc.title_s=='undefined'){
                console.error('Missing fields in document '+doc.docid+' ('+doc.docType_s+')');
                return'';
            }
            s+='<span class="doc_authors">'+doc.authFullName_s.join(', ')+'. '+'</span>';
            s += titleWithLink(doc);
            if(typeof doc.number_s!='undefined'&&doc.number_s.length>0){
                s+='<span class="doc_booktitle">Report '+doc.number_s[0].split(';')[0];
                if(typeof doc.authorityInstitution_s!='undefined')
                    s+=' ('+doc.authorityInstitution_s+')';
                    s+='. </span>';
            }
            if(typeof doc.page_s!='undefined')
                if(doc.page_s.indexOf('-')>-1)
                    s+='pp. '+doc.page_s+'. ';
                else
                    s+='p. '+doc.page_s+'. ';
            if(typeof doc.producedDateY_i!='undefined'){
                if(typeof doc.producedDateM_i!='undefined')
                    s+=month[doc.producedDateM_i]+' ';
                s+=doc.producedDateY_i+'. ';
            }
        }
        if(doc.docType_s=='THESE'||doc.docType_s=='HDR'){
            s+='<span class="doc_authors">'+doc.authFullName_s.join(', ')+'. '+'</span>';
            s += titleWithLink(doc);
            //s+=clean(doc.docType_s,doctypes)+'. ';
            s+=doc.authorityInstitution_s.join(' ');
            if(typeof doc.labStructAcronym_s!='undefined'){
                s+=' / '+doc.labStructAcronym_s;
                if(typeof doc.labStructName_s!='undefined'){
                    labStructName_s=' ('+doc.labStructName_s+')';
                    s+=labStructName_s.replace(/(,)([A-Za-z0-9])/,'$1 $2');
                }
            }
            s+='. ';
            if(typeof doc.defenseDateY_i!='undefined'){
                if(typeof doc.defenseDateM_i!='undefined')
                    s+=month[doc.defenseDateM_i]+' ';
                    s+=doc.defenseDateY_i+'. ';
                }
        }
        if(doc.docType_s=='PATENT'){
            if(doc.authFullName_s.length<1||typeof doc.title_s=='undefined'){
                console.error('Missing fields in document '+doc.docid+' ('+doc.docType_s+')');
                return'';
            }
            s+='<span class="doc_authors">'+doc.authFullName_s.join(', ')+'. '+'</span>';
            s += titleWithLink(doc);
            if(typeof doc.number_s!='undefined'&&doc.number_s.length>0){
                s+='<span class="doc_booktitle">Patent <a class="doc_links_hal" target="_blank" href="https://www.google.com/patents/'+doc.number_s[0].split(';')[0]+'">'+doc.number_s[0].split(';')[0]+'</a>';
                if(typeof doc.country_s!='undefined'){
                    s+=' ('+clean(doc.country_s.toUpperCase(),countries)+')';
                }
                s+='</span>'+'. ';
            }
            if(typeof doc.producedDateY_i!='undefined'){
                if(typeof doc.producedDateM_i!='undefined')
                    s+=month[doc.producedDateM_i]+' ';
                s+=doc.producedDateY_i+'. ';
            }
        }
        if(group_key!='docType_s'){
            if(typeof doc.doiId_s!='undefined'&&doc.doiId_s!=''){
                s+='<a class="doc_links_doi" target="_blank" href="http://dx.doi.org/'+doc.doiId_s+'">[doi]</a>';
            }
            s+=' ';
            s+='<span class="'+clean(doc.docType_s,metagroups)+'">'+clean(clean(doc.docType_s,metagroups),doctypes)+'</span>';
        } else{
            if(typeof doc.doiId_s!='undefined'&&doc.doiId_s!=''){
                s+='<a class="doc_links_doi" target="_blank" href="http://dx.doi.org/'+doc.doiId_s+'">[doi]</a>';
            }
        }
        s+='<br /><a href="javascript:showHide(\'bibtex_' + num_paper + '\');" id="bibtex_' + num_paper + '-show">Show/Hide BiBTeX</a></p>';
        s+='<div id="bibtex_' + num_paper + '" style="display: none"><pre>' + doc.label_bibtex + '</pre></div>';
        num_paper = num_paper + 1;
        return s;
    }
    function fetchPublications(target_id,group_key,docids,header){
        var xmlhttp=GetAjaxObject();
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4){
                if(xmlhttp.status==200){
                    hals[target_id]=hals[target_id].concat(JSON.parse(xmlhttp.responseText).response.docs);
                    if (document.getElementById(target_id) != null) {
                        if(group_key!=''){
                            document.getElementById(target_id).innerHTML=formatPublicationsByGroup(hals[target_id],group_key,header);
                        }else{
                            document.getElementById(target_id).innerHTML=formatPublicationGroup(hals[target_id],group_key,header);
                        }
                    }
                }else{
                    document.getElementById(target_id).innerHTML='<span class="error">An error has occured.</span>';
                }
            }
        }
        var docextra = [];
        if(docids.length>0){
            hals[target_id]=docextra.filter(function(doc){return docids.indexOf(doc.docid)>-1;
            });
            query="docid:("+docids.join(" OR ")+")";
        }else{
            hals[target_id]=docextra;
            query="authIdHal_s:"+idhal;
        }
        xmlhttp.open("POST","https://api.archives-ouvertes.fr/search/?q="+query+"&wt=json&fl=docid,docType_s,halId_s,authFullName_s,producedDateY_i,producedDateM_i,defenseDateY_i,defenseDateM_i,volume_s,page_s,issue_s,fileMain_s,doiId_s,title_s,conferenceTitle_s,bookTitle_s,journalTitle_s,city_s,country_s,journalPublisher_s,uri_s,pages_s,number_s,authorityInstitution_s,labStructAcronym_s,labStructName_s,director_s,authorityInstitution_s,label_bibtex&rows=200",true);
        xmlhttp.send();
    }
    function ifndef(x,val){
        return(typeof x=='undefined')?val:x;
    }
    function titleWithLink(doc) {
        s = "";
        if(typeof doc.fileMain_s != 'undefined') {
            s +='<span class="doc_title"><a class="doc_links_hal_pdf" target="_blank" href="'+doc.fileMain_s+'">'+doc.title_s[doc.title_s.length-1]+'</a></span>'+'. ';
        } else if (typeof doc.uri_s=='undefined'){
            s +='<span class="doc_title">'+doc.title_s[doc.title_s.length-1]+'</span>'+'. ';
        } else {
            s +='<span class="doc_title"><a class="doc_links_hal" target="_blank" href="'+doc.uri_s+'">'+doc.title_s[doc.title_s.length-1]+'</a></span>'+'. ';
        }
        return s;
    }
    function formatPublicationGroup(docs,group_key,header){
        var s=header;
        docs.sort(function(x,y){return 14*(y.producedDateY_i-x.producedDateY_i)+ifndef(y.producedDateM_i,13)-ifndef(x.producedDateM_i,13);});
        for(var j=0;j<docs.length;++j){
            s+=formatDoc(docs[j],group_key);
        }
        return s;
    }
    function formatPublicationsByGroup(docs,group_key,header){
        var s=header;
        var doc_by_group={};
        var groups=new Array();
        for(var i=0;i<docs.length;++i){
            var doc=docs[i];
            if(blacklist.indexOf(doc.docid)>-1)
                continue;
            var group=clean(doc[group_key],metagroups);
            if(!(group in doc_by_group)){
                doc_by_group[group]=new Array();
                groups.push(group);
            }
            doc_by_group[group].push(doc);
        }
        groups.sort(function(x,y){return y-x;});
        if(group_key=='docType_s')
            groups=['ART','COMM','HDR','REPORT','ALLTHESE'];
        for(var i=0;i<groups.length;++i){
            var group=groups[i];
            var docs=doc_by_group[group];
            if(typeof docs!='undefined'&&docs.length>0){
                s+='<h2>'+clean(group,categories);
                s+='</h2>';s+=formatPublicationGroup(docs,group_key,'');
            }
        }
        return s;
    }
    function reformatPublicationByGroup(target_id,group_key,header){
        document.getElementById(target_id).innerHTML=formatPublicationsByGroup(hals[target_id],group_key,header);
    };
    jQuery(document).ready(function(){fetchPublications("publications","producedDateY_i",[],header_pub);});
    jQuery(document).ready(function(){fetchPublications("ml_env","",[1343211, 1228397, 906292],"");});
    jQuery(document).ready(function(){fetchPublications("ml_ts","",[1339007,1357973,1321327,912512],"");});
    jQuery(document).ready(function(){fetchPublications("topic_models","",[872048, 906292],"");});
    jQuery(document).ready(function(){fetchPublications("ir","",[862176,567877,672897,639225,566883,601242,561797],"");});
    jQuery(document).ready(function(){fetchPublications("smartenv","",[1138500,1138508,1138512],"");});
