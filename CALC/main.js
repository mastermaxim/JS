//калькулятор для сайта http://print.abcphoto.com.ua/fotoknigi
$(document).ready(function() {
	var selectSize="-",// размер
			selectPrice=0,//цена за разворот
			selectCover=0,// цена за обложку
			endPaper = 0,//цена за форзац
			sum = 0, //итого
			qty =1, //кол-во разворотов
			pageSizes={
				"20x20":{ 1:47,  2:53, 3:43 },
				"19x25":{ 1:53 , 2:57, 3:53},
				"20x30":{ 1:57 , 2:65, 3:57},
				"25x25":{ 1:63 , 2:69, 3:63},
				"30x30":{ 1:76 , 2: 85, 3:94},
				"35x35":{ 1:105, 2:117, 3:124},
				"30x40":{ 1:105, 2:117, 3:124},
				"40x40":{ 1:212, 2:238, 3:169},
			},// массив цен по размерам: 1-цена за разворот из первой бумаги, 2 -цена за разворот из второй бумаги, 3-цена форзаца
			covers={
				"Обрезная фото обложка":{"20x20":53, "19x25":57, "20x30":65, "25x25":69, "30x30":85},
				"Фото обложка":{"20x20":204, "19x25":228, "20x30":254, "25x25":305, "30x30":424, "35x35":525,"30x40":525,"40x40":847},
        "Обложка кож. зам.":{"20x20":355, "19x25":373, "20x30":506, "25x25":525, "30x30":727, "35x35":1051,"30x40":1051,"40x40":1660},
				"Обложка холст":{"20x20":587, "19x25":667, "20x30":712, "25x25":800, "30x30":992, "35x35":1126,"30x40":1126,"40x40":1320},
        "Обложка пластификация":{"20x30":1288, "25x25":1288, "30x30":1473, "35x35":1682,"30x40":1682,"40x40":2080}
			}; //массив цен на обложки для каждого размера
});
//the last line
