interface Robot {
    name: string;
    madeIn: string;
    battles?: Battle[];
}

interface Battle {
    city: string;
    win: boolean;
}

const robot = { name: 'Mazinger Y', madeIn: 'Japan', battles: [] };
const robot2 = { name: 'Ragnarok', madeIn: 'China', battles: [{ city: 'Madrid', win: true }, { city: 'New York', win: false }] };