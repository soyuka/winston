var winston = require('./lib/winston');

var logger = new (winston.Logger)({
	transports: [
	  new (winston.transports.Console)({ level: 'debug', colorize: true, levels: winston.config.syslog.levels }),
	  new (winston.transports.File)({ 
	  								   filename: global.config.root + '/exceptions.log'
	  	                             , handleExceptions: true 
	  	                             , levels: winston.config.syslog.levels
	  	                             , level: level
	  	                           })
	]
});

logger.info('test message %s, %s', 'first', 'second' , {number: 123}, function(transport, level, msg, meta){
	console.log(transport, level, msg, meta);
});

logger.info(winston.config.syslog.levels);

logger.log('test', 'message', {some: "var"}, [0,1,2,15], function () {
	console.log('Logger done');
});