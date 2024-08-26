const moonPath =
    'M12 27.5C12 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 12 12.3122 12 27.5Z';
const sunPath =
    'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z';

const darkMode = document.querySelector('#dark-mode');

let toggle = false;

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: 'easeOutExpo',
    });
    timeline
        .add({
            targets: '.sun',
            d: [
                {
                    value: toggle ? sunPath : moonPath,
                },
            ],
        })
        .add(
            {
                targets: '#dark-mode',
                rotate: toggle ? 0 : 320,
            },
            '-= 750'
        )
        .add(
            {
                targets: 'section',
                backgroundColor: toggle ? 'rgb(214, 214, 214)' : '#07061a',
            },
            '-= 700'
        )
        .add(
            {
                targets: '#header',
                color: toggle ? '#000000' : '#f3f5d1',
                update: function () {
                    document.querySelector('#header').textContent = toggle
                        ? 'Dark Mode'
                        : 'Light Mode';
                },
            },
            '-= 655'
        )
        .add(
            {
                targets: 'path',
                fill: toggle ? '#ffec1d' : '#f3f5d1',
            },
            '-= 700'
        );

    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
});
