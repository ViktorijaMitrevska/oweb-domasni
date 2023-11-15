const like1=document.getElementById("like-button1");
const likeCount1=document.getElementById("like-count1");

function addLike1(){
    if(like1.style.backgroundColor=='grey'){
        like1.style.backgroundColor='red';
        likeCount1.innerHTML=parseInt(likeCount1.innerHTML)+1;
    }
    else{
        like1.style.backgroundColor='grey';
        likeCount1.innerHTML=parseInt(likeCount1.innerHTML)-1;
    }
}

const like2=document.getElementById("like-button2");
const likeCount2=document.getElementById("like-count2");
function addLike2(){
    if(like2.style.backgroundColor=='grey'){
        like2.style.backgroundColor='red';
        likeCount2.innerHTML=parseInt(likeCount2.innerHTML)+1;
    }
    else{
        like2.style.backgroundColor='grey';
        likeCount2.innerHTML=parseInt(likeCount2.innerHTML)-1;
    }
}

const like3=document.getElementById("like-button3");
const likeCount3=document.getElementById("like-count3");
function addLike3(){
    if(like3.style.backgroundColor=='grey'){
        like3.style.backgroundColor='red';
        likeCount3.innerHTML=parseInt(likeCount3.innerHTML)+1;
    }
    else {
        like3.style.backgroundColor='grey';
        likeCount3.innerHTML=parseInt(likeCount3.innerHTML)-1;
    }
}
var comment1=document.getElementById("comment-button1");
var commentCount1=document.getElementById("comment-count1");


function addComment1(){
    
    if(comment1.style.backgroundColor=='grey'){
        window.prompt("Enter comment here");
        comment1.style.backgroundColor='red';
        commentCount1.innerHTML=parseInt(commentCount1.innerHTML)+1;
    }
    else {
        comment1.style.backgroundColor='grey';
        commentCount1.innerHTML=parseInt(commentCount1.innerHTML)-1;
    }
    
}
//comment.addEventListener('click',funkcija2,false)
function updateText1(){
    const newText=document.getElementById('ring1');
    newText.innerHTML='Прекрасен производ!';
}
function updateText2(){
    const newText=document.getElementById('ring2');
    newText.innerHTML='Прекрасен производ!';
}
function updateText3(){
    const newText=document.getElementById('ring3');
    newText.innerHTML='Прекрасен производ!';
}
function updateText4(){
    const newText=document.getElementById('ring4');
    newText.innerHTML='Прекрасен производ!';
}
function updateText5(){
    const newText=document.getElementById('necklace1');
    newText.innerHTML='Прекрасен производ!';
}
function updateText6(){
    const newText=document.getElementById('necklace2');
    newText.innerHTML='Прекрасен производ!';
}
function updateText7(){
    const newText=document.getElementById('necklace3');
    newText.innerHTML='Прекрасен производ!';
}
function updateText8(){
    const newText=document.getElementById('necklace4');
    newText.innerHTML='Прекрасен производ!';
}
function updateText9(){
    const newText=document.getElementById('earrings1');
    newText.innerHTML='Прекрасен производ!';
}
function updateText10(){
    const newText=document.getElementById('earrings2');
    newText.innerHTML='Прекрасен производ!';
}
function updateText11(){
    const newText=document.getElementById('earrings3');
    newText.innerHTML='Прекрасен производ!';
}
function updateText12(){
    const newText=document.getElementById('earrings4');
    newText.innerHTML='Прекрасен производ!';
}

let stars =  
    document.getElementsByClassName("star"); 
let output =  
    document.getElementById("output"); 
  
function rate(n) { 
    remove(); 
    for (let i = 0; i < n; i++) { 
        if (n == 1) cls = "one"; 
        else if (n == 2) cls = "two"; 
        else if (n == 3) cls = "three"; 
        else if (n == 4) cls = "four"; 
        else if (n == 5) cls = "five"; 
        stars[i].className = "star " + cls; 
    } 
    output.innerText = "Rating is: " + n + "/5"; 
} 
   
function remove() { 
    let i = 0; 
    while (i < 5) { 
        stars[i].className = "star"; 
        i++; 
    } 
}
