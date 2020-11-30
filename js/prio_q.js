/*class HashTable //hash table provided by: https://gist.github.com/rohan-paul/4518f6a2c32d04431b467dc1589ed1fd#file-hash-table-general-implementation-js
{
  constructor() {
    this.table  = new Array(137);
    this.values = [];
  }
  
  // Defining the hashing function which allows a sting to be used as a key
  hash(string) {
    const H   = 37;
    let total = 0;

    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length -1
    }
    return parseInt(total);
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }

  put(data) {
    const pos = this.hash(data);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.hash(key)];
  }
}

// HashTable with Linear Probing technique of collision-resolution.
class HashTableLinearP extends HashTable {
  constructor() {
    super();
    this.values = new Array();
  }

  put(key, data) {
    const pos = this.hash(key);
    if(this.table[pos] === undefined) {
      this.table[pos]  = key;
      this.values[pos] = data;
    } else {
      this.table[pos]  = key;
      this.values[pos] = data;
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (hash > -1) {
      for (let i = hash; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
    return undefined;
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.values[key]);
      }
    }
  }
  
  
function sortProcesses(h, numProc)
{
    console.log(numProc);
    let x, y, swap;
    for (x=0;x<numProc;x++)
    {
        for(y=0;y<numProc;y++)
        {
            
            if(h[y].get("priority") > h[x].get("priority"))
            {
                console.log("swap");
                swap = h[x];
                h[x] = h[y];
                h[y] = swap;
            }
        }
    }
    for (x=0;x<numProc;x++)
    {
        console.log("Process ID: " + h[x].get("id"));
        console.log("Priority: " + h[x].get("priority"));
    }
    return h;
}
}*/

class Process
{
    constructor(id, priority, timeRequired)
    {
        console.log("time: " + timeRequired);
        this.id = id;
        this.priority = priority;
        this.timeRequired = Math.floor(timeRequired*1000);
        this.state = "ready";
    }
    
    tooltip()
    {
        return "<span class = 'tooltip'><pre>ID: "+this.id + "<br>Priority: "+this.priority+"<br>State: "+this.state+"<br>Time (ms): " + this.timeRequired+"</pre></span>";
    }
    
    html()
    {
        return "<div class = 'process " + this.state + "' id = '" + this.id +"'>" + this.tooltip() + "<p>" + this.id + "</p>" +  "</div>";
    }
    
    getDOMElement()
    {
        console.log("Trying to get DOM Element with ID: " + this.id)
        return document.getElementById(String(this.id));
    }
    
    changeState(newState)
    {
        let rep;
        let buffer = this.state;
        this.state = newState;
        rep = document.getElementById(this.id);
        rep.classList.remove(buffer);
        rep.classList.add(newState);
        rep.innerHTML = this.tooltip();
        if(newState == "running")
        {
            setTimeout(()=> {this.changeState("done");}, this.timeRequired);
        }
        if(newState == "done")
        {
            setTimeout(()=> {this.changeState("finished");}, 500);
        }
    }
}

class PriorityQueue
{
    constructor(size)
    {
        this.processes = new Array(size);
        this.size = 0;
        this.maxSize = size;
    }
    
    isEmpty()
    {
        return this.size==0;
    }
    
    printQueue()
    {
        console.log("-----PRIORITY QUEUE-----");
        console.log("Num Elements: " + this.size);
        let x;
        for(x=0;x<this.size;x++)
        {
            console.log("ID: " + this.processes[x].id);
            console.log("Priority: " + this.processes[x].priority);
        }
    }
    
    enqueue(p)
    {
        if(this.isEmpty())
        {
            this.processes.splice(0, 0, p); //put the process at index 0
            this.size++;
            this.printQueue();
            return;
        }
        if(this.size > this.maxSize)
        {
            alert("Maximum number of processes queued. Please wait until some are finished processing. ");
            this.printQueue();
            return; //don't enqueue too many processes for easy visualisation
        }
        let x;
        for(x=0;x<this.size;x++)
        {
            if(this.processes[x].priority > p.priority)
            {
                console.log("Hello!");
                this.processes.splice(x, 0, p); // insert the new process in order
                this.size++;
                this.printQueue();
                return;
            }
        }
        this.processes.splice(this.size, 0, p); //if the process is of the lowest priority, just push it to the end of the process list
        this.size++;
        this.printQueue();
    }
    
