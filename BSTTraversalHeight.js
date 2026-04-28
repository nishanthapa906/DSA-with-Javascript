class Node {
    constructor(data) {
        this.data = data;
        this.left = null; 
        this.right = null;

    }
}

//BST CLASS
class BST {
    constructor() {
        this.root = null;
    }

//insert data 
add(data){
    const newNode = new Node(data);

    if(this.root === null){
        this.root = newNode;
        return ;
    }


    let current = this.root;

    while(true) {
        //go left 
        if(data<current.data) {
          if(current.left === null){
            current.left = newNode;
            return;
          }

          current = current.left;
        }

        //go right 

        else if (data > current.data) {
            if(current.right === null ) {
                current.right = newNode;
                return;
            }

            current = current.right;
        }

        //duplicate not allowed

        else {
            return;
        }
    }

}

//find smallest value
findmin(){
    let current = this.root;
    while(current.left !==null){
        current = current.left;
    }
    return current.data;
}

//find largest value

findmax() {
    let current = this.root;
    while(current.right !== null) {
        current = current.right;
    }
    return current.data;
}


//search value 
contains(data) {
    let current = this.root;

    while(current !==null){
        if(data === current.data) return true;
    

    if(data < current.data) {
        current = current.left;
    }
    else{
        current = current.right;
    }

    }

    return false;
}


//Inorder Traversal = sorted output

inOrder(node = this.root, result = []) {
    if(node !==null){
        this.inOrder(node.left, result)
        result.push(node.data)
        this.inOrder(node.right, result)
    }
    return result;

}

PreOrder(node = this.root, result = []){
    if(node !== null) {
         result.push(node.data)
        this.PreOrder(node.left, result)
        this.PreOrder(node.right, result)
    }
    return result;
}

PostOrder(node = this.root, result =[]){
    if(node !== null) {
        this.PostOrder(node.left, result)
        this.PostOrder(node.right, result)
        result.push(node.data);
    }
    return result;
}

}



const bst = new BST();
bst.add(9);
bst.add(10);
bst.add(15);
bst.add(45);
bst.add(66);
bst.add(88);
bst.add(8);
bst.add(18);



console.log("Min:", bst.findmin());
console.log("Max:", bst.findmax());
console.log("search 15", bst.contains(15));
console.log("search 15", bst.contains(88));
console.log("Inorder sorted:", bst.inOrder());
console.log("Preorder sorted:", bst.PreOrder());
console.log("Postorder sorted:", bst.PostOrder());

