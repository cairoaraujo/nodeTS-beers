import {Request, Response} from 'express';

export const home = (req: Request, res: Response) =>{
    res.render('pages/page',{
        banner:{
            title: "Todas as cervejass",
            background: "allBeers.jpg",
        }
    })
}

export const ipa = (req: Request, res: Response) =>{

}

export const apa = (req: Request, res: Response) =>{

}

export const pilsen = (req: Request, res: Response) =>{

}

export const witbier = (req: Request, res: Response) =>{

}