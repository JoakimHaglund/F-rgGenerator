//Genererar en slumpmässig färg.
function generateRandomColor() {
	var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); //Skapar en färgkod
	randomColor = randomColor.toUpperCase();																 //Ändrar färgkoden til versaler
	return randomColor;																											 //Retunerar färgkoden
}

//Hämtar en lista av element med ett visst klassnamn.
function getList() {
	var list = document.getElementsByClassName("colorBox"); //Skapar en lista på alla objekt med klassnamnet "colorBox"
	return list;	//Retunerar listan
}

//Kalkylerar bredden på alla objekt i listan
function clacWidth(thisList){
	for (i = 0; i < thisList.length; i++) {										//Loopar igenom en lista
		thisList[i].style.width = 100 / thisList.length + '%';;	//Ändrar bredd på det nuvarande elementet i listan
		}
}

//Lägger till 4 element när man laddar sidan.
function addOnLoad(){
	for (i = 0; i <= 4; i++){  //Loopar funktionen 4 gånger
		addElement();						//Lägger till ett element
	}
}

//Tar bort det sista elementet i listan.
function removeElement() {
	var list = getList();																//Hämtar listan med element.
	if (list.length > 1){																//Kontollerar att det finns tillräckligt många element för att ta bort ett.
		var itemToRemove = list[list.length -1]						//Väljer sista elementet i listan.							
		itemToRemove.parentNode.removeChild(itemToRemove);//Tar bort elementet.															
		clacWidth(list);																	//Kalkylerar hur breda kvarvarande element ska vara.
	}
}
//Lägger till ett element
function addElement() {
	var list = getList(); 															//Hämtar en lista över element
	if (list == undefined || list.length < 8){ 					//Kontrollerar att det inte fins för många element
		var elementToAdd = document.createElement("div"); //Skapar en "div"
		var textColor = document.createElement("p");			//Skapar en paragraf
		var color = generateRandomColor();								//Genererar en slumpmässig färgkod
		var textnode = document.createTextNode(color);    //Skapar en text med färgkoden 
		
		elementToAdd.className = "colorBox";							//Ger den skapade diven en klass 
		textColor.className = "colorCode";								//ger paragrafen en klass
		elementToAdd.style.backgroundColor = color;				//Ändrar bagrundsfägen på diven till den slumpmässiga färgen
		textColor.appendChild(textnode);									//Lägger till texten med färgkoden i paragrafen
		elementToAdd.appendChild(textColor);							//lägger till paragrafen i 
		document.getElementById("colorBoxHolder").appendChild(elementToAdd); //Lägger till diven med paragraf på sidan.
		clacWidth(list);																	//klakylerar bredden på samtliga divar 
	}
}
//Byter ut färgerna på divarna på sidan
function randomColor(){	
	var list = getList(); 																		//hämtar listan på element
	for (i = 0; i < list.length; i++) { 											//Loopar igenom listan
		var color = generateRandomColor(); 											//Genererar en ny färg
		list[i].style.backgroundColor = color;									//Byter färg på det valda objektet
		list[i].getElementsByTagName('p')[0].innerHTML = color; //Ändrar texten på paragrafen i diven till den nya färgkoden
	} 	
}

