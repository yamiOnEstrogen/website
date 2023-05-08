module.exports = {
    name: 'donate',
    description: 'Sends the donation links',
    canBeExecuted: false,
    execute(message, args) {
        return `<h1>💰 Donate 💰</h1>
        <p>Here is a list of all the donation links:</p>
        <ul>
            <li><a href='https://ko-fi.com/T6T8JXY0Z' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a></li>
        `;
    }
}