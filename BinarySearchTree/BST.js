class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert = (val) => {
        let newNode = new Node(val);
        if(this.root===null){
            this.root = newNode;
            return this;
        }
            let current = this.root
            while(true){

                if(val === current.val) return undefined;

                if(val < current.val){
                    if(current.left===null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left
                }else{
                    if(current.right===null){   
                        current.right = newNode;
                        return this;
                    }
                        current = current.right
                }
            }
    }

    search = (val) => {
        if(this.root===null) return false;
        else{
            let current = this.root
            let found = false
            while(current && !found){
                if(val < current.val){
                    current = current.left;
                }else if(val > current.val){
                    current = current.right
                }else{
                    found = true
                }
            }
            if(!found) return undefined
            return current;
        }
    }

    breadthFirstSearch = () => {
        let data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data;
    }

    depthFSPreOrder = () => {
        let data = [];
        function traverse(node){
            data.push(node.val)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    depthFSPostOrder = () => {
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val)
        }
        traverse(this.root);
        return data;
    }

    depthFSInOrder = () => {
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val)
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.breadthFirstSearch())
console.log(tree.depthFSPreOrder())
console.log(tree.depthFSPostOrder())
console.log(tree.depthFSInOrder())