    dequeue()
    {
        if(this.isEmpty())
        {
            console.log("Queue is empty.");
            return;
        }
        else
        {
            run(this.processes[0]);
            this.processes.shift();
        }
        this.size--;
        this.printQueue();
    }
    
    
}


function shiftUp(entity)
{
    
}

function pass()
{
    
}



function run(process)
{
    console.log("Running Process: " + process.id)
    process.changeState("running");
    
}

/*function runProcess()
{
    if (numProcesses<1)
    {
        return;
    }
    let x;
    let running_proc = prio_q[0];
    console.log("Processing: " + running_proc.get("id"));
    let representation = document.getElementById(running_proc.get("id"));
    representation.classList.remove("ready");
    representation.classList.add("running"); //change state of the process to running
    running_proc.put("state", "running");
    
    representation.innerHTML = "<span class = 'tooltip'><pre>ID: "+running_proc.get("id") + "<br>Priority: "+running_proc.get("priority")+"<br>State: "+running_proc.get("state")+"<br>Time Remaining: " + running_proc.get("time-remaining")+"</pre></span>";
    
    
    setTimeout(()=>{(run(representation))}, 1000*running_proc.get("time-remaining"));//wait for the process to finish
    
    for(x=1;x<numProcesses;x++) //move all the other processes forward in the queue
    {
        prio_q[x-1] = prio_q[x];
    }
    for(x=running_proc.get("id");x<numProcesses;x++)
    {
        processes[x-1] = processes[x];
        shiftUp(processes[x]);
    }
    console.log(numProcesses)
    numProcesses -= 1;
    console.log(numProcesses)
    buffer = [prio_q, processes, numProcesses];
    return;
}*/

window.onload = function(){
    //alert("Hi")
    prio_q = new PriorityQueue(10);
    numProcesses = 0;
    let id = 1; // id of the first process to be generated
    canvas = document.getElementById("animation_pane");
    //let ctx = canvas.getContext("2d"); 
    btn = document.getElementById("add-process");
    subBtn = document.getElementById("dequeue");
    let flag = false;
    btn.addEventListener("click", function(event)
    {
        
        newProcess = new Process(id, Math.floor(Math.random()*10), prompt("Enter the time for the process in seconds: "));
        canvas.innerHTML += newProcess.html();
        numProcesses += 1;
         //increment ID to be the ID of the next process to be created 
        prio_q.enqueue(newProcess);
        //put the process in the array of processes
        //add the event listener to block a process

        /*newProc.addEventListener("click", function(event)
        {
           if (newProc.classList.contains("ready"))
           {
                newProc.classList.remove("ready");
                newProc.classList.add("blocked");
                process.put("state", "blocked");
           }
           else
           {
               if(newProc.classList.contains("running"))
               {
                   newProc.classList.remove("running");
                   newProc.classList.add("blocked");
                   process.put("state", "blocked");
               }
               else
               {
                   newProc.classList.remove("blocked");
                   newProc.classList.add("ready");
                   process.put("state", "ready");
               }

            }
            newProc.removeChild(tooltip);
            tooltip.innerHTML = "<span class = 'tooltip'><pre>ID: "+process.get("id") + "<br>Priority: "+process.get("priority")+"<br>State: "+process.get("state")+"<br>Time Remaining: " + process.get("time-remaining")+"</pre></span>";
            newProc.appendChild(tooltip);
          });*/
        id = numProcesses+1;
       
        
        /*prio_q = buffer[0];
        processes = buffer[1];
        numProcesses = buffer[2];*/
    });
    subBtn.addEventListener("click", function()
    {
        
        let delay = prio_q.processes[0].timeRequired+200;
        setInterval(function(){
            if(prio_q.size > 0)
            {
                prio_q.dequeue();
                delay = prio_q.processes[0].timeRequired+200;
            }
        }, delay);    
    });
    
}