export interface MenuItem {
  name: string;
  image: string;
  price: `$${number}`;
}
export interface MenuContainer {
  name: string;
  image: string;
  menu: MenuItem[];
}
