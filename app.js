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
