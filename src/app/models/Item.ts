export class Item {
  title: string;
  priceFormatted: string;
  keywords: string;
  id: string;
  imgUrl: string;
  constructor( { title, price_formatted, keywords, id, img_url } ) {
    this.title = title;
    this.priceFormatted = price_formatted;
    this.keywords = keywords;
    this.id = id;
    this.imgUrl = img_url;
  }
}
