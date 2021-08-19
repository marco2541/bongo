var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

// document.addEventListener("click", function(event){
//     let boton = event.target.dataset.boton;
//     let sonido = do

// }

function playredoble(){
       
       let audio= document.getElementById("redoble");
       audio.curretTime=0;
        audio.play();

}

    function playcrash(){
        
        let audio= document.getElementById("crash");
        audio.curretTime=0;
        audio.play();

    }

        function playtom2(){
        
            let audio= document.getElementById("tom2");
            audio.curretTime=0;
            audio.play();
    
    }
            function playtom1(){
            
                let audio= document.getElementById("tom1");
                audio.curretTime=0;
                audio.play();
        
        }
                function playtom3(){
            
                    let audio= document.getElementById("tom3");
                    audio.curretTime=0;
                    audio.play();
            
            }
                    function playhit(){
            
                        let audio= document.getElementById("hit");
                        audio.curretTime=0;
                        audio.play();
                
                }
                        function playbombo(){
                    
                            let audio= document.getElementById("bombo");
                            audio.curretTime=0;
                            audio.play();
                    
                    }
                            function playcaja(){
                            
                                let audio= document.getElementById("caja");
                                audio.curretTime=0;
                                audio.play();
                        
                        }



