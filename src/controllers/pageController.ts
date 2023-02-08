import {Request, Response} from 'express';
import {Beer} from '../models/beer';

export const home = (req: Request, res: Response) =>{

    let list = Beer.getAll();

    res.render('pages/page',{
        banner:{
            title: "Todas as cervejas",
            background: "allBeers.jpg",
        },
        list
    })
}

export const ipa = (req: Request, res: Response) =>{
    let list = Beer.getFromType('ipa');
    res.render('pages/page',{
        banner:{
            title: "IPA",
            background: "ipaBanner.png",
        },
        list
    })

}

export const witbier = (req: Request, res: Response) =>{

    let list = Beer.getFromType('witbier');
    res.render('pages/page',{
        banner:{
            title: "Witbier",
            background: "witbierBanner.jpg",
        },
        list
    })

}

export const pilsen = (req: Request, res: Response) =>{

    let list = Beer.getFromType('pilsen');
    res.render('pages/page',{
        banner:{
            title: "Pilsen",
            background: "pilsenBanner.png",
        },
        list
    })

}

export const stout = (req: Request, res: Response) =>{
    let list = Beer.getFromType('stout');
    res.render('pages/page',{
        banner:{
            title: "Stout",
            background: "stoutBanner.jpg",
        },
        list
    })
}