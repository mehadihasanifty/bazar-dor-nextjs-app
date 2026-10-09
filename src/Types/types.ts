export interface IWholeProductType {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: [];
}

export interface IMarketsType {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface INavlinksType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface IMarqueeProductType {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}
export interface IAllProductType {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

export interface IIncreaseProductType {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

export interface IDecreaseProductType {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

export interface IProductCardProps {
  item: {
    id: string;
    nameBn: string;
    image: string;
    today: number;
    change: {
      dir: "up" | "down" | "flat";
      pct: number;
    };
  };
}