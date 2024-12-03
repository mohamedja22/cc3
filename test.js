const { sayHello } = require('./app');

function testSayHello() {
    const result = sayHello();
    if (result === 'Hello, World!') {
        console.log('Test Passed: sayHello() = Hello, World!');
    } else {
        console.error('Test Failed: sayHello() =', result);
    }
}

testSayHello();
