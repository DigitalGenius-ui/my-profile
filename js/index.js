// circle animation 

// this removes 
$('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});

// this animate the circle bar

$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');

// skill progress bar 

$('#html').LineProgressbar({
  percentage: 100,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '5px',
  width: '100%'
});
$('#css').LineProgressbar({
  percentage: 90,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '5px',
  width: '100%'
});
$('#javascript').LineProgressbar({
  percentage: 80,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '5px',
  width: '100%'
});
$('#bootstrap').LineProgressbar({
  percentage: 100,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '5px',
  width: '100%'
});

// auto writer plugin

var typed = new Typed('.element', {
  // Waits 1000ms after typing "First"
  strings: ['Interactive Web Pages', 'Responsive Web Pages'],
  typeSpeed:100,
  backSpeed:50,
  loop:true
});

// slick slider 

$('.review').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow:'.right',
  prevArrow:'.left',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// projects filter part 

const items = [
  {
    id:1,
    image:'https://digitalgenius-ui.github.io/my-portfolio/image/bloger.jpg',
    category:'landing',
    text:'Bloger Landing Page ',
    html_link:'https://digitalgenius-ui.github.io/bloger/'
  },
  {
    id:2,
    image:'https://digitalgenius-ui.github.io/my-portfolio/image/landing1.jpg',
    category:'landing',
    text:'Health Landing Page',
    html_link:'https://digitalgenius-ui.github.io/health-responsive/'
  },
  {
    id:3,
    image:'https://digitalgenius-ui.github.io/my-portfolio/image/manage.jpg',
    category:'landing',
    text:'Manage Landing Page',
    html_link:'https://digitalgenius-ui.github.io/manage-landing-page/'
  },
  {
    id:4,
    image:'./image/injury.jpg',
    category:'react',
    text:'law Landing Page',
    html_link:'https://digitalgenius-ui.github.io/law-client/',
  },
  {
    id:5,
    image:'./image/crypto.jpg',
    category:'react',
    text:'Crypto Tracker',
    html_link:'https://milad-crypto-tracker.netlify.app/',
  },
  {
    id:6,
    image:'./image/tracker.jpg',
    category:'react',
    text:'Expeses Tracker',
    html_link:'https://milad-expenses-traker.netlify.app/',
  },
]

const btns = document.querySelectorAll(".btn");
const project = document.querySelector(".links-flex");

window.addEventListener("DOMContentLoaded", ()=>{
  toShow(items)
})

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const click = e.currentTarget.value;
    let filter = items.filter((item)=>{
      if(item.category === click){
        return item;
      }
    })
    if(click === "all"){
      return toShow(items)
    }else {
      return toShow(filter)
    }
  })
})

function toShow(website){
  const myProjects = website.map((item)=>{
    return(
      `<div class="link">
          <img src="${item.image}" alt="Project template">
          <a href="${item.html_link}">Open</a>
          <p>${item.text}</p>
      </div>`
    );
  })
  project.innerHTML = myProjects.join(' ');
}

// toggale button 

let toggleBtn = document.querySelector('.bars');
let nav = document.querySelector(".nav-bar");
let overFlow = document.querySelector(".dark");
let lists = document.querySelectorAll(".list li")
let navigation = document.querySelector(".navigation");
let content = document.querySelector(".main-content")

let turnOff = false;

toggleBtn.addEventListener("click",()=>{
  if(!turnOff){
    toggleBtn.classList.add("move");
    nav.classList.add("open");
    overFlow.classList.add("open");
    navigation.classList.add("open");
    content.classList.add("open");
    secondBtn.classList.remove("open")
    lists.forEach((list)=>{
      list.classList.remove("open")
      secondBtn.classList.remove("open")
  profile.classList.remove("open")
    })
    turnOff = true;
  }else{
    toggleBtn.classList.remove("move");
    navigation.classList.remove("move");
    nav.classList.remove("open")
    overFlow.classList.remove("open")
    content.classList.remove("open")
    lists.forEach((list)=>{
      list.classList.add("open")
    })
    turnOff = false;
  }
});

overFlow.addEventListener("click",()=>{
  nav.classList.remove("open");
  navigation.classList.remove("open");
  overFlow.classList.remove("open");
  toggleBtn.classList.remove("move");
  secondBtn.classList.remove("open")
  profile.classList.remove("open")
});

lists.forEach((list)=>{
  list.addEventListener("click",()=>{
    toggleBtn.classList.remove("move");
    navigation.classList.remove("move");
    nav.classList.remove("open")
    overFlow.classList.remove("open")
    lists.forEach((list)=>{
      list.classList.add("open")
    })
  })
})

// second toggle 

const profile = document.querySelector(".detiles")
const secondBtn = document.querySelector(".bullets")

secondBtn.addEventListener("click", ()=>{
  profile.classList.toggle("open")
  secondBtn.classList.toggle("open")
  overFlow.classList.toggle("open")
  navigation.classList.remove("move");
  nav.classList.remove("open")
})
