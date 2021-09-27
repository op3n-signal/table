const planClassNames = ['un', 'deux', 'trois'];
let currentIndex = 1;
let currentClass;

//function when checks which button was pressed & chooses what class names to show/remove
export const isSwitched = (event) => {
    let btn;
    if(event.target.closest('button')) {
        btn = event.target.closest('button');

        if(btn.innerText === 'Previous Plan') {
            if(currentIndex !== 0) {
                currentIndex--;
                currentClass = planClassNames[currentIndex];
            }
                
        } else if(btn.innerText === 'Next Plan') {
            if(currentIndex !== 2) {
                currentIndex++;
                currentClass = planClassNames[currentIndex];
            }
        }

        planClassNames.forEach(name => {
            if(name === currentClass) {
                let el = document.querySelectorAll('.' + name);
                el.forEach(element => element.setAttribute('style', 'display: flex !important'));
            } else {
                let el = document.querySelectorAll('.' + name);
                el.forEach(element => element.setAttribute('style', 'display: none'));
            }
        });
    }

    window.addEventListener('resize', reset);
}

//listener function for resizing, this resets all plans when resized to a larger width
const reset = (event) => {
    let width = event.target.innerWidth;
    if(width > 821) {
        planClassNames.forEach(name => {
            let el = document.querySelectorAll('.' + name);
            el.forEach(element => element.setAttribute('style', 'display: flex'));
        });
    } else {
        currentIndex = 1;
    }
}

