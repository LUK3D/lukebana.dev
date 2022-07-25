import { ReactNode } from "react";

/**
 * ## Button Interface
 */
export interface ButtonInt{
    text?: string;
    child?:ReactNode,
    onClick:Function,
    type?:ButtonTypes,
    link?:string
}

/**
 * ## Button Types
 * Define the type of the butons.
 * if link, it will return an anchor tag.
 */
export enum ButtonTypes{
    ghost,
}