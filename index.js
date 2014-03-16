var dns = require('dns');

var checkInternetConnection = function(callback){
	dns.lookup('www.google.com', function(err){
		if(err){
			// needs to inspect error to distinguish between
			// 'unable to resolve' and 'cannot connect to a nameserver 
			// so the connection might be down'
			return callback(err, false);
		}
		return callback(false, true);
	});
};

exports.module = checkInternetConnection;