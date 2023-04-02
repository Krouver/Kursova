let header = document.querySelector ("header");
  window.addEventListener("scroll", () =>{
    console.log(window.scrollY);
    if(window.scrollY>100){
      header.classList.add('navbar-background');
    }else{
       header.classList.remove('navbar-background');
    }
  });
