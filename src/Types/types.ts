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
    dir: "up" | "down";
    pct: number;
  };
}

export interface IIncreaseProductType {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

export interface IDecreaseProductType {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  change: {
    dir: "up" | "down";
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
      dir: "up" | "down";
      pct: number;
    };
  };
}