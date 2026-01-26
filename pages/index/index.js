// index.js
Page({
  data: {
    messages: [],
    inputValue: '',
    userName: '',
    hasName: false,
    messageId: 0,
    scrollToView: ''
  },

  onLoad() {
    // 页面加载时初始化
    console.log('魔镜AI页面加载')
  },

  onInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  sendMessage() {
    const input = this.data.inputValue.trim()
    if (!input) return

    // 添加用户消息
    this.addMessage(input, true)

    // 获取AI回复
    const reply = this.getAIReply(input)
    
    // 延迟显示AI回复，模拟思考时间
    setTimeout(() => {
      this.addMessage(reply, false)
    }, 300)

    // 清空输入框
    this.setData({
      inputValue: ''
    })
  },

  addMessage(content, isUser) {
    const messageId = this.data.messageId + 1
    const newMessage = {
      id: messageId,
      content: content,
      isUser: isUser,
      time: new Date().getTime()
    }

    this.setData({
      messages: [...this.data.messages, newMessage],
      messageId: messageId,
      scrollToView: `msg-${messageId}`
    })
  },

  getAIReply(input) {
    // 实现魔镜AI的逻辑（从C++代码移植）
    
    // 你好
    if (input.includes('你好')) {
      return '您好呀，请问我有什么可以帮助你的吗？'
    }

    // 我是谁
    if (input.includes('我是谁')) {
      if (!this.data.hasName) {
        // 第一次问"我是谁"
        this.setData({ hasName: true })
        return '谁啊，请告诉我您的名字'
      } else {
        // 已经有名字了
        if (this.data.userName) {
          return `您是${this.data.userName}啊，我尊敬的殿下！`
        } else {
          return '谁啊，请告诉我您的名字'
        }
      }
    }

    // 如果正在等待用户输入名字
    if (this.data.hasName && !this.data.userName) {
      this.setData({ userName: input })
      return `您好，${input}！很高兴认识您！`
    }

    // 对话转换逻辑（模仿C++代码的正则替换）
    let reply = input
    
    // 替换"吗？"为"!"
    reply = reply.replace(/吗？/g, '!')
    
    // 交换"你"和"我" - 使用唯一标记避免冲突
    reply = reply.replace(/你/g, '___TEMP_YOU___')
    reply = reply.replace(/我/g, '你')
    reply = reply.replace(/___TEMP_YOU___/g, '我')
    
    // 替换"谁"为"你"
    reply = reply.replace(/谁/g, '你')
    
    // 替换"魔镜魔镜"为"那肯定"
    reply = reply.replace(/魔镜魔镜/g, '那肯定')

    return reply
  }
})
