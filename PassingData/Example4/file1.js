var a = 10;
function setA(x){
	a= x ;
    return a ;
}

function getA(){
	return a;
}


module.exports = {
	a,setA,getA
};