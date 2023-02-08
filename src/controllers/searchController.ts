import {Request, Response} from 'express';

import {Beer} from '../models/beer';

export const search = (req: Request, res: Response) =>{

    let query: string = req.query.q as string;
    console.log(query)
    let list = Beer.getFromName(query)
    res.render('pages/page',{
        banner:{
            title: 'pesquisando por: "' + query + '"' ,
            background: "allBeers.jpg",
        },
        list,
        query
    })
}