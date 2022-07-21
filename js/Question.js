class Question {

  constructor() {
    this.title = createElement('h1')
    this.end = createElement('h1')
    this.que = createElement('h3')
    this.opt1 = createElement('h4')
    this.opt2 = createElement('h4')
    this.opt3 = createElement('h4')
    this.opt4 = createElement('h4')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.que.html("Question:- What starts and ends with the letter 'E', but has only one letter?");
    this.que.position(50, 70);
    this.opt1.html("1: Everyone");
    this.opt1.position(50, 85);
    this.opt2.html("2: Enevelope");
    this.opt2.position(50, 100);
    this.opt3.html("3: Estimate");
    this.opt3.position(50, 115);
    this.opt4.html("4: Example");
    this.opt4.position(50, 130);



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.input2.position(350, 230);

    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.end.html("Thank You, your answer has been submitted");
    this.end.position(50, 310);
    })


  }
}
