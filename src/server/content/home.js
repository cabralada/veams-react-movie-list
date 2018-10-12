const config = require('../configs/config');
const fs = require('fs');
const indexPage = fs.readFileSync(`${config.veams.paths.app}/static/index.html`, 'utf-8');

export default (req, res) => {
	res.send(indexPage);
};
