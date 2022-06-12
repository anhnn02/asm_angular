import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface  IProduct{
    id?: number |string; 
    name: string; 
    img: string; 
    link: string; 
    tech: string; 
    techSheet: string;
    descShort: string;
    desc: string;
}
export interface ColumnItem {
    name: string;
    sortOrder: NzTableSortOrder | null;
    sortFn: NzTableSortFn<IProduct> | null;
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn<IProduct> | null;
    filterMultiple: boolean;
    sortDirections: NzTableSortOrder[];
}