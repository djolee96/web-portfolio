// nav animation on section change
{
const sections = document.querySelectorAll("section");
const selected = document.querySelector(".selected");

const options ={
    threshold:0.7
};


let observer = new IntersectionObserver (navCheck, options);

function navCheck(entries){
    entries.forEach( entry => {
        const className= entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const cords=activeAnchor.getBoundingClientRect();
        const directions= {
            height: cords.height,
            width: cords.width,
            top:cords.top,
            left: cords.left
        }

        if(entry.isIntersecting){
            selected.style.setProperty('left',`${directions.left}px`)
            selected.style.setProperty('top',`${directions.top}px`)
            selected.style.setProperty('width',`${directions.width}px`)
            selected.style.setProperty('height',`${directions.height}px`)
        }
        
    })
};

sections.forEach( section =>{
    observer.observe(section)   
} );

}


// show on click contact form 

{
    const icons= document.querySelector(".icons")
    const screen= window.innerWidth
    const contactBtn=document.querySelector(".contact-button")
    const home= document.querySelector(".home")
    const form=document.querySelector(".contact-form")
    const contact=document.querySelector(".contact")

    const showForm=()=>{
        form.style.display="flex"
        home.style.justifyContent="space-between"
        contact.style.width="50%"
    }
    const showIcons=()=>{
        icons.style.display="flex"
    }

    contactBtn.addEventListener("click", ()=>{
        screen>590? showForm():showIcons()
    })

  
}

// nav for mobile 

{
    const burger= document.querySelector(".burger");
    const burgerLines=burger.querySelectorAll("div")
    const nav = document.querySelector(".mobileNav");
    const navLinks= nav.querySelectorAll("li");

    const switchBurger=(burgerX)=>{
    
        const displayX=()=>{
            burgerLines[0].style.transform="rotate(45deg) scale(2)"
            burgerLines[1].style.display="none"
            burgerLines[2].style.transform="rotate(-45deg) scale(2)"
        }
       
        const dipslayLines=()=>{
            burgerLines[0].style.transform="rotate(0deg) scale(1)"
            burgerLines[1].style.display="block"
            burgerLines[2].style.transform="rotate(0deg) scale(1)"
        }

        burgerX ? displayX() : dipslayLines()
    }

    const showMobileNav= ()=>{ 
        nav.style.height= "90vh "
        navLinks.forEach(navLink=> {navLink.style.opacity="1"});
        switchBurger(true)
    }

    const hideMobileNav=()=>{
        nav.style.height= "0"
        navLinks.forEach(navLink=> {navLink.style.opacity="0"})
        switchBurger(false)
    }

    burger.addEventListener("click", ()=>{
        (nav.style.getPropertyValue("height") === "90vh") ?  hideMobileNav() : showMobileNav() 
    })


}

// filter projets

{
    const bitprojects= document.querySelector(".selector-bit");
    const projets = document.querySelector(".selector-projects");
    const bit= document.querySelectorAll(".bit");
    const personal= document.querySelectorAll(".personal");

    bitprojects.addEventListener('click', ()=>{
        bitprojects.style.setProperty("border", " 1px solid #ebb654")
        projets.style.setProperty("border","none")

        bit.forEach(bit => {bit.style.setProperty("display",'flex')})
        personal.forEach(personal=>{personal.style.setProperty("display",'none')})
    } )

    projets.addEventListener('click', ()=>{
        projets.style.setProperty("border"," 1px solid #ebb654")
        bitprojects.style.setProperty("border","none")


        personal.forEach(personal => {personal.style.setProperty("display",'flex')})
        bit.forEach(bit=>{bit.style.setProperty("display",'none')})
    })
}