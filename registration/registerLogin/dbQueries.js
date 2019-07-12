var db = require('./config');
var temp = {
	register: function(callback){
		 {
        return db.query('SELECT * from t_matiere', callback);
    }
	}

}