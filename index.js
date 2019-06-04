//import Handler from './Handler.js'
const Handler = require('./Handler');
const handler = new Handler();

console.log(Handler);

class Device
{
	constructor({ Handler } = {})
	{
        console.log(Handler)
        console.log(Handler.name);
    }
}

device = new Device({Handler});