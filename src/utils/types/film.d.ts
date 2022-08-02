/* eslint-disable no-unused-vars */
declare namespace Film {
  declare type Item = {
    title: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
  };

  declare type List = {
    docs: Item[];
    total: number;
    limit: number;
    page: string;
    pages: number;
  };
}
