function cal()
{
    var num=Math.round(Math.random()*100);
    var you=document.getElementById("Yourname").value;
    var crush=document.getElementById("Yourcrush").value;
    document.getElementById("percentage").innerHTML=num+"%";
    console.log(you)
    // document.getElementById("progress-bar").style.width="50%";
    if(num>=90){
        
        document.getElementById("content").innerHTML="You and "+crush+" love life is more than perfect. You can not believe that your love would be that perfect.";
    }
    else if(num>=80&&num<90){
        document.getElementById("content").innerHTM=you+" and "+crush+" would rather spend a lifetime with each other than face all the ages of this world alone.";
    }
    else if(num>=70&&num<80){
        document.getElementById("content").innerHTML="To be brave is to love unconditionally without expecting anything in return. You guys need to put a little effort in your relation. The nature will conspire, then!!";
    }
    else if(num>=60&&num<70){
        document.getElementById("content").innerHTML="Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. Both of you are blessed with the light of love!!";
    }
    else if(num>=50&&num<60){
        document.getElementById("content").innerHTML="Try it and see, there's about a 50/50 chance. Love Guru thinks that this relationship has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times. If things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other.";
    }
    else if((num>=30)&&(num<40)){
        document.getElementById("content").innerHTML="The chance of a relationship working out between "+you+" and "+crush+" is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.";
    }
    else if(num<30){
        document.getElementById("content").innerHTML="Dr. Non thinks a relationship might work out between "+you+" and "+crush+", but the chance is very small. A successful relationship is possible, but you both have to work on it. Do not sit back and think that it will all work out fine, because it might not be working out the way you wanted it to. Spend as much time with each other as possible. Again, the chance of this relationship working out is very small, so even when you do work hard on it, it still might not work out.";
    }
}