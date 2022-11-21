

(function(){

      window.onload = (e)=>{

        console.log('Viewport height: '+window.innerHeight);
        console.log('Viewport width: '+window.innerWidth);

        let animation = document.querySelectorAll('.animation');
        for(let i=0; i < animation.length; i++){
            animation[i].classList.add('recipe--animation-'+i);
        }
        
      };
})();