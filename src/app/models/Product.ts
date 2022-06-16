import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface  IProject{
    id?: number | string; 
    name: string; 
    img: string; 
    link: string; 
    tech: string; 
    newTech2?: string | any; 
    techSheet: string;
    descShort: string;
    desc: string;
    cateProjectId?: number;
    cateProject?:{
        id: string | number,
        name: string
    }
}
export interface ColumnItem {
    name: string;
    sortOrder: NzTableSortOrder | null;
    sortFn: NzTableSortFn<IProject> | null;
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn<IProject> | null;
    filterMultiple: boolean;
    sortDirections: NzTableSortOrder[];
}