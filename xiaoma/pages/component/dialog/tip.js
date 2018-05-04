Component({

  properties: {
    inputPlaceHalder: {
      type: String,
      value: ' ',
    },
    btnText:{
      type:String,
      value:' '
    },
    content:{
      type:String,
      value:' '
    }
  },
 methods:{
   know: function (e) {
     this.triggerEvent('know')
   }
 }
})