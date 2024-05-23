const list=document.getElementById('list')
const fetch_btn=document.getElementById('fetch_btn')

const fetch_Users = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        data.forEach(item => {
            const list_item=document.createElement('li')
            list_item.innerHTML=`<b>User Name</b>-${item.name} <br/> <b>User Email</b> ${item.email}`
            list.append(list_item)
        });
       list.style.display='flex'

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
fetch_btn.addEventListener('click',()=>{
    fetch_Users()
})