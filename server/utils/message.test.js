const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',() => {
    it('should correct message object',() => {
        var from ='Aman';
        var text ='yoo, wasuup!!';
        var message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});
