import { IEntity } from "./getEntity";


export interface ICollection {
    _emebedded: {
        toDoTaskDTOList: IEntity[]  
    }
    _links: {self: {href: string}};
  }
