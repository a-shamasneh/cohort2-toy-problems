/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
 
  this.head=null;
  this.tail=null;
};

//write methods here!
LinkedList.prototype.addToTail=function(value){
var temp = creat(value)
   if (this.head === null) {
    this.head = temp;
    this.tail = temp;

   }
   else{
    this.tail.next = temp;
    this.tail = temp; 
   }

}
////
LinkedList.prototype.removeHead=function(value){
	var temp = this.head.value;
  this.head=this.head.next;
  return temp;
}
///
LinkedList.prototype.contains=function(node){
	var exist=this.head;
	while(exist.next!=null){
		if(exist.value==node){
			return true
		}else{
			exist=exist.next
			if(exist.value==node){
			return true}
		}
	}
	return false
	
}

var creat=function(value){
	var node={};
	node.value=value;
	node.next=null;
	return node;

}