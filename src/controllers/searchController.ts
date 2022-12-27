import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/pet'

export const search = (req: Request, res: Response) => {
  let name:string = req.query.q as string

  if(!name) {
    res.redirect('/')
    return
  }

  // O NOME DA VARIÁVEL TEM QUE SER O MESMO NO MUSTACHE, SENÃO NÃO FUNCIONA
  let pets = Pet.getFromName(name)
  
  res.render('pages/page', {
    menu: createMenuObject(''),
    pets,
    name
  })
}