module.exports.eg = {
	
	name : 'abdul',
	temp : function(a){
		return a;
	},
    name  : function(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
      name = this.firstName + ' ' + this.lastName
      return name;
    }
};