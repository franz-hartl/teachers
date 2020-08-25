<?php

//$arabic_roman = array('1'=>'I', '2'=>'II', '3'=>'III', '4'=>'IV', '5'=>'V', '6'=>'VI', '7'=>'VII', '8'=>'VIII', '9'=>'IX', '10'=>'X', '11'=>'XI', '12'=>'XII', '13'=>'XIII', '14'=>'XIV', '15'=>'XV', '16'=>'XVI', '17'=>'XVII', '18'=>'XVIII', '19'=>'XIX', '20'=>'XX', '21'=>'XXI', '22'=>'XXII', '23'=>'XXIII', '24'=>'XXIV', '25'=>'XXV', '26'=>'XXVI', '27'=>'XXVII', '28'=>'XXVIII', '29'=>'XXIX', '30'=>'XXX', '31'=>'XXXI', '32'=>'XXXII', '33'=>'XXXIII', '34'=>'XXXIV', '35'=>'XXXV', '36'=>'XXXVI', '37'=>'XXXVII', '38'=>'XXXVIII', '39'=>'XXXIX', '40'=>'XL', '41'=>'XLI', '42'=>'XLII', '43'=>'XLIII', '44'=>'XLIV', '45'=>'XLV', '46'=>'XLVI', '47'=>'XLVII', '48'=>'XLVIII', '49'=>'XLIX', '50'=>'L', '51'=>'LI', '52'=>'LII', '53'=>'LIII', '54'=>'LIV', '55'=>'LV', '56'=>'LVI', '57'=>'LVII', '58'=>'LVIII', '59'=>'LIX', '60'=>'LX', '61'=>'LXI', '62'=>'LXII', '63'=>'LXIII', '64'=>'LXIV', '65'=>'LXV', '66'=>'LXVI', '67'=>'LXVII', '68'=>'LXVIII', '69'=>'LXIX', '70'=>'LXX', '71'=>'LXXI', '72'=>'LXXII', '73'=>'LXXIII', '74'=>'LXXIV', '75'=>'LXXV', '76'=>'LXXVI', '77'=>'LXXVII', '78'=>'LXXVIII', '79'=>'LXXIX', '80'=>'LXXX', '81'=>'LXXXI', '82'=>'LXXXII', '83'=>'LXXXIII', '84'=>'LXXXIV', '85'=>'LXXXV', '86'=>'LXXXVI', '87'=>'LXXXVII', '88'=>'LXXXVIII', '89'=>'LXXXIX', '90'=>'XC', '91'=>'XCI', '92'=>'XCII', '93'=>'XCIII', '94'=>'XCIV', '95'=>'XCV', '96'=>'XCVI', '97'=>'XCVII', '98'=>'XCVIII', '99'=>'XCIX', '100'=>'C');
$arabic_roman = array('1'=>'i', '2'=>'ii', '3'=>'iii', '4'=>'iv', '5'=>'v', '6'=>'vi', '7'=>'vii', '8'=>'viii', '9'=>'ix', '10'=>'x', '11'=>'xi', '12'=>'xii', '13'=>'xiii', '14'=>'xiv', '15'=>'xv', '16'=>'xvi', '17'=>'xvii', '18'=>'xviii', '19'=>'xix', '20'=>'xx', '21'=>'xxi', '22'=>'xxii', '23'=>'xxiii', '24'=>'xxiv', '25'=>'xxv', '26'=>'xxvi', '27'=>'xxvii', '28'=>'xxviii', '29'=>'xxix', '30'=>'xxx', '31'=>'xxxi', '32'=>'xxxii', '33'=>'xxxiii', '34'=>'xxxiv', '35'=>'xxxv', '36'=>'xxxvi', '37'=>'xxxvii', '38'=>'xxxviii', '39'=>'xxxix', '40'=>'xl', '41'=>'xli', '42'=>'xlii', '43'=>'xliii', '44'=>'xliv', '45'=>'xlv', '46'=>'xlvi', '47'=>'xlvii', '48'=>'xlviii', '49'=>'xlix', '50'=>'l', '51'=>'li', '52'=>'lii', '53'=>'liii', '54'=>'liv', '55'=>'lv', '56'=>'lvi', '57'=>'lvii', '58'=>'lviii', '59'=>'lix', '60'=>'lx', '61'=>'lxi', '62'=>'lxii', '63'=>'lxiii', '64'=>'lxiv', '65'=>'lxv', '66'=>'lxvi', '67'=>'lxvii', '68'=>'lxviii', '69'=>'lxix', '70'=>'lxx', '71'=>'lxxi', '72'=>'lxxii', '73'=>'lxxiii', '74'=>'lxxiv', '75'=>'lxxv', '76'=>'lxxvi', '77'=>'lxxvii', '78'=>'lxxviii', '79'=>'lxxix', '80'=>'lxxx', '81'=>'lxxxi', '82'=>'lxxxii', '83'=>'lxxxiii', '84'=>'lxxxiv', '85'=>'lxxxv', '86'=>'lxxxvi', '87'=>'lxxxvii', '88'=>'lxxxviii', '89'=>'lxxxix', '90'=>'xc', '91'=>'xci', '92'=>'xcii', '93'=>'xciii', '94'=>'xciv', '95'=>'xcv', '96'=>'xcvi', '97'=>'xcvii', '98'=>'xcviii', '99'=>'xcix', '100'=>'c');

$roman = array_values($arabic_roman);
$arabic = array_keys($arabic_roman);

//print_r($roman);

// Add [] 
array_walk($roman, function(&$item) { $item = '[' . $item . ']'; });
array_walk($arabic, function(&$item) { $item = '[' . $item . ']'; });

//print_r($roman);

$file_name = "20.01.06.x.md";
$file = file_get_contents($file_name);
file_put_contents($file_name . ".backup", $file);

$updated_text = str_replace($roman, $arabic, $file);

file_put_contents($file_name, $updated_text);
