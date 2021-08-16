class Form
{
  constructor()
  {
    this.htp= createButton("HOW TO PLAY? ")
  this.title =createElement('h2')

  }

  display()
  {
   

   this. htp.position(width/2+50,height/2);
         
   this. htp.mousePressed(()=>{

       
       this.title.html("INSTRUCTION,Touch the temple to go next level ")
        this.title.position(100,50);


        
    })
      

  }

  hide()
  {
    this.htp.hide();
    this.title.hide();
  }
}

