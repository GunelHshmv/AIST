let container=document.getElementById('container')
let mood_btn=document.getElementById('mood_btn')

const darkMood=()=>{
    container.classList.add('darkMood')
    mood_btn.textContent='Light'
    localStorage.setItem('mood','dark')
}
const lightMood=()=>{
    container.classList.remove('darkMood')
        mood_btn.textContent='Dark'
        localStorage.setItem('mood', 'light');
}
const toggleMood=()=>{
    if(mood_btn.textContent==='Dark'){
        darkMood()
    }else{
        lightMood()
    }
}
mood_btn.addEventListener('click',()=>{
    toggleMood()
})

window.onload = () => {
    const savedMode = localStorage.getItem('mood');
    if (savedMode === 'dark') {
        darkMood();
    } else {
        lightMood();
    }
};