var letter = function(letter){
    this.letter=letter;
    this.guess=false;
    this.guessed=function(){
        if (this.guess){
            return this.letter;
        }else{
            return "*"
        }
    };
    this.test=function(attempt){
        if(attempt===this.letter){
            this.guess=true;
        }
    }
}

module.exports = letter;