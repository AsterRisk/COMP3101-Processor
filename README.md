Important information about the processor:

>No more than 10 processes can be in the waiting queue at any one time. 
>This simulation was built using HTML, CSS and JavaScript. No Additional tools were used. Where used, external resources have been cited. 

--DATA STRUCTURS--

PROCESS:
<ADT>
<Attributes>
id - an integer denoting the PID of the process
timeRequired - an integer denoting the time requirement of the job in milliseconds
state - a String denoting the current state of the process [ready, running, (done, finished)]. Blocked processes were NOT implemented for this  simulation. 
priority - An integer denoting the urgency of the process. Lower priorities are treated as more urgent. 

PRIORITY QUEUE:
<ADT>
<Attributes>
size - an integer denoting the number of processes currently in the queue.
maxSize - an integer denoting how many processes can be enqueued at once.
processes - an Array of the <Process>'s currently awaiting execution.
    
--FUNCTIONS--

--Add Process Button--:

Generates a process with a priority and a time requirement in seconds, both are given by the user. It is then inserted in order to the Priority Queue.

--Start Simulation--:

After a short delay, starts running processes from the priority queue from order of highest priority to lowest. Processes cannot be added to the queue while the simulation is running

--Visualising the processor--:

Detailed output about what's going on is contained in the console of the browser window. Includes listing the current priority queue and the stating which processes are currently running and which processes have been finished. 

--Hover Processes--:

Mousing over a process before the simulation starts will show a tooltip giving more details about the process being hovered.