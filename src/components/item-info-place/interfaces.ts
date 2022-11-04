export interface IItemInfoPlace {
  item: {
    id: number;
    title: string;
    ubication?: string;
    image: string;
    rating?: number;
  };
  index: number;
  type: 'favorite' | 'visited'
}
