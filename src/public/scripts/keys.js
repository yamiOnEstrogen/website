let commands = [];
let key = 0;

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'l') {
        event.preventDefault();
        const output = document.querySelectorAll('#output');

        output.forEach(e => {
            e.innerHTML = '';
        });

        console.log(`%c Cleared the output`, `color: #ff0000;`)
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'v') {
        event.preventDefault();

        const input = document.querySelector('#input');
        
        input.focus();

    }
});

document.addEventListener('keydown', function (event) {
    // Check if the key is enter
    if (event.key === 'Enter') {
        const input = document.querySelector('#input');

        if (input.value === '') {
            return;
        }

        commands.push(input.value);

        // Change the window title
        document.title = `${input.value} - Hylia Terminal`;

        setTimeout(() => {
            document.title = `Hylia Terminal`;
        }, 5000);
    }

    // Check if the key is up
    if (event.ctrlKey && event.key === 'ArrowUp') {
        const input = document.querySelector('#input');

        // Cycle through the commands
        if (key < commands.length) {
            key++;
        }

        input.value = commands[commands.length - key];

    }

    // Check if the key is down
    if (event.ctrlKey && event.key === 'ArrowDown') {
        const input = document.querySelector('#input');

        // Cycle through the commands
        if (key > 0) {
            key--;
        }

        if (key === 0) {
            input.value = '';
        } else {
            input.value = commands[commands.length - key];
        }

    }
});