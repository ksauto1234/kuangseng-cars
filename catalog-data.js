// แก้ไขผ่าน editor.html แล้วดาวน์โหลดไฟล์นี้มาแทนไฟล์เดิม
window.KS_DATA = {
  shop: {
    name: 'กวงเส็ง รถยนต์มือสอง', tagline: 'เลือกรถที่ใช่ ในราคาที่คุณมั่นใจ',
    phones: ['063-506-4777','092-413-9977'], contactName:'เกด กวงเส็ง',
    lineUrl:'https://lin.ee/C7TCPYK', lineId:'@ks1234',
    mapsUrl:'https://g.page/r/CbksbgUFZ-iNEBA',
    address:'มีนบุรี–สายไหม ถนนหทัยราษฎร์ ซอยตรงข้ามหทัยราษฎร์ 44',
    youtubeUrl:'', // ใส่ลิงก์คลิป YouTube รีวิวร้านหรือรถเข้าใหม่
    facebookUrl:'' // ใส่ลิงก์เพจ Facebook จริงเมื่อพร้อม
  },
  cars: [
    {id:'toyota-yaris-2017-5696', brand:'Toyota', model:'Yaris 1.2 E', year:'2017/2018', price:229000,
     color:'ขาว', transmission:'อัตโนมัติ', fuel:'เบนซิน', mileage:188518, mileageConfirmed:false,
     category:'รถเก๋ง', status:'available', featured:true,
     description:'Toyota Yaris 1.2 E เกียร์ออโต้ สีขาว พร้อมรูปถ่ายจากรถจริงทั้งภายนอก ภายใน และรายละเอียดต่าง ๆ นัดชมรถหรือขอวิดีโอคอลเพิ่มเติมได้ค่ะ',
     highlights:['เกียร์อัตโนมัติ','รถแฮทช์แบ็ก 5 ประตู','มีภาพรถจริงหลายมุม'],
     images:Array.from({length:11},(_,i)=>'images/yaris-'+String(i+1).padStart(2,'0')+'.jpg'),
     financing:{note:'กรุณาสอบถามยอดผ่อนและเงื่อนไขไฟแนนซ์ล่าสุดกับทางร้าน',rows:[]}
    }
  ]
};
