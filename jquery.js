
$('.dropdown > h4').click(function(){
    $(this).next().toggle();
}
)

$('.hamburger').click(function(){
    $('.mobile-section').toggle()
})

$('.close').click(function(){
    $('.mobile-section').toggle()
})

$('.suggested-skill > li').on('click',function(){
    console.log(this.textContent)
})
