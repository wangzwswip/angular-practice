import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subject, filter, debounceTime,distinctUntilChanged,tap, Subscription } from 'rxjs';

@Component({
  selector: 'app-recorde',
  templateUrl: './recorde.component.html',
  styleUrls: ['./recorde.component.scss']
})
export class RecordeComponent implements OnInit {
  initButton: boolean = false
  startButton: boolean = true
  pauseButton: boolean = true
  resumeButton: boolean = true
  stopButton: boolean = true
  downloadButton: boolean = true
  submitButton: boolean = true
  isRecording: boolean = false
  isPlay: boolean = false
  radio: any
  radioVocie: number = 0.5
  streamBackup: any
  recorder: any
  fullBlob: Blob = new Blob()
  testUnsub?: Subscription
  private _test: Subject<number> = new Subject<number>();
  test$ = this._test.asObservable()

  constructor(private message: NzMessageService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.radio = document.getElementById('recorde-radio')
    },0)
  }

  /**
   * 左侧按钮操作
   * @param type
   */
  handleSelfCommand(type: number) {
    switch (type) {
      case 0:
        // 初始化
        this.initButton = true
        this.initRecorde()
        break
      case 1:
        // 开始录制
        this.startRecorde()
        break
      case 2:
        // 暂停录制
        this.pauseRecorde()
        break
      case 3:
        // 恢复录制
        this.resumeRecorde()
        break
      case 4:
        // 结束录制
        this.stopRecorde()
        break
      case 5:
        // 下载文件
        this.downloadFile()
        break
      case 6:
        // 上传到服务器
        this.submitFile()
        break
    }

  }
  // 初始化录音，获取用户权限
  initRecorde(){
    let that = this
    const streams = new MediaStream()
    navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true
    }).then((stream :MediaStream) => {
      that.streamBackup = stream
      stream.getAudioTracks().forEach(track => streams.addTrack(track))
      let allChunks: BlobPart[] = []
      that.recorder = new MediaRecorder(streams, {
        mimeType: 'audio/webm;codecs=opus'
      })
      that.recorder.ondataavailable = (e: { data: BlobPart; }) => {
        allChunks.push(e.data)
      }
      that.recorder.onstop = () => {
        that.fullBlob = new Blob(allChunks, { type: that.recorder.mimeType })
        that.radio.src = window.URL.createObjectURL(that.fullBlob)
          // TODO 按钮逻辑
        // that.downloadButton = true
        // that.submitButton = true
        // 关闭流
        stream.getTracks().forEach(track => track.stop())
      }
      // 按钮逻辑
      that.startButton = false

    })
  }
  // 开始录制
  startRecorde(){
    this.startButton = true
    this.recorder.start()
    this.pauseButton = false
    this.stopButton = false
    this.isRecording = true
  }
  // 暂停录制
  pauseRecorde(){
    this.pauseButton = true
    this.recorder.pause()
    this.resumeButton = false
    this.isRecording = false
  }

  // 恢复录制
  resumeRecorde(){
    this.resumeButton = true
    this.recorder.resume()
    this.pauseButton = false
    this.isRecording = true
  }

  // 结束录制
  stopRecorde(){
    // TODO 奇怪的bug, 下载按钮在结束回调里改变并不会立即生效
    this.stopButton = true
    this.recorder.stop()
    this.submitButton = false
    this.downloadButton = false
    this.isRecording = false
    this.initButton = false
    this.startButton = true
    this.resumeButton = true
    this.pauseButton = true
    // 处理声音
    this.testUnsub = this.test$.pipe(
      // 过滤
      filter(value => value > 0.5),
      // 去抖动
      debounceTime(400),
      distinctUntilChanged(),
      tap(value => {
        console.log('observable收到的值', value)
      })
    ).subscribe((value) => {
      console.log('最后订阅的值', value)
    })
  }

  downloadFile(){
    let link = document.createElement('a')
    const downloadUrl = window.URL.createObjectURL(this.fullBlob)
    link.href = downloadUrl
    link.download = 'media.webm'
    link.click()
    window.URL.revokeObjectURL(downloadUrl)
  }

  submitFile(){
    let data = new FormData()
    let file = new window.File([this.fullBlob], 'name.webm', {
      type: 'audio/webm'
    })
    data.append('file', file)
    // 执行上传ajax即可
    this.message.create('success', '上传录音文件成功!');
  }

  // 滑块变化回调
  handleSlideChange(event: any){
    // console.log('变化了', event)
    this._test.next(event);
    // console.log('这里执行了吗', event)
  }

  handlePlay(status: boolean) {
    if (status) {
      this.radio.play()
      this.isPlay = true
    } else {
      this.radio.pause()
      this.isPlay = false
    }
  }

  ngOnDestroy(){
    // 取消订阅
    if (this.testUnsub) {
      this.testUnsub.unsubscribe()
    }

  }
}
