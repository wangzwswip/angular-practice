import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() url! :string
  topWidth :number = 0
  topHeight: number = 0

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      let rootEle = document.getElementById('image-root')
      let imgEleFix = document.getElementById('image-bottom-fix')
      this.topWidth = imgEleFix!.offsetWidth
      this.topHeight = imgEleFix!.offsetHeight
      rootEle!.onselectstart = () => {return false}
      this.initEvent()
    }, 0)
  }
  ngAfterViewChecked() {

  }

  initEvent() {
    let target = document.getElementById('slider-line-trigger')
    let imgEle = document.getElementById('image-top-move')
    let parent = target!.parentNode
    let parentEle = target!.parentElement
    let parentP = parent!.parentElement
    let minX = 5
    let maxX = parentP!.offsetWidth - 5
    console.log('最大最小值', maxX)
    // @ts-ignore
    let timer
    target!.addEventListener('mousedown', function (e) {
      let disX = e.pageX - parentEle!.offsetLeft
      document.onmousemove = function (e) {
        // @ts-ignore
        if (timer) {
          return
        } else {
          timer = setTimeout(function () {
            console.log('移动触发')
            if (e.pageX - disX > minX && e.pageX - disX < maxX) {
              parentEle!.style.left = e.pageX - disX + 'px'
            } else if (e.pageX - disX <= minX) {
              parentEle!.style.left = minX + 'px'
            } else if (e.pageX - disX >= maxX) {
              parentEle!.style.left = maxX + 'px'
            }
            imgEle!.style.width = parentEle!.style.left
            timer = null
          },50)
        }
        document.onmouseup = function (e) {
          document.onmousemove = document.onmouseup = null
        }
      }
    })
  }

}
