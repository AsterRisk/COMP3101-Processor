Important information about the processor:
> Multiprocessor - The processor can process several processes at once. 

> No more than 10 processes can be in the waiting queue at any one time. 

> This simulation was built using HTML, CSS and JavaScript. No Additional tools were used. Where used, external resources have been cited. 

> State of processes is denoted by the border on the process circle. 
>	Faded Green - Ready |
>	Yellow - Running |
>	Bright Green - Completed Execution |

--DATA STRUCTURS--

PROCESS:

>ADT>
>Attributes>
    
id - an integer denoting the PID of the process

timeRequired - an integer denoting the time requirement of the job in milliseconds

state - a String denoting the current state of the process [ready, running, (done, finished)].  (Done, Finished) both come together to represent the standard "completed" state. They are separated solely for the purpose of visualisation. Blocked processes were NOT implemented for this  simulation. 
priority - An integer denoting the urgency of the process. Lower priorities are treated as more urgent. For this simulation, priorities range from [0, 10]

PRIORITY QUEUE:

>ADT>
>Attributes>
    
size - an integer denoting the number of processes currently in the queue.

maxSize - an integer denoting how many processes can be enqueued at once.

processes - an Array of the <Process>'s currently awaiting execution.
    
--FUNCTIONS--

--Add Process Button--:

Randomly generates a process with a random priority and a time requirement in secons given by the user. It is then inserted in order to the Priority Queue.

--Start Simulation--:

After a short delay, starts running processes from the priority queue from order of highest priority to lowest. If a process is added while the queue is running, it is still inserted in the queue in position based on its priority.

--Visualising the processor--:

Detailed output about what's going on is contained in the console of the browser window. Includes listing the current priority queue and the stating which processes are currently running and which processes have been finished. 

--Hover Processes--:

Mousing over a process will show a tooltip giving more details about the process being hovered.
