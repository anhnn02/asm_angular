import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface IBlog {
    id?: number | string;
    name: string;
    img: string;
    imgSub: string;
    descShort: string;
    desc: string;
    cateBlogId?: number;
    cateBlog?:{
        id?: number | string;
        name: string;
    };
}
