export default interface Menu {
  title: string;

  icon: string;

  path: string;

  children?: Array<Menu>
}