/**
 * @file 图片加载服务
 * @desc app/services/image-loader
 * @author 
 */

import { Injectable } from '@angular/core';

@Injectable()
export class ImageLoaderService {

  public load(src: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const text = `Image with src ${src} loaded `;
      img.onload = () => {
        resolve(`${text} successfully.`);
      };
      img.onerror = () => {
        reject(`${text} failed.`);
      };
      img.src = src;
    });
  }
}
