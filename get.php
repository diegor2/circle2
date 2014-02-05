<?php

$url = $_GET['u'];

$curl = curl_init();
curl_setopt ($curl, CURLOPT_URL, $url);
//curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//$result = curl_exec ($curl);
curl_exec ($curl);
curl_close ($curl);

//header('Content-Type: application/xml; charset=ISO-8859-1');
//print $result;

?>