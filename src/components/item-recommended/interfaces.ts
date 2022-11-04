export interface IItemRecommended {
  item: {
    id: number;
    title: string;
    ubication?: string;
    image: string;
    rating?: number;
  };
  index: number;
}
