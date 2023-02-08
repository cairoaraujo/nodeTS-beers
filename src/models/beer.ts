import { url } from "inspector";

type BeerType = 'pilsen' | 'ipa' | 'stout' | 'witbier';

type Beer = {
    type: BeerType,
    name: string,
    releasedDate: string,
    image: string,
    color: string
}

const data: Beer[] = [
    {
        type: 'pilsen',
        name: 'budweiser',
        releasedDate: '20/11/1900',
        image: 'budweiser.png',
        color: 'amarelo claro'

    },
    {
        type: 'stout',
        name: 'guinness',
        releasedDate: '20/11/1901',
        image: 'guinness.webp',
        color: 'vermelho escuro'

    },
    {
        type: 'witbier',
        name: 'Hoegaarden',
        releasedDate: '20/11/1901',
        image: 'hoegaarden.jpg',
        color: 'amarelo claro'

    },
    {
        type: 'pilsen',
        name: 'Heineken',
        releasedDate: '20/11/1901',
        image: 'heineken.jpg',
        color: 'amarelo escuro'

    },
    {
        type: 'ipa',
        name: 'Lagunitas',
        releasedDate: '20/11/1901',
        image: 'lagunitas.jpg',
        color: 'amarelo escuro'

    },

]

export const Beer = {
    getAll: (): Beer[] => {
        return data;
    },

    getFromType: (type: BeerType): Beer[] => {
        return data.filter(item =>{
            if (item.type === type){
                return true;
            }
            else{
                return false;
            }
        })
    },

    getFromName: (name: string): Beer[] =>{
        return data.filter(item=>{
            if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                return true;
            }
            else{
                return false;
            }
        })
    }

};