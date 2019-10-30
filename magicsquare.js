"use strict";
/*
Mitzi Bustamante
November 27 2018
CISC 131
The user input an odd number greater than 2 and it creates that order of magic square
*/
window.onload =function ()
{
var ask;//declaration
var box;//declaration
var reminder;//declaration
box=document.getElementById("box");
ask=Number(window.prompt("Enter a Odd integer greater than 2"));
reminder= ask%2;
if (ask >2)
{
	if (reminder==0)
	{
	window.alert("The answer is invalid, Try again");
	}
	if (reminder == 1)
	{
		createMagicSquare(box,ask);
	}
}
if (ask <=2)
{
	window.alert("The answer is invalid, Try again");
}
};
function createMagicSquare (containerElement, order)
{
	//this function creates a two dimenstional array that can hold the numbers
	var i; //declaration
	var j; //declaration
	var x; //declaration
	var array; //declaration
	var count; //declaration
	var row; //declaration
	var col; //declaration
	var newRow; //declaration
	var newCol; //declaration
	var hold;//declaration
	array= new Array(order);
	for(i=0;i<array.length;i++)
	{
		array[i]=new Array(order);
	}
	for(i=0;i<array.length;i++)
	{
		for(j=0;j<array[i].length;j=j+1)
		{
			array[i][j]=0;
		}
	}
	row=0;
	col=Math.floor(order/2)
	count=1;
	array[row][col]=count;
	count=count+1;
	for(i=0;i<(order*order-1);i++)
	{
		newRow=row-1;
		newCol=col+1;
		if(newRow===-1)
		{
			newRow=order-1;
		}
		if(newCol===order)
		{
			newCol=0;
		}
		if(array[newRow][newCol]!==0)
		{
			newRow=row+1;
			newCol=col;
		    if(newRow===order)
		    {
			    newRow=0;
		    }
		}
		array[newRow][newCol]=count;
		count=count+1;
		row=newRow;
		col=newCol;
	}
	x=0;
	hold= new Array(order*order);
	for(i=0;i<array.length;i++)
	{
		for(j=0;j<array[i].length;j=j+1)
		{
			hold[x]=array[i][j];
			x=x+1;
		}
	}
	for(i=0;i<order*order;i++)
	{
		if(i%order===0)
		{
			containerElement.innerHTML=containerElement.innerHTML +createHTMLElement("div","square"+i,"square + move",hold[i]);
		}
		else
		{
			containerElement.innerHTML=containerElement.innerHTML +createHTMLElement("div","square"+i,"square",hold[i]);
		}
	}
}

function createHTMLElement (elementType,id,classInfo,content)
{
	/* Create inside the HTML a new div with the appropriate (element,id,class, and the content)*/
if (elementType===null)
{
 elementType="";
}
else
{
	elementType=trim(elementType);
}
if (id===null)
{
 id="";
}
else
{
	id=trim(id);
	if (id.length>0)
	{
	 id=' id="'+id+'"';
	}
}
if (classInfo===null)
{
 classInfo="";
}
else
{
	classInfo=trim(classInfo);
	if (classInfo.length>0)
	{
	 classInfo=' class="'+classInfo+'"';
}
}
return ('<'+ elementType +id + classInfo +'>' + content + '</'+ elementType + '>');
}
function trim(data)
{
	/* it trims the white space that is in the start and end of a string*/
	var end;/*declaration*/
	var result;/*declaration*/
	var start;/*declaration*/
	var whitespace;/*declaration*/
	if (typeof data === "string")
		{
			whitespace=" \n\r\t\f";
			start=0;
			while (start<data.length && whitespace.indexOf(data.charAt(start))>=0)
			{
				start=1+start;
			}
			end=data.length-1;
			while (end>=0 && whitespace.indexOf(data.charAt(end))>=0)
			{
				end=end-1;
			}
			if (end<start)
			{
				result="";
			}
			else
			{
				result=data.substring(start,end+1);
			}
		}
		else
		{
		result=data;
		}
return result;
}
