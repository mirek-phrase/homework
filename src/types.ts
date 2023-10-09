export type Entry = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  author: string;
  tags: Tag[];
}

export enum Tag {
  Javascript = "javascript",
  Typescript = "typescript",
  Nodejs = "nodejs",
  Express = "express",
  Vuejs = "vuejs",
  Php = "php",
  Java = "java",
  Python = "python",
  Ruby = "ruby",
  Go = "go",
  Rust = "rust",
}