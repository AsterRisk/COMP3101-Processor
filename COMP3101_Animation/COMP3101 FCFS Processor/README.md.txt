Information pertaining to the processor:

	At this time, the processor is only limited to the implementation of 5 processes.
	In addition, any change to the array of interval times must be made by changing the JavaScript script and resaving.
	
	This simulation was built using HTML, CSS and JavaScript without any additional tools. 
	StackOverflow.com and w3schools.com were the only websites used to create the simulation.

	States of the processes are denoted by the colour fill and the words. 
	Mint Green - Processing. Pink - Ready. Blue - Complete.

	The processor essentially is shown as a table of process executions. 
	The table indicates which processes are chosen to be executed as well as when they are completed and when they are ready and waiting.
	The first come first serve processing means that the processes with the earlier times are favoured for processing.

Data Structures:

	Array - Arrays are used to store the information on each process. They are the main structure used.

Global Variables:

	t  - The counter for the processor. The unit of time passing is denoted in the first column of the table.
	numStop - The timer that will stop the process from running.
	arrTimes - The array storing the respective points where the processes arrive to be executed.
	execTimes - The array storing how long each process will take to be executed.
	isProcess - The array storing boolean values indicating if a process is currently being executed.
	justDone - The array storing boolean values indicating if a process just finished being processed.
	table - The actual table displaying all the processor information.
	span - The container for the process.
	increment - The ID of the button that starts the process when pressed.

Local Variables:

	row - The new row created
	c0, c1, c2, c3, c4, c5 - The new cells in each new row being created.
	arr - Array holding the values of each respective cell denoting a process.
	elem - integer index value for each cell in the array.
	min - integer to store the arrival time earliest process that has not yet been executed.
`	ind - integer index value for the earliest process that has not yet been executed.

Functions:

	processStart - Responsible for the running of the entire process.