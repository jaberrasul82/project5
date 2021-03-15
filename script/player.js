class Player{
constructor(){
var heightMain=document.getElementById("player");
heightMain.style.height=screen.height + "px";
if(screen.width<500){
heightMain.style.width=screen.width + "px";
}
var heightDiv=document.getElementById("content");
heightDiv.style.height=screen.height-300 +"px";

}
}

onload=new Player();




//class duttons
class Audio_player{
constructor(){
    this.audio_file=document.getElementById("audio_file");
    this.title_raadio=document.getElementById("title_radio");
    this.paly_pause_button=document.getElementById("play_pause");
    this.isplay;
    this.paly_pause_button.addEventListener("click",()=>{
        this.play_pause();
    });


    

    this.names_radio=[];
    this.names_radio[0]="RADIO ALGERY";
    this.names_radio[1]="RADIO ROJAVA";
    this.names_radio[2]="RADIO MARROCO";
    
    this.source_audio=[];
    this.source_audio[0]="http://ch3.ice.infomaniak.ch/ch3-64.aac";
    this.source_audio[1]="http://198.7.59.28:8146/stream?type=http&nocache=205";
    this.source_audio[2]="http://live.medi1.com/medi1#.mp3";
    
    this.server=0;
    
    this.setresource();
document.getElementById("next").addEventListener("click",()=>{
    if(this.server<this.source_audio.length-1){
        ++this.server;
        this.isplay=false;
    }else{
        this.server=0;
    }
    localStorage.setItem("save-posion",this.server);
    this.setresource();
});
document.getElementById("back").addEventListener("click",()=>{
if(this.server>0){
    --this.server;
    this.isplay=false;
}else{
    this.server=this.source_audio.length-1;
}
localStorage.setItem("save-posion",this.server);
this.setresource();
});


}

setresource(){
    if(localStorage.getItem("save-posion")!=null){
this.server=localStorage.getItem("save-posion");
    }
    this.audio_file.src=this.source_audio[this.server];
    this.title_raadio.innerHTML=this.names_radio[this.server];
   this.play_pause();
      }



play_pause(){
if(this.isplay==false){
    this.paly_pause_button.src="./img/pause.jpg";
this.audio_file.play();
this.isplay=true;
}else{
    this.paly_pause_button.src="./img/play.jpg";
    this.audio_file.pause();
    this.isplay=false;
}
}


}
onload=new Audio_player();
