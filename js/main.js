var i=0,cnt=0;
       function f(){
          document.getElementById('one').classList.toggle('do');
     
          if(cnt == 1){
               document.getElementById('one').style.animation = "bulge 0.5s ease 0.5s infinite alternate";
               cnt=0;
          }
          else if(cnt == 0){
               document.getElementById('one').style.animation = "none";
               cnt=1;
          }
       }
