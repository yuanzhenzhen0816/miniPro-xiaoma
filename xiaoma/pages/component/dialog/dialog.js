Component({
  
  properties: {
    inputPlaceHalder: {
      type: String,
      value: ' ',
    }
     
  },
  data: {
    btntext: '我知道了',
    content: '客官确定要还车吗？',
    isConfirm:false,
    isEnsure:false
  },
  methods: {              
    
    cancel:function(){
      this.triggerEvent('cancel')
    },
    ensure:function(e){
      this.setData({
        isConfirm: false,
        isEnsure: true
      })
      this.triggerEvent('ensure')
    }
  }
}) 