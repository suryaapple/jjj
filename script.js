// const boxContent = document.getElementById('box-content');
// console.log(boxContent.children[1].children[1].scrollHeight)

// boxContent.addEventListener('click', function(){
//     console.log('clicked')
// })

document.querySelectorAll(".text-content").forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelectorAll(".text-content").forEach(function(element){
            element.classList.remove('active');
        })
        element.classList.add("active")
    });
});


// document.getElementById("question2").addEventListener('click',function(){
//     document.getElementsById("second").scrollIntoView({
//         behavior: 'smooth',
//     })
// })


const addSkill = document.getElementById('add-skill');

addSkill.addEventListener('click', function(){
    console.log("skill added")
    const skill = `<div class="skill">
    <h5>React</h5>
    <button>X</button>
</div>
`
})