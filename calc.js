function CalculateSquare() 
{
    var FieldValue = document.getElementById("InputValue").value;       //User input
    
    if (isNaN(FieldValue) | FieldValue == "") 
    {                         //User Input is none or wrong
        var OutputValue = document.getElementById("OutputValue");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var ErrorMessage = document.createTextNode("Incorrect or no content in the input field. Note: The system uses . (dot) as decimal separator!");
        OutputValue.appendChild(ErrorMessage);          //Error message 
    }
    
    else                //If user input is correct or valid 
    {                 
        var OutputValue = document.getElementById("OutputValue");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var Result = document.createTextNode(Math.pow(FieldValue,2));   //User input * user input
        OutputValue.appendChild(Result);    //Result is output
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CalculateSquareRoot() 
{
    var FieldValue = document.getElementById("InputValueSquareRoot").value;       //User input
    
    if (isNaN(FieldValue) | FieldValue == "") 
    {                         //User Input is none or wrong
        var OutputValue = document.getElementById("OutputValueSquareRoot");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var ErrorMessage = document.createTextNode("Incorrect or no content in the input field. Note: The system uses . (dot) as decimal separator!");
        OutputValue.appendChild(ErrorMessage);          //Error message 
    }
    
    else                //If user input is correct or valid 
    {                 
        var OutputValue = document.getElementById("OutputValueSquareRoot");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var Result = document.createTextNode(Math.sqrt(FieldValue,2));   //User input * user input
        OutputValue.appendChild(Result);    //Result is output
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CalculateArea() 
{
    var FieldValue = document.getElementById('AreaInputValueQuadratdezimeter').value;       //User input
    var ma??eOption1 = document.querySelector('.Meterma??e1').value; 
    var ma??eOption2 = document.querySelector('.Meterma??e2').value; 
    

    if (isNaN(FieldValue) | FieldValue == "") 
    {                         //User Input is none or wrong
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var ErrorMessage = document.createTextNode("Incorrect or no content in the input field. Note: The system uses . (dot) as decimal separator!");
        AreaOutputValueQuadratdezimeter.appendChild(ErrorMessage);          //Error message 
    }

    //Quadratmillimeter
    else if (ma??eOption1 == 'mm??' & ma??eOption2 == 'cm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " cm??";    //Result is output
    } 
    
    else if (ma??eOption1 == 'mm??' & ma??eOption2 == 'dm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 10000 ));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " dm??";    //Result is output
    }
    
    else if (ma??eOption1 == 'mm??' & ma??eOption2 == 'm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 1000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " m??";    //Result is output
    }
    
    else if (ma??eOption1 == 'mm??' & ma??eOption2 == 'a')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " a";    //Result is output
    }
    
    else if (ma??eOption1 == 'mm??' & ma??eOption2 == 'ha')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 10000000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " ha";    //Result is output
    }
    
    else if (ma??eOption1 == 'mm??' & ma??eOption2 == 'km??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 1000000000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " km??";    //Result is output
    }

    //Quadratcentimeter
    else if (ma??eOption1 == 'cm??' & ma??eOption2 == 'mm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " mm??";    //Result is output
    } 
    
    else if (ma??eOption1 == 'cm??' & ma??eOption2 == 'dm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " cm??";    //Result is output
    }
    
    else if (ma??eOption1 == 'cm??' & ma??eOption2 == 'm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 10000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " m??";    //Result is output
    }
    
    else if (ma??eOption1 == 'cm??' & ma??eOption2 == 'a')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 1000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " a";    //Result is output
    }
    
    else if (ma??eOption1 == 'cm??' & ma??eOption2 == 'ha')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " ha";    //Result is output
    }
    
    else if (ma??eOption1 == 'cm??' & ma??eOption2 == 'km??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 10000000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " km??";    //Result is output
    }

    //Quadratdecimeter
    else if (ma??eOption1 == 'dm??' & ma??eOption2 == 'mm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 10000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " mm??";    //Result is output
    } 

    else if (ma??eOption1 == 'dm??' & ma??eOption2 == 'cm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " cm??";    //Result is output
    }

    else if (ma??eOption1 == 'dm??' & ma??eOption2 == 'm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " m??";    //Result is output
    }

    else if (ma??eOption1 == 'dm??' & ma??eOption2 == 'a')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 10000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " a";    //Result is output
    }

    else if (ma??eOption1 == 'dm??' & ma??eOption2 == 'ha')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 1000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " ha";    //Result is output
    }

    else if (ma??eOption1 == 'dm??' & ma??eOption2 == 'km??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " km??";    //Result is output
    }

    //Quadratmeter
    else if (ma??eOption1 == 'm??' & ma??eOption2 == 'mm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 1000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " mm??";    //Result is output
    }  

    else if (ma??eOption1 == 'm??' & ma??eOption2 == 'cm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 10000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " cm??";    //Result is output
    }  

    else if (ma??eOption1 == 'm??' & ma??eOption2 == 'dm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " dm??";    //Result is output
    } 
    
    else if (ma??eOption1 == 'm??' & ma??eOption2 == 'a')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " a";    //Result is output
    } 

    else if (ma??eOption1 == 'm??' & ma??eOption2 == 'ha')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 10000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " ha";    //Result is output
    }

    else if (ma??eOption1 == 'm??' & ma??eOption2 == 'km??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 1000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " km??";    //Result is output
    }

    //AR
    else if (ma??eOption1 == 'a' & ma??eOption2 == 'mm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 100000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " mm??";    //Result is output
    }

    else if (ma??eOption1 == 'a' & ma??eOption2 == 'cm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 1000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " cm??";    //Result is output
    } 
    
    else if (ma??eOption1 == 'a' & ma??eOption2 == 'dm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 10000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " dm??";    //Result is output
    }
    
    else if (ma??eOption1 == 'a' & ma??eOption2 == 'm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " m??";    //Result is output
    }
    
    else if (ma??eOption1 == 'a' & ma??eOption2 == 'ha')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " ha";    //Result is output
    }
    
    else if (ma??eOption1 == 'a' & ma??eOption2 == 'km??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 10000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " km??";    //Result is output
    }

    //Hektar
    else if (ma??eOption1 == 'ha' & ma??eOption2 == 'mm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 10000000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " mm??";    //Result is output
    }

    else if (ma??eOption1 == 'ha' & ma??eOption2 == 'cm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 100000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " cm??";    //Result is output
    } 
    
    else if (ma??eOption1 == 'ha' & ma??eOption2 == 'dm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 1000000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " dm??";    //Result is output
    }
    
    else if (ma??eOption1 == 'ha' & ma??eOption2 == 'm??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 10000));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " m??";    //Result is output
    }
    
    else if (ma??eOption1 == 'ha' & ma??eOption2 == 'a')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue * 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " ha";    //Result is output
    }
    
    else if (ma??eOption1 == 'ha' & ma??eOption2 == 'km??')
    {
        var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
        while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
        var Result = document.createTextNode((FieldValue / 100));   //User input * user input
        AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " km??";    //Result is output
    }

    //Quadratkilometer
    else if (ma??eOption1 == 'km??' & ma??eOption2 == 'mm??')
        {
            var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
            while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
            var Result = document.createTextNode((FieldValue * 1000000000000));   //User input * user input
            AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " mm??";    //Result is output
    }
    
    else if (ma??eOption1 == 'km??' & ma??eOption2 == 'cm??')
        {
            var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
            while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
            var Result = document.createTextNode((FieldValue * 10000000000));   //User input * user input
            AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " cm??";    //Result is output
    } 
        
    else if (ma??eOption1 == 'km??' & ma??eOption2 == 'dm??')
        {
            var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
            while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
            var Result = document.createTextNode((FieldValue * 100000000));   //User input * user input
            AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " dm??";    //Result is output
    }
        
    else if (ma??eOption1 == 'km??' & ma??eOption2 == 'm??')
        {
            var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
            while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
            var Result = document.createTextNode((FieldValue * 1000000));   //User input * user input
            AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " m??";    //Result is output
    }
        
    else if (ma??eOption1 == 'km??' & ma??eOption2 == 'a')
        {
            var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
            while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
            var Result = document.createTextNode((FieldValue * 10000));   //User input * user input
            AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " ha";    //Result is output
    }
        
    else if (ma??eOption1 == 'km??' & ma??eOption2 == 'ha')
        {
            var AreaOutputValueQuadratdezimeter = document.getElementById('AreaOutputValueQuadratdezimeter');
            while(AreaOutputValueQuadratdezimeter.firstChild)AreaOutputValueQuadratdezimeter.removeChild(AreaOutputValueQuadratdezimeter.firstChild)
            var Result = document.createTextNode((FieldValue * 100));   //User input * user input
            AreaOutputValueQuadratdezimeter.appendChild(Result).textContent += " km??";    //Result is output
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sin(degrees)  //function for sinus with degrees
{
    var radians = (degrees * Math.PI) / 180;
    return Math.sin(radians);
}

function tan(degrees)  //function for cosinus with degrees
{
    var radians = (degrees * Math.PI) / 180;
    return Math.tan(radians);
}

function cos(degrees)  //function for tangens with degrees
{
    var radians = (degrees * Math.PI) / 180;
    return Math.cos(radians);
}


function CalculateTrigonometrie()
{
    var FieldValue = document.getElementById("InputValueTrigonometrie").value;       //User input
    
    if (isNaN(FieldValue) | FieldValue == "")  //User Input is none or wrong
    {                         
        var OutputValue = document.getElementById("OutputValueSinus");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var ErrorMessage = document.createTextNode("Incorrect or no content in the input field. Note: The system uses . (dot) as decimal separator!");
        OutputValue.appendChild(ErrorMessage);          //Error message 
    }
    
    else                //If user input is correct or valid 
    {
                            //Sinus
        var OutputValue = document.getElementById("OutputValueSinus");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var Result = document.createTextNode(sin(FieldValue));   //User input * user input
        OutputValue.appendChild(Result);    //Result is output

                            //Kosinus
        var OutputValue = document.getElementById("OutputValueKosinus");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var Result = document.createTextNode(cos(FieldValue));   //User input * user input
        OutputValue.appendChild(Result);    //Result is output

                            //Tangens
        var OutputValue = document.getElementById("OutputValueTangens");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var Result = document.createTextNode(tan(FieldValue));   //User input * user input
        OutputValue.appendChild(Result);    //Result is output


        var OutputValue = document.getElementById("OutputValueKosekans");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var Result = document.createTextNode(1 / sin(FieldValue));   //User input * user input
        OutputValue.appendChild(Result);    //Result is output


        var OutputValue = document.getElementById("OutputValueSekans");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var Result = document.createTextNode(1 / cos(FieldValue));   //User input * user input
        OutputValue.appendChild(Result);    //Result is output


        var OutputValue = document.getElementById("OutputValueKotangens");
        while(OutputValue.firstChild)OutputValue.removeChild(OutputValue.firstChild);
        var Result = document.createTextNode(1 / tan(FieldValue));   //User input * user input
        OutputValue.appendChild(Result);    //Result is output
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////