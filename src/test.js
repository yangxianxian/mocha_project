const {should,expect,assert} = require('chai')
const {add} = require ('./math')

describe('math',() => {
    describe('#add',() => {
        it('should return 5',() => {
            expect(add(2,3),5)
        })
    })
})