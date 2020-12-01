//GLOBAL VARIABLES
var t = 0;// counter for how much unit time passes with the processor
var numStop = 13; //timer to stop the process from running
var arrTimes = [1, 3, 3, 7, 9];//arrival times
var execTimes = [2, 3, 3, 1, 2];//length of execution
var isProcess = ['n','n','n','n','n'];//array of boolean values on if a process is being executed currently
var justDone = ['n','n','n','n','n'];//array of boolean values on if a process recently finished execution
var table = document.getElementById("myTable");
var span = document.querySelector('span');
var increment = document.getElementById('increment'); // find the element with the ID 'increment'

increment.onclick = processStart;
  
function processStart()
{
  var execute = setInterval(function() 
  {
    //LOCAL VARIABLES AND CREATING THE NEXT ROW
	var row = table.insertRow(-1); //Inserting the row and the cells within it
    var c0 = row.insertCell(0);
    var c1 = row.insertCell(1);
    var c2 = row.insertCell(2);
    var c3 = row.insertCell(3);
    var c4 = row.insertCell(4);
    var c5 = row.insertCell(5);
    var arr = [c1,c2,c3,c4,c5];
    var elem;
	var min;
	var ind;
	
	++t;//Counter increments and it is denoted in the table
    c0.innerHTML = t;
	
	//ALLOCATING THE NEXT PROCESS
    if (!isProcess.includes('y')) //if nothing is being processed, allocate the next process
    {
      min = Math.min.apply(null, arrTimes);//find the next minumum arrival time
      ind = arrTimes.indexOf(min);//find the index of this arrival time
      if (t >= arrTimes[ind]) //if that process has arrived, it will be processed
      {
          isProcess[ind] = 'y';
          arr[ind].innerHTML = 'Processing';
      }
    }

	//ASSIGNING COLOURS, VALUES AND MAKING INCREMENTS
    for (elem = 0; elem < arr.length; elem++) //for each process
    {
       if (t >= arrTimes[elem])
       {
         if (isProcess[elem] == 'y') //if the process arrived and is being processed
         {
            arr[elem].style.backgroundColor = '#AAFF99'; //green represents being processed
            execTimes[elem]--;
            if (execTimes[elem] == 0)// if it finished processing
            {
                arrTimes[elem]= Number.MAX_VALUE; //designated the maximum value to never again be selected for processing
                isProcess[elem]= 'n';//The process signal switches to no, and it is just newly finished
                justDone[elem]= 'y';
            }
         }
         else  //if it has arrived and is not being processed
         {
            if (arrTimes[elem]== t) //it is thus ready to be processed
            {
            	arr[elem].innerHTML = 'Ready';
            }
            arr[elem].style.backgroundColor = '#F2B3FF';
         }
       }
       else
       {
         if (arrTimes[elem]== Number.MAX_VALUE) //if it has finished processing
         {
            if (justDone[elem]=='y')
            {
            	arr[elem].innerHTML = 'Complete';
            	arr[elem].style.backgroundColor = '#B3BFFF';
                justDone[elem]='n';
            }
         }
       }
    }
  if (t== numStop)
  {
  	clearInterval(execute);
  }
  
  }, 1000);
}