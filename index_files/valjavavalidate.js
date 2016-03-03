// JScript File
//Function trim similiar to Visual Basic Trim()
//Removes Leading and trailing spaces and tabs from the argument passed
//returns a string
//trim all the required fields using this function
function trim(str)
{
	var x;
	var ch;	
	for(x=0;x<(str.length);x++)
	{
		ch=str.substr(x,1);
		if(ch==' ' || ch=='\t')
		{
			str=str.substr(x+1,str.length-1);
		}
		else
			break;
	}
	
	for(x=(str.length-1);x>=0;x=x-1)
	{
		ch=str.substr(x,1);
		if(ch==' ' || ch=='\t')
		{
			str=str.substr(0,(str.length-1));
		}
		else
			break;
	}
	
	return str;
}

	function IsEmpty(objname)
	{
		if (trim(objname.value)=="")			
			return true
		else
			return false;
	}

	//this function accepts the object as a parameter and display the appropriate error messages if the text box is empty
	function checkempty(objname,errmsg)
	{
		if (trim(objname.value)=="")
		{
			alert(errmsg);
			objname.focus();
			return false
		}
		return true;
	}

	//this function accepts the object as a parameter and display the appropriate error messages if the text box is empty
	//similar to the above function only that it checks for combo box
	function checkcomboempty(objname,errmsg)
	{
		if (trim(objname[objname.selectedIndex].value)=="")
		{
			alert(errmsg);
			objname.focus();
			return false
		}
		return true;
	}
	
	function checkcomboempty1(objname,errmsg)
	{
	    if (trim(objname.value) == "0" || trim(objname.value) == "")
		{
			alert(errmsg);
			objname.focus();
			return false
		}
		return true;
	}

	function checknumeric(objname,errmsg)
	{
		if (isNaN(trim(objname.value)))
		{
			alert(errmsg);
			objname.focus();
			return false;
		}
		return true;
	}
//Email validation starts from here
	function checkemail(objname,errmsg)
	{
		vvalue=trim(objname.value);
		atPos = vvalue.indexOf('@');
		sppos = vvalue.indexOf(" ");
		dopos = vvalue.indexOf(".");
		if (atPos < 1 || atPos == (vvalue.length - 1) || (sppos != -1)|| (dopos == -1))
		{
			alert(errmsg);
			objname.focus();
			return false;
		}
		return true;
	}
//Email validation ends from here

//telno validation starts from here 
//it checks that the entered value does not contain anything except numeric characters and hyphen
	function checktelno(objname,errmsg)
	{
		var str = trim(objname.value);
		for(x=0;x<str.length;x++)
		{
			ch=str.substr(x,1);
			if ((ch < '0' || ch >'9')&&(ch!='-'))
			{
				alert(errmsg);
				objname.focus();
				return false;
			}
		}
		return true;
	}
//telno validation ends over here

//maxlength validation starts over here
	function checkmaxlength(objname,maxlength,errmsg)
	{
		var str = objname.value;
		if (str.length>maxlength)
		{
			alert(errmsg);
			objname.focus();
			return false;
		}
		return true;
	}
//maxlength validation ends over here

//minlength validation starts over here
	function checkminlength(objname,minlength,errmsg)
	{
		var str = objname.value;
		if (str.length<minlength)
		{
			alert(errmsg);
			objname.focus();
			return false;
		}
		return true;
	}
//minlength validation ends over here
	function checkinteger(objname,errmsg)
	{
		var str = trim(objname.value);
		for(x=0;x<str.length;x++)
		{
			ch=str.substr(x,1);
			if ((ch < '0' || ch >'9'))
			{
				alert(errmsg);
				objname.focus();
				return false;
			}
		}
		return true;
	}
