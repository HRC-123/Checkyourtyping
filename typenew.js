var randText = [
  `What were the chances? It would have to be a lot more than 100 to 1. It was likely even more than 1,000 to 1. 
  The more he thought about it, the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. 
  People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. 
  Whatever the odds of it happening, he knew they were big. What he didn't know was whether this happening was lucky or unlucky.`,

  `Sometimes it's just better not to be seen. That's how Harry had always lived his life.
   He prided himself as being the fly on the wall and the fae that blended into the crowd. 
   That's why he was so shocked that she noticed him.`,

   `Betty was a creature of habit and she thought she liked it that way. 
   That was until Dave showed up in her life. 
   She now had a choice to make and it would determine whether her lie remained the same or if it would change forever.`,

   `The choice was red, green, or blue. It didn't seem like an important choice when he was making it, but it was a choice nonetheless. 
   Had he known the consequences at that time, he would likely have considered the choice a bit longer. 
   In the end, he didn't and ended up choosing blue.`,

   `She glanced up into the sky to watch the clouds taking shape. 
   First, she saw a dog. Next, it was an elephant. 
   Finally, she saw a giant umbrella and at that moment the rain began to pour.`,

   `Sometimes it's simply better to ignore the haters. 
   That's the lesson that Tom's dad had been trying to teach him, but Tom still couldn't let it go.
    He latched onto them and their hate and couldn't let it go, but he also realized that this wasn't healthy. 
    That's when he came up with his devious plan.`,

    `Dragons don't exist they said. 
    They are the stuff of legend and people's imagination. 
    Greg would have agreed with this assessment without a second thought 24 hours ago. 
    But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told.`,

    `There was a time when this wouldn't have bothered her. 
    The fact that it did actually bother her bothered her even more. 
    What had changed in her life that such a small thing could annoy her so much for the entire day? 
    She knew it was ridiculous that she even took notice of it, yet she was still obsessing over it as she tried to fall asleep.`,

    `The red line moved across the page. 
    With each millimeter it advanced forward, something changed in the room. 
    The actual change taking place was difficult to perceive, but the change was real. 
    The red line continued relentlessly across the page and the room would never be the same.`,

    `The time to take action was now. 
    All three men knew in their hearts this was the case, yet none of them moved a muscle to try. 
    They were all watching and waiting for one of the others to make the first move so they could follow a step or two behind and help. 
    The situation demanded a leader and all three men were followers.`,
];

var selectText = document.querySelector('.text');
 var randomIndex;
var max=10;
function generate(){
   randomIndex = Math.floor((Math.random()*(max)));
  // randomIndex%=6;
  console.log(randomIndex);
  selectText.innerHTML=`${randText[randomIndex]}`;
  // selectText.style="color:red;"
}

generate();
// generate();

//TODO : TARGET -> 1 Starting the timer from 60 to 0;
//TODO :           Ending the timer at 0 not proceeding to -1->>;
//TODO :            Clearing the document;
var actualText=randText[randomIndex];
let t = document.querySelector(".time");
var text = document.querySelector(".inp");
let totalDiv = document.querySelector('#total');
var myText;
var wpm;
var flag=false;
var hell=false;
let sec = 59;
let minutes = 0;
let p1;

text.addEventListener('input', updateTime);

function updateTime() {
  text.removeEventListener('input', updateTime);

  function p1() {
    return new Promise((resolve) => {
      let p = setInterval(() => {
        t.innerText = `${minutes}${minutes} : ${sec}`;
        console.log("Hii I had started " + sec);
        console.log(sec);
        sec--;
        if (sec < 0 || flag==true) {
          clearInterval(p);
          console.log("I am done bro !!");
          resolve(100);
        }
      }, 1000);
    });
  }

  //  p1();
  async function open() {
    let r = await p1();

    if(!flag){
      console.log("Hello");
    //  console.log(p1);
    //document.body.innerHTML="";

    console.log("We did it");
    //console.log("Hello");
     myText = text.value;
    console.log(myText);
    // document.getElementById("demo").innerText = myText;
    }
    
  }
// TODO: TARGET -> 2  To get the text entered and count the text entered which is correct;
  async function clear(){
    await open();
    if(!flag){
      // console.log("This is for now bitch");
      // totalDiv.innerHTML="BITCH";
      // totalDiv.innerHTML="";
      // console.log("This is for now bitch");
     // totalDiv.style="color:red;font-size:20vw;justify-content:center;align-items:center;";
     compare();
    }
   
  }

    clear();

 
}

function submit() {
  console.log("Hello");
   myText = text.value;
  console.log(myText);
  // document.getElementById("demo").innerText = myText;

  // console.log("This is for now bitch");
    // totalDiv.innerHTML="BITCH";
    
    // console.log("This is for now bitch");
    // totalDiv.style="color:red;font-size:20vw;justify-content:center;align-items:center;";
    flag=true;
    if(flag){
      compare();
    }
    
}
// submit();

function compare(){
  let a = myText.length;
  let k = actualText.length-myText.length;
  let acc=0;
  for(let i=0;i<myText.length;i++){
    if(actualText[i]!=myText[i]){
      acc+=1;
    }
  }
  
  while(k--){
    myText+='0';
  }
  let count=0;
 
  for(let i=0;i<a;i++){
   if(actualText[i]==myText[i]){
      count+=1;
    }
  }
  
  acc=(a-acc);
  acc/=a;
  acc*=100;
  wpm = (count*60);
  wpm/=((60-sec)*5);
  wpm = wpm.toFixed(1);
  acc = acc.toFixed(1);
  totalDiv.innerHTML="The WPM of your typing is : " + wpm + " and Accuracy is : " + acc + " %";
  let nex = document.createElement('p');
  nex.innerHTML="Refresh the page to try again";
  totalDiv.appendChild(nex);
  
  totalDiv.style="color:yellow;font-size:7vh;display:flex;flex-direction:column;align-items:center;justify-content:center;"
  console.log(count);
}


// updateTime();


//! Issues
//! 1.Clear Code
//! 2.Accuracy and wpm calculation mistakes
//TODO: ADD A STOPWATCH
//TODO: MAKE USERS WRITE ON THE PARAGRAPH ITSELF
//TODO: SET DIFFERENT TIMERS
//TODO: MAKE SUBMIT BUTTON AUTO


