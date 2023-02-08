type Beer = {
    type: 'stout' | 'pilsen',
    name: string,
    releasedDate: string,
    image: string
}

const data: Beer[] = [
    {
        type: 'pilsen',
        name: 'budweiser',
        releasedDate: '20/11/1900',
        image: 'budweiser.jpg'

    },
    {
        type: 'stout',
        name: 'guinness',
        releasedDate: '20/11/1901',
        image: 'guinness.jpg'

    },
]

export const Beer = {
    getAll:():Beer[] =>{
        return data;
    }

};