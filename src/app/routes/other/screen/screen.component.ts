import { Component, OnInit } from '@angular/core';
const CAMERA_VIDEO_WIDTH = 300
const CAMERA_VIDEO_HEIGHT = 200
let cameraVideo:any = null
let screenVideo:any = null
let recorder:any
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})

export class ScreenComponent implements OnInit {
  shareButton: boolean = false
  startButton: boolean = true
  endButton: boolean = true
  
  parentWidth: number = 0
  parentHeight: number = 0
  canvasOne: any = null
  canvasContext: any = null
  ids?: number
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {      
      let parent: any = document.getElementById('screen')
      this.parentWidth = parent.clientWidth
      this.parentHeight = parent.clientHeight
      this.canvasOne = document.getElementById('parent')
      this.canvasOne.width = this.parentWidth
      this.canvasOne.height = this.parentHeight
      this.canvasContext = this.canvasOne.getContext('2d')
    }, 0);

    
  }

  startShare() {
    this.shareButton = true
    this.startButton = false
    this.initResource()
  }

  async initResource() {
    const screenStream = await navigator.mediaDevices.getDisplayMedia()
    const cameraStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    const audioStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true
    })
    cameraVideo = this.createStreamVideo(cameraStream)
    screenVideo = this.createStreamVideo(screenStream)

    this.animationFrameHandler()

    const recorderVideoStream = await this.canvasOne.captureStream(60)
    const stream = new MediaStream()
    audioStream.getAudioTracks().forEach(track => stream.addTrack(track))
    recorderVideoStream
      .getVideoTracks()
      .forEach((track: MediaStreamTrack) => stream.addTrack(track))
    // let video : any = document.getElementById('show')
    // video.srcObject = stream
    // video.play()
    console.log('这里执行了吗');
    let allChunks: BlobPart[] = []
    recorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp8,opus'
    })
    // recorder.blobs = []
    recorder.ondataavailable = (e:any) => {
      // video.src = URL.createObjectURL(e.data)
      // recorder.blobs.push(e.data)
      allChunks.push(e.data)
    }

    recorder.onstop = (e:any) => {
      let link = document.createElement('a')
      // const fullBlob = new Blob(allChunks)
      const fullBlob = new Blob(allChunks, { type: recorder.mimeType })
      const downloadUrl = window.URL.createObjectURL(fullBlob)
      link.href = downloadUrl
      link.download = 'media.mp4'
      link.click()
    }
    
  }

  createStreamVideo (stream: any) {
    const video = document.createElement('video')
    video.srcObject = stream
    video.autoplay = true

    return video
  }

  animationFrameHandler() {
    let doc: any = document.getElementById('parent')
    let canvas = doc.getContext('2d')
    
    // canvas.clearRect(0, 0, this.parentWidth, this.parentHeight);
    if (screenVideo) {
      canvas.drawImage(screenVideo, 0, 0, this.parentWidth, this.parentHeight)
    }

    if (cameraVideo) {
      canvas.drawImage(
        cameraVideo,
        0,
        0,
        CAMERA_VIDEO_WIDTH,
        CAMERA_VIDEO_HEIGHT
      )
    }
    this.ids = requestAnimationFrame(this.animationFrameHandler.bind(this))
  }
  startRecord () {
    this.startButton = true // 禁用按钮
    this.endButton = false
    recorder.start()
  }

  endRecord () {
    this.startButton = false // 禁用按钮
    this.endButton = true
    recorder.stop()
  }

  ngOnDestroy () {
    if (this.ids) {
      window.cancelAnimationFrame(this.ids)
    }
  }
}
