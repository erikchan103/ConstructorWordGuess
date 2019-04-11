var letter = require("./Letter");

var word = function (x) {
    this.new = [];
    this.objectArray=[];
    for (var i = 0; i < x.length; i++) {
        this.new.push(x.charAt(i));
        this.objectArray.push(new letter(x.charAt(i)));
    };
    this.puzzle = function () {
        hidden=""
        for (var j=0; j<this.new.length;j++){
            hidden=hidden+this.objectArray[j].guessed();
        }
        return hidden;
    };
    this.attempt=function(z){
        for (var w=0;w<this.objectArray.length;w++){
            this.objectArray[w].test(z);
        }
    }
}

module.exports = word;