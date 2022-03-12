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

  // 右侧变量
  initButtonRight: boolean = false
  startButtonRight: boolean = true
  pauseButtonRight: boolean = true
  resumeButtonRight: boolean = true
  stopButtonRight: boolean = true
  downloadButtonRight: boolean = true
  submitButtonRight: boolean = true
  isPlayRight: boolean = false
  newRec? :any
  recorderRight? :any
  fullBlobRight: Blob = new Blob()
  isRecordingRight: boolean = false
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

  // 右侧方法
  handleRightCommand(type: number) {
    switch (type) {
      case 0:
        // 初始化
        this.initButtonRight = true
        this.initRecordeRight()
        break
      case 1:
        // 开始录制
        this.startRecordeRight()
        break
      case 2:
        // 暂停录制
        this.pauseRecordeRight()
        break
      case 3:
        // 恢复录制
        this.resumeRecordeRight()
        break
      case 4:
        // 结束录制
        this.stopRecordeRight()
        break
      case 5:
        // 下载文件
        this.downloadFileRight()
        break
      case 6:
        // 上传到服务器
        this.submitFileRight()
        break
    }

  }

  // 初始化右边
  initRecordeRight() {
    let that = this
    // @ts-ignore
    this.newRec = Recorder({
      type: 'mp3', sampleRate: 16000, bitRate: 16 //mp3格式，指定采样率hz、比特率kbps，其他参数使用默认配置；注意：是数字的参数必须提供数字，不要用字符串；需要使用的type类型，需提前把格式支持文件加载进来，比如使用wav格式需要提前加载wav.js编码引擎
    })
    this.newRec.open(function() {//打开麦克风授权获得相关资源
      that.recorderRight = that.newRec
      that.startButtonRight = false
    }, function() {//用户拒绝未授权或不支持
      that.message.create('error', '获取用户授权失败!');
    })
  }
  // 开始右边录制
  startRecordeRight(){
    this.startButtonRight = true
    this.recorderRight.start()
    this.pauseButtonRight = false
    this.stopButtonRight = false
    this.isRecordingRight = true
  }
  // 暂停录制右边
  pauseRecordeRight(){
    this.pauseButtonRight = true
    this.recorderRight.pause()
    this.resumeButtonRight = false
    this.isRecordingRight = false
  }
  // 恢复右边
  resumeRecordeRight(){
    this.resumeButtonRight = true
    this.recorderRight.resume()
    this.pauseButtonRight = false
    this.isRecordingRight = true
  }
  // 结束右边录制
  stopRecordeRight(){
    let that = this
    this.stopButtonRight = true
    this.recorderRight.stop(function(blob: Blob, duration: any) {
      that.fullBlobRight = blob
      let radioRight = document.getElementById('recorde-radio-right')
      // @ts-ignore
      radioRight!.src = window.URL.createObjectURL(that.fullBlobRight)
      that.recorderRight.close()
      that.submitButtonRight = false
      that.downloadButtonRight = false
      that.isRecordingRight = false
      that.initButtonRight = false
      that.startButtonRight = true
      that.resumeButtonRight = true
      that.pauseButtonRight = true
    })

  }
  // 右边下载文件
  downloadFileRight(){
    let link = document.createElement('a')
    const downloadUrl = window.URL.createObjectURL(this.fullBlobRight)
    link.href = downloadUrl
    link.download = 'media.mp3'
    link.click()
    window.URL.revokeObjectURL(downloadUrl)
  }

  submitFileRight(){
    this.message.create('success', '上传录音文件成功!');
  }
  ngOnDestroy(){
    // 取消订阅
    if (this.testUnsub) {
      this.testUnsub.unsubscribe()
    }

  }
}
