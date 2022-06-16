import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface IConcept {
    id?: number | string;
    name: string;
    img: string;
    link: string;
    imgSub: string;
    tech: string ;
    nameTech: string;
    descShort: string;
    desc: string;
    cateConceptId?: number;
}
