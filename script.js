addEventListener("DOMContentLoaded",()=>{
    let Photo = document.getElementById("Profile");
    let Star = document.querySelector('img[src="svg/Star.svg"]');
    let PortfolioText = document.querySelectorAll("#Portfolio-photo span");
    let Aboutme = document.querySelector("header #nav-bar #nav-aboutme");
    let Resume = document.querySelector("header #nav-bar #nav-resume");
    let textAboutme = document.querySelector("header #nav-bar #nav-aboutme span")
    let textResume = document.querySelector("header #nav-bar #nav-resume span")
    let Portfolio1 = document.querySelector("section #back-sec-portfolio #Portfolio-photo #Portfolio1")
    let Portfolio2 = document.querySelector("section #back-sec-portfolio #Portfolio-photo #Portfolio2")
    let Portfolio3 = document.querySelector("section #back-sec-portfolio #Portfolio-photo #Portfolio3")
        function arrelementstyle (elementstyleLeftconst,element){
           
            Array.from(PortfolioText).forEach((element)=>{
                this.element = element;
                let elementstyle = getComputedStyle(element);
                let elementstyleLeft = elementstyle.getPropertyValue('left')
                elementstyleLeft = elementstyleLeft.split('p')
                this.elementstyleLeft = new Number(elementstyleLeft[0]);
                })
                this.element = new Array(element);
                this.elementstyleLeft = elementstyleLeftconst;
                console.log(element)
            }
            arrelementstyle()
                   
                    
    if ("ontouchstart" in document.body){

        Aboutme.addEventListener("touchstart",()=>{
            textAboutme.style.top = "-15rem"
            textAboutme.classList.add("movetextaboutme")
        })
        Aboutme.addEventListener("touchend",()=>{
            textAboutme.style.top = "-10rem"
            textAboutme.classList.remove("movetextaboutme")
        })
        Resume.addEventListener("touchstart",()=>{
            textResume.style.top = "-15rem"
        })
        Resume.addEventListener("touchend",()=>{
            textResume.style.top = "-10rem"
        })
        
        // Photo Animation
        Photo.addEventListener("touchstart",(e)=>{
            
            if (Star.classList.contains("star-const")){
                Star.classList.replace("star-const","star-move")
            }
             else if (Star.classList.contains("star-move")){
                Star.classList.replace("star-move","star-const")
            }
            
        })
        Photo.addEventListener("touchend",(e)=>{
        
            if (Star.classList.contains("star-const")){
                Star.classList.replace("star-const","star-move")
            }
             else if (Star.classList.contains("star-move")){
                Star.classList.replace("star-move","star-const")
            }
        })


    }

    if ("onclick" in document.body){
        
    
        Aboutme.addEventListener("mouseover",()=>{
            textAboutme.style.top = "-15rem";
            textAboutme.classList.add("movetextaboutme")
        })
        Aboutme.addEventListener("mouseout",()=>{
            textAboutme.style.top = "-10rem";
            textAboutme.classList.remove("movetextaboutme")
        })
        Resume.addEventListener("mouseover",()=>{
            textResume.style.top = "-15rem";
            textResume.classList.add("movetextresume")
        })
        Resume.addEventListener("mouseout",()=>{
            textResume.style.top = "-10rem";
            textResume.classList.remove("movetextresume")
        })
        
        // Photo Animation
        Photo.addEventListener("mouseover",(e)=>{
            //Star
            if (Star.classList.contains("star-const")){
                Star.classList.replace("star-const","star-move")
            }
             else if (Star.classList.contains("star-move")){
                Star.classList.replace("star-move","star-const")
            } 
            //Portfolio Text
            //Portfolio1
            if (Portfolio1.classList.contains("Portfolio1")){
                Portfolio1.classList.replace("Portfolio1","Portfolio1move")
            }
             else if (Portfolio1.classList.contains("Portfolio1move")){
                Portfolio1.classList.replace("Portfolio1move","Portfolio1")
            } 
            //Portfolio2
            if (Portfolio2.classList.contains("Portfolio2")){
                Portfolio2.classList.replace("Portfolio2","Portfolio2move")
            }
             else if (Portfolio1.classList.contains("Portfolio2move")){
                Portfolio2.classList.replace("Portfolio2move","Portfolio2")
            } 
            //Portfolio3
            if (Portfolio3.classList.contains("Portfolio3")){
                Portfolio3.classList.replace("Portfolio3","Portfolio3move")
            }
             else if (Portfolio3.classList.contains("Portfolio3move")){
                Portfolio3.classList.replace("Portfolio3move","Portfolio3")
            } 
            
            
            
        })
        Photo.addEventListener("mouseout",(e)=>{
            //Star

            if (Star.classList.contains("star-const")){
                Star.classList.replace("star-const","star-move")
            }
             else if (Star.classList.contains("star-move")){
                Star.classList.replace("star-move","star-const")
            }

            //Portfolio Text

            //Portfolio1
            if (Portfolio1.classList.contains("Portfolio1")){
                Portfolio1.classList.replace("Portfolio1","Portfolio1move")
            }
             else if (Portfolio1.classList.contains("Portfolio1move")){
                Portfolio1.classList.replace("Portfolio1move","Portfolio1")
            } 
            //Portfolio2
            if (Portfolio2.classList.contains("Portfolio2")){
                Portfolio2.classList.replace("Portfolio2","Portfolio2move")
            }
             else if (Portfolio2.classList.contains("Portfolio2move")){
                Portfolio2.classList.replace("Portfolio2move","Portfolio2")
            } 
            //Portfolio3
            if (Portfolio3.classList.contains("Portfolio3")){
                Portfolio3.classList.replace("Portfolio3","Portfolio3move")
            }
             else if (Portfolio3.classList.contains("Portfolio3move")){
                Portfolio3.classList.replace("Portfolio3move","Portfolio3")
            } 
            
        })
    
    }
    
































        
















































})