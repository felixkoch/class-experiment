class Handler
{
    constructor()
    {
        this._what = 'test'
    }

    sayHello() {
        console.log('hello')
    }

    get what()
	{
		return this._what;
	}
}

module.exports = Handler;