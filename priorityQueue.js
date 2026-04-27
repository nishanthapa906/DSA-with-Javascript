function PriorityQueue() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    }
    this.enqueue = function(element) {
        if (this.isEmpty) {
            collection.push(element);
        } else {
            var added = false;
            for ( var i=0; i<collection.length; i++) {
                if(element[1] < collection[i][1]) //comparing new and old
                  {
                   collection.splice(i,0,element);
                   added = true;
                   break;
                  }
            }
        }
        if(!added){
            collection.push(element);
        }
    }    
}
var q = new PriorityQueue();
q.enqueue(["a",1]);
q.enqueue(["k",9]);
q.enqueue(["b",4]);
q.enqueue(["d",1]);
q.enqueue(["m",2]);
q.enqueue(["n",3]);
q.print();
