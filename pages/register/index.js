import request from '../../utils/request';

Page({
    data: {
        form: {username:'',password:''},
      },
    
    onChange1(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    this.data.form.username = event.detail
    },
    onChange2(event) {
        // event.detail 为当前输入的值
        console.log(event.detail);
        this.data.form.password = event.detail
    },
    submit(){
        request.request('001',this.data)
    }
});