//


	function checkDecimalvalue(fieldName,lblName) 
	{
	    var fieldValue=fieldName.value
		decallowed = 2; 
		if (isNaN(fieldValue)) 
		{
			alert("Please Enter a Valid "+ lblName );
		
			fieldName.select();
			fieldName.focus();
			return false;
		}
		else 
		{
			if (fieldValue.indexOf('.') == -1) fieldValue += ".";
				dectext = fieldValue.substring(fieldValue.indexOf('.')+1, fieldValue.length);

			if (dectext.length > decallowed)
			{
				alert ("Please Enter "+ lblName +" With Upto " + decallowed + " Decimal Places");
				fieldName.select();
				fieldName.focus();
				return false;
			}
			else
				return true;	
		}
		return true;
	}
	
	function checkDecimals(fieldName, fieldValue) 
	{
		decallowed = 2;  // how many decimals are allowed?

		//if (isNaN(fieldValue) || fieldValue == "") 
		if (isNaN(fieldValue)) 
		{
			alert("Please Enter a Valid Number");
		
			fieldName.select();
			fieldName.focus();
			return false;
		}
		else 
		{
			if (fieldValue.indexOf('.') == -1) fieldValue += ".";
				dectext = fieldValue.substring(fieldValue.indexOf('.')+1, fieldValue.length);

			if (dectext.length > decallowed)
			{
				alert ("Please Enter A Number With Upto " + decallowed + " Decimal Places");
				fieldName.select();
				fieldName.focus();
				return false;
			}
			else
				return true;	
		}
		return true;
	}
	
		function CompareDates(fromDate,toDate)
		 {
			//By Uday.  
			/* for mm/dd/yyyy format */
			
			//alert(fromDate);
			if (Date.parse(fromDate.value) >= Date.parse(toDate.value))
			 {
					alert("To date must occur after the from date.");
					toDate.focus();
					return false;
			 }
			else 
			{
					return true;
			}
		 }
		 
		function IsLeapYear(intYear) 
		{
			//By Uday
			if (intYear % 100 == 0)
			 {
				if (intYear % 400 == 0) { return true; }
			 }
			else 
			 {
				if ((intYear % 4) == 0) { return true; }
			 }
				return false;
		}
		
		function ValidateDateRange(from,to)
		{			
			/* For dd/MM/yyyy format */
			
			var dtFrom = new Date(from.value.substring(6,10),from.value.substring(3,5)-1,from.value.substring(0,2));
			var dtTo = new Date(to.value.substring(6,10),to.value.substring(3,5)-1,to.value.substring(0,2));
			
			if(dtFrom <= dtTo)
			{
				return true;
			}
			else
			{
				alert("To date must occur after the from date.");
				to.focus();
				return false;
			}
		}
		
		function ValidateDateRange1(from,to)
		{			
			/* For dd/MMM/yyyy format */
			
			var dtFrom = new Date(from.value.substring(7,11),from.value.substring(3,6)-1,from.value.substring(0,2));
			var dtTo = new Date(to.value.substring(7,11),to.value.substring(3,6)-1,to.value.substring(0,2));
			
			
			if(dtFrom <= dtTo)
			{
				return true;
			}
			else
			{
				alert("To date must occur after the from date.");
				to.focus();
				return false;
			}
		}
		
		function ValidateDates(from,to,errMsg)
		{			
			/* For dd/MM/yyyy format */
			
			var dtFrom = new Date(from.value.substring(6,10),from.value.substring(3,5)-1,from.value.substring(0,2));
			var dtTo   = new Date(to.value.substring(6,10),to.value.substring(3,5)-1,to.value.substring(0,2));
			
			if(dtFrom <= dtTo)
			{
				return true;
			}
			else
			{
				alert(errMsg);
				to.focus();
				return false;
			}
		}
		
		// added on 26-04-06 by manoj  
		//functions block checks dates with combo ( dd / MM / yyyy )
		 
		function checkdate(objName)
		 {
			var datefield = objName;
			if (chkdate(objName) == false)
			{
			//datefield.select();  // original code line manoj
			//alert("That date is invalid.  Please try again.");		
				return false;
			}
			else
			{
				return true;
			}
	     }
		
		function chkdate(objName)
		 {
		var strDatestyle = "US"; //United States date style
		//var strDatestyle = "EU";  //European date style
		var strDate;
		var strDateArray;
		var strDay;
		var strMonth;
		var strYear;
		var intday;
		var intMonth;
		var intYear;
		var booFound = false;
		var datefield = objName;
		var strSeparatorArray = new Array("-"," ","/",".");
		var intElementNr;
		var err = 0;
		var strMonthArray = new Array(12);
		/*strMonthArray[0] = "Jan";
		strMonthArray[1] = "Feb";
		strMonthArray[2] = "Mar";
		strMonthArray[3] = "Apr";
		strMonthArray[4] = "May";
		strMonthArray[5] = "Jun";
		strMonthArray[6] = "Jul";
		strMonthArray[7] = "Aug";
		strMonthArray[8] = "Sep";
		strMonthArray[9] = "Oct";
		strMonthArray[10] = "Nov";
		strMonthArray[11] = "Dec";
		*/
		strMonthArray[0] = "1";
		strMonthArray[1] = "2";
		strMonthArray[2] = "3";
		strMonthArray[3] = "4";
		strMonthArray[4] = "5";
		strMonthArray[5] = "6";
		strMonthArray[6] = "7";
		strMonthArray[7] = "8";
		strMonthArray[8] = "9";
		strMonthArray[9] = "10";
		strMonthArray[10] = "11";
		strMonthArray[11] = "12";
		
//		strDate = datefield.value;// original code manoj
		strDate = datefield;
		if (strDate.length < 1) {
		return true;
		}
		for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
		if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
		strDateArray = strDate.split(strSeparatorArray[intElementNr]);
		if (strDateArray.length != 3) {
		err = 1;
		return false;
		}
		else {
		strDay = strDateArray[0];
		strMonth = strDateArray[1];
		strYear = strDateArray[2];
		}
		booFound = true;
		}
		}
		if (booFound == false) {
		if (strDate.length>5) {
		strDay = strDate.substr(0, 2);
		strMonth = strDate.substr(2, 2);
		strYear = strDate.substr(4);
		}
		}
		if (strYear.length == 2) {
		strYear = '20' + strYear;
		}
		// US style
		if (strDatestyle == "US") {
		strTemp = strDay;
		strDay = strMonth;
		strMonth = strTemp;
		}
		intday = parseInt(strDay, 10);
		if (isNaN(intday)) {
		err = 2;
		return false;
		}
		intMonth = parseInt(strMonth, 10);
		if (isNaN(intMonth)) {
		for (i = 0;i<12;i++) {
		if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
		intMonth = i+1;
		strMonth = strMonthArray[i];
		i = 12;
		}
		}
		if (isNaN(intMonth)) {
		err = 3;
		return false;
		}
		}
		intYear = parseInt(strYear, 10);
		if (isNaN(intYear)) {
		err = 4;
		return false;
		}
		if (intMonth>12 || intMonth<1) {
		err = 5;
		return false;
		}
		if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
		err = 6;
		return false;
		}
		if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
		err = 7;
		return false;
		}
		if (intMonth == 2) {
		if (intday < 1) {
		err = 8;
		return false;
		}
		if (LeapYear(intYear) == true) {
		if (intday > 29) {
		err = 9;
		return false;
		}
		}
		else {
		if (intday > 28) {
		err = 10;
		return false;
		}
		}
		}
		if (strDatestyle == "US") {
		datefield.value = strMonthArray[intMonth-1] + " " + intday+" " + strYear;
		}
		else {
		datefield.value = intday + " " + strMonthArray[intMonth-1] + " " + strYear;
		}
		return true;
		}
		function LeapYear(intYear) {
		if (intYear % 100 == 0) {
		if (intYear % 400 == 0) { return true; }
		}
		else {
		if ((intYear % 4) == 0) { return true; }
		}
		return false;
		}
		function doDateCheck(from, to) {
		if (Date.parse(from.value) <= Date.parse(to.value)) {
		//alert("The dates are valid.");
		return true;
		}
		else {
		if (from.value == "" || to.value == "") 
		{
		alert("Both dates must be entered.");
		return false;
		}
		else 
		{
		//alert("To date must occur after the from date.");
		return false;
		}
		}
		}


		function chkdate_ddmmyyyy(objName) {
		var strDatestyle = "US"; //United States date style
		//var strDatestyle = "EU";  //European date style
		var strDate;
		var strDateArray;
		var strDay;
		var strMonth;
		var strYear;
		var intday;
		var intMonth;
		var intYear;
		var booFound = false;
		var datefield = objName;
		var strSeparatorArray = new Array("-"," ","/",".");
		var intElementNr;
		var err = 0;
		var strMonthArray = new Array(12);
		/*strMonthArray[0] = "Jan";
		strMonthArray[1] = "Feb";
		strMonthArray[2] = "Mar";
		strMonthArray[3] = "Apr";
		strMonthArray[4] = "May";
		strMonthArray[5] = "Jun";
		strMonthArray[6] = "Jul";
		strMonthArray[7] = "Aug";
		strMonthArray[8] = "Sep";
		strMonthArray[9] = "Oct";
		strMonthArray[10] = "Nov";
		strMonthArray[11] = "Dec";
		*/
		
		strMonthArray[0] = "1";
		strMonthArray[1] = "2";
		strMonthArray[2] = "3";
		strMonthArray[3] = "4";
		strMonthArray[4] = "5";
		strMonthArray[5] = "6";
		strMonthArray[6] = "7";
		strMonthArray[7] = "8";
		strMonthArray[8] = "9";
		strMonthArray[9] = "10";
		strMonthArray[10] = "11";
		strMonthArray[11] = "12";
		
		
		strDate = datefield.value;
		if (strDate.length < 1) {
		return true;
		}
		for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
		if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
		strDateArray = strDate.split(strSeparatorArray[intElementNr]);
		if (strDateArray.length != 3) {
		err = 1;
		return false;
		}
		else {
		strDay = strDateArray[0];
		strMonth = strDateArray[1];
		strYear = strDateArray[2];
		}
		booFound = true;
		}
		}
		if (booFound == false) {
		if (strDate.length>5) {
		strDay = strDate.substr(0, 2);
		strMonth = strDate.substr(2, 2);
		strYear = strDate.substr(4);
		}
		}
		if (strYear.length == 2) {
		strYear = '20' + strYear;
		}
		// US style
		if (strDatestyle == "US") {
		strTemp = strDay;
		strDay = strMonth;
		strMonth = strTemp;
		}
		intday = parseInt(strDay, 10);
		if (isNaN(intday)) {
		err = 2;
		return false;
		}
		intMonth = parseInt(strMonth, 10);
		if (isNaN(intMonth)) {
		for (i = 0;i<12;i++) {
		if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
		intMonth = i+1;
		strMonth = strMonthArray[i];
		i = 12;
		}
		}
		if (isNaN(intMonth)) {
		err = 3;
		return false;
		}
		}
		intYear = parseInt(strYear, 10);
		if (isNaN(intYear)) {
		err = 4;
		return false;
		}
		if (intMonth>12 || intMonth<1) {
		err = 5;
		return false;
		}
		if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
		err = 6;
		return false;
		}
		if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
		err = 7;
		return false;
		}
		if (intMonth == 2) {
		if (intday < 1) {
		err = 8;
		return false;
		}
		if (LeapYear(intYear) == true) {
		if (intday > 29) {
		err = 9;
		return false;
		}
		}
		else {
		if (intday > 28) {
		err = 10;
		return false;
		}
		}
		}
		if (strDatestyle == "US") {
		datefield.value = strMonthArray[intMonth-1] + " " + intday+" " + strYear;
		}
		else {
		datefield.value = intday + " " + strMonthArray[intMonth-1] + " " + strYear;
		}
		return true;
		}
		function LeapYear(intYear) {
		if (intYear % 100 == 0) {
		if (intYear % 400 == 0) { return true; }
		}
		else {
		if ((intYear % 4) == 0) { return true; }
		}
		return false;
		}
		
		function doDateCheck(from, to) {
		if (Date.parse(from.value) <= Date.parse(to.value)) {
		//alert("The dates are valid.");
		return true;
		}
		else {
		if (from.value == "" || to.value == "") 
		{
		alert("Both dates must be entered.");
		return false;
		}
		else 
		{
		//alert("To date must occur after the from date.");
		return false;
		}
		}
		}
		// above functions block checks dates with combo
		
		
		function CheckFileExtension(FileName,FileType)
		{					
			
			//alert(FileName.value);
			//alert(FileType);
			sFileType = Right(FileName.value,4);
			sFileType = sFileType.toLowerCase();					
				if (sFileType != FileType.toLowerCase())
				{
					FileName.focus();
					return false;
				}
				else
					return true;
		}	
		
		function IsValidImageFile(FileName,errMsg)
		{					
			/* this method checks whether file entered by user is proper image file or not
			     checks for following extensions
			      .jpg,
			      .jpeg,
			      .gif,
			      .png,
			      .bmp.
			 */			
			sFileType = Right(FileName.value,4);
			sFileType = sFileType.toLowerCase();					
				if((sFileType == ".jpg") || (sFileType == "jpeg") || (sFileType == ".gif") || (sFileType == ".png") || (sFileType == ".bmp"))
				{
					return true;
				}
				else
				{
				    alert(errMsg);
					FileName.focus();
					return false;
				}
		}		     
			      
		function isValidDate(dateStr) 
{
// Checks for the following valid date formats:
// MM/DD/YY   MM/DD/YYYY   MM-DD-YY   MM-DD-YYYY
// Also separates date into month, day, and year variables

//var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{2}|\d{4})$/;
// To require a 4 digit year entry, use this line instead:
var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
var matchArray1 = dateStr.match(datePat); // is the format ok?
if (matchArray1 == null) 
{
alert("Date is not in a valid format.")
return false;
}
month = matchArray1[1]; // parse date into variables
day = matchArray1[3];
year = matchArray1[4];
if (month < 1 || month > 12) 
{ // check month range
alert("Month must be between 1 and 12.");
return false;
}
if (day < 1 || day > 31)
{
alert("Day must be between 1 and 31.");
return false;
}
if ((month==4 || month==6 || month==9 || month==11) && day==31) {
alert("Month "+month+" doesn't have 31 days!")
return false
}
if (month == 2) 
{ // check for february 29th
var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
if (day>29 || (day==29 && !isleap)) {
alert("February " + year + " doesn't have " + day + " days!");
return false;
   }
}
return true;  // date is valid
}
		      
		function Right(str, n)
			{
				/* This Function Returns n number of right letters of String.
					Used mostly in file extension checking.
				 */
				if (n <= 0)
					return "";
				else if (n > String(str).length)
					return str;
				else
				{
					var iLen = String(str).length;
					return String(str).substring(iLen, iLen - n);
				}
			}				
			
			
	/*		function checkEmail(objname,errmsg) 
{
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(objname))
{
return (true)
}
alert(errmsg);
return (false)
}
*/
			function CompareWithCurrentDate(to)
			{
				/* 
				   Developesd By Uday Kadam.
				   Date : 26/09/2006 .
				   Project CATS.			  
				    function returns false if date supplied is less than current date 				   
				 */
				 
			    var dtTo   = new Date(to.substring(6,10),to.substring(3,5)-1,to.substring(0,2));			
				var dtTemp;
				dtTemp = new Date();
				var dtToday = new Date(dtTemp.getFullYear(),dtTemp.getMonth(),dtTemp.getDate());			
				if(dtToday <= dtTo)
				{
					return true;
				}
				else
				{
					return false;
				}		
			}
			
			function ViewDoc(path)
			{   				
				if(path!="")
				{				
				settings="left=" + 150 + ",top=" + 150 + ",height=" + 450 + ",width=" + 525 + ",scrollbars=yes,resizable=yes";
				win=window.open(path,"Document",settings);
				}				
			}
			
			
			// bellow function added by manoj for time checking
			// this is commented as there is some work with objects
			
			
			
		function validateWebSite(WebSite) // added by sumit
        {           
           //var RegExp = /[w]\.(\w+)\.(\w+)/i;
          var RegExp = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/
         //var RegExp =  ^((https?):\/\/(?:([a-zA-Z\d\-_]+)@?([a-zA-Z\d\-_]+)\:)?((?:(?:(?:(?:[a-zA-Z\d](?:(?:[a-zA-Z\d]|-)*[a-zA-Z\d])?)\.)*([a-zA-Z](?:(?:[a-zA-Z\d]|-)*[a-zA-Z\d])?))|(?:(?:\d+)(?:\.(?:\d+)){3}))(?::(\d+))?)(?:\/((?:(?:(?:[a-zA-Z\d$\-_.+!*'(),~]|(?:%[a-fA-F\d]{2}))|[;:@&=])*)(?:\/(?:(?:(?:[a-zA-Z\d$\-_.+!*'(),~]|(?:%[a-fA-F\d]{2}))|[;:@&=])*))*)(\?(?:(?:(?:[a-zA-Z\d$\-_.+!*'(),~]|(?:%[a-fA-F\d]{2}))|[;:@&=])*))?)?)$
         // var RegExp = /^(?:([a-z0-9+.-]+:\/\/)((?:(?:[a-z0-9-._~!$&'()*+,;=:]|%[0-9A-F]{2})*)@)?((?:[a-z0-9-._~!$&'()*+,;=]|%[0-9A-F]{2})*)(:(?:\d*))?(\/(?:[a-z0-9-._~!$&'()*+,;=:@\/]|%[0-9A-F]{2})*)?|([a-z0-9+.-]+:)(\/?(?:[a-z0-9-._~!$&'()*+,;=:@]|%[0-9A-F]{2})+(?:[a-z0-9-._~!$&'()*+,;=:@\/]|%[0-9A-F]{2})*)?)(\?(?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*)?(#(?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*)?$/i; 

           
            
                    if(WebSite.value.match(RegExp))
                        {
                           return true;
                        }
                     else
                        {
                           WebSite.focus();
                           //alert('Please Enter valid WebSite Name');
                          alert('Please Enter proper URL starting with http://');
                           return false;
                         }   
                
        }

  function enterNumericDataOnly(evt)
        {
             var charCode = (evt.which) ? evt.which : event.keyCode                  
             if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
                return false;

             return true;
        }  
        //. is not allowed by Sapna  
        function enterNumeric(evt)
        {
             var charCode = (evt.which) ? evt.which : event.keyCode                  
             if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;

             return true;
        } 
        
        
             function ValidateDates_Mon(from,to,errMsg)
		{			
			/* For dd/Mon/yyyy format */			
			if(from.value == "" || to.value == "")
			{
			    alert("Please enter the both dates to be compared.");
			    return false;
			}			
			var dtFrom_dt = from.value.split('/');
			var dtTo_dt = to.value.split('/');			
			try
		    {
			    var dtFrom = new Date(dtFrom_dt[2],getMM_From_Mon(dtFrom_dt[1]),dtFrom_dt[0]);					    
			    var dtTo   = new Date(dtTo_dt[2], getMM_From_Mon(dtTo_dt[1]), dtTo_dt[0]);
			}
			catch(err)
			{
			    alert("Please enter the proper date.");
			    return false;
			}			
			
			if(dtFrom <= dtTo)
			{
				return true;
			}
			else
			{
				alert(errMsg);
				to.focus();
				return false;
			}
		}
		
		
		function getMM_From_Mon(mon)
		{		    
		    var	monthNo =	new	Array("jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec");		 
		    for(i=0;i<12;i++)
		    {   
		        if(mon.toLowerCase() == monthNo[i])
		        {
		            i++;
		            return i;		        
		        }
		    }
		    return -1;
		}