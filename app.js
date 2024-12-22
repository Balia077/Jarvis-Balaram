let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
let initializing=document.querySelector("#intializing")
let activate=document.querySelector("#activate")
let jarvis=document.querySelector("#jarvis")
let box=document.querySelector("#box")
let medium=document.querySelector("#medium")
var music=document.querySelector("#music")


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.lang='en-US';
    text_speak.volume=1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<=17){
        speak("Good Afternoon Sir")
    }
    else if(hours>=17 && hours<=24){
        speak("good night sir")
    }
    else{
        speak("Good Evening Sir")
    }
}

window.addEventListener('load', ()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    initializing.style.display="block"
     activate.style.display="none"
})

activate.addEventListener("click", ()=>{
      jarvis.style.display="block"
      voice.style.display="block"
      box.style.display="block"
      medium.style.display="block"
      music.play()
})

function takeCommand(message){
    btn.style.display="flex"
        voice.style.display="none"
       
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir, i'm jarvis what can i help you")
    }
    else if(message.includes("who are you")){
        speak("I am jarvis, created by balaram sir")
    }
    else if(message.includes("what is my name")){
        speak("you are Balaram sir, you created me, i have honour that i am your virtual assistant")
    }
    else if(message.includes("who is balram sir")||message.includes("balaram")){
        speak("balaram sir is my boss.")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("dattebayo")){
        speak("naruto uzumaki")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.close("www.whatsapp.com")
    }
    else if(message.includes("close whatsapp")){
        speak("closing whatsapp")
        window.close("www.whatsapp.com")
    }
    else if(message.includes("open flipkart")){
        speak("opening flipcart")
        window.open("https://www.flipkart.com")
    }
    else if(message.includes("open vs code")){
        speak("opening vs code")
        window.open("vscode://")
    }
    else if(message.includes("deactivate")){
        speak("deactivating")
    }
    else if(message.includes("ghoda gehi")){
        speak("rohan chodi pua to gandi re giha")
    }
    else if(message.includes("banda")){
        speak("bia")
    }
    else if(message.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else{

        let finalText = "this is what i found on internet regarding" + message.replace("jarvis","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`)
    }
    
}
