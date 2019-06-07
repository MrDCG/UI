function f1(t) {
    switch (t) {
        case 1: var phone  = document.getElementById("t1").value;

            if(phone.length!==11){

                var str1 = "<p style='font-size: 11px;color: red'>"+"手机号不是11位，请核对后再次输入！"+"</p>";
                $('#c1').html(str1);
                // document.getElementById("c1").innerText=str1;
                document.getElementById("t1").value="";
            }
            else {
                str1 = "<p style='font-size: 11px;color: red'>"+"√"+"</p>";

                $('#c1').html(str1);
            }
            break;
        case 2:  var youz  = document.getElementById("t2").value;
            if(youz.length>6){
                var str2 = "<p style='font-size: 11px;color: red'>"+"邮政编码最多6个字符"+"</p>";
                $('#c2').html(str2);}
            else if(youz.length===0){
                str2 = "<p style='font-size: 11px;color: red'>"+"邮政编码不能为空"+"</p>";
                $('#c2').html(str2);
            }
            else {
                str2 = "<p style='font-size: 11px;color: red'>"+"√"+"</p>";
                $('#c2').html(str2);
            }
            break;
        case 3:var paw  = document.getElementById("t3").value;

            if(paw.length>20||paw.length<6){

                var str3 = "<p style='font-size: 11px;color: red'>"+"长度6~20位字符"+"</p>";
                $('#c3').html(str3);
                document.getElementById("t3").value="";
            }else {
                str3 = "<p style='font-size: 11px;color: red'>"+"√"+"</p>";
                $('#c3').html(str3);
            }
            break;
        case 4:var paw1  = document.getElementById("t3").value;
            var paw2  = document.getElementById("t4").value;
            if(paw1!==paw2){
                var str4 = "<p style='font-size: 11px;color: red'>"+"两次输入密码不同，请重新上输入！"+"</p>";
                $('#c4').html(str4);
                document.getElementById("t4").value="";
            }
            else if(paw1===""){
                str4 = "<p style='font-size: 11px;color: red'>"+"密码不能为空！"+"</p>";
                $('#c4').html(str4);
                document.getElementById("t4").value="";
            }
            else{
                str4 = "<p style='font-size: 11px;color: red'>"+"√"+"</p>";
                $('#c4').html(str4);
            }
            break;
        case 5:
            var name1  = document.getElementById("t5").value;
            if(name1.length===0){
                var str5 = "<p style='font-size: 11px;color: red'>"+"姓名不能为空"+"</p>";
                $('#c5').html(str5);
            }
            else{
                str5 = "<p style='font-size: 11px;color: red'>"+"请确定输入的为真实姓名"+"</p>";
                $('#c5').html(str5);
            }
            break;
        case 6: var name  = document.getElementById("t6").value;
            if(name.length>30||name.length<6){
                var str6 = "<p style='font-size: 11px;color: red'>"+"昵称在6~30个字符之间"+"</p>";
                $('#c6').html(str6);
                document.getElementById("t6").value="";
            }else{
                str6 = "<p style='font-size: 11px;color: red'>"+"√"+"</p>";
                $('#c6').html(str6);
            }
            break;
        case 7:
            var gphone  = document.getElementById("t7").value;
            if(gphone.length>12){
                var str7 = "<p style='font-size: 11px;color: red'>"+"最多12位"+"</p>";
                $('#c7').html(str7);
                document.getElementById("t7").value="";

            }else if(gphone.length===0){
                str7 = "<p style='font-size: 11px;color: red'>"+"电话不能为空"+"</p>";
                $('#c7').html(str7);
            }
            else {
                str7 = "<p style='font-size: 11px;color: red'>"+"√"+"</p>";
                $('#c7').html(str7);
            }
            break;
        case 8:
            var chuan  = document.getElementById("t8").value;
            if(chuan.length>12){
                var str8 = "<p style='font-size: 11px;color: red'>"+"最多12位字符"+"</p>";
                $('#c8').html(str8);
                document.getElementById("t8").value="";
            }else if(chuan.length===0){
                str8 = "<p style='font-size: 11px;color: red'>"+"传真不能为空"+"</p>";
                $('#c8').html(str8);
            }
            else{
                str8 = "<p style='font-size: 11px;color: red'>"+"√"+"</p>";
                $('#c8').html(str8);
            }
            break;
        case 9:
            var addr  = document.getElementById("t9").value;

            if(addr.length!==0) {
                var str9 = "<p style='font-size: 11px;color: red'>" + "请确定输入正确地址" + "</p>";
                $('#c9').html(str9);
            }else{
                str9 = "<p style='font-size: 11px;color: red'>" + "地址不能为空" + "</p>";
                $('#c9').html(str9);
            }

            break;
        case 10:
            var e_mail  = document.getElementById("t10").value;
            if(e_mail.charAt(0)!=="@"){
                if(e_mail.match("@163.com")||e_mail.match("@qq.com")||e_mail.match("@126.com")){
                    str10 = "<p style='font-size: 11px;color: red'>" + "√" + "</p>";
                    $('#c10').html(str10);
                }
                else {
                    str10 = "<p style='font-size: 11px;color: red'>" + "请输入有效邮箱" + "</p>";
                    $('#c10').html(str10);
                    document.getElementById("t10").value="";
                }
            }
            else {
                str10 = "<p style='font-size: 11px;color: red'>" + "请输入有效邮箱" + "</p>";
                $('#c10').html(str10);
                document.getElementById("t10").value="";
            }

            break;

    }

}
function Button() {
    var sum = 0;
    var but = document.getElementById("cx");
    if(cx.checked){

        var p = document.getElementsByTagName("p");

        for (var i=0;i<p.length;i++){

            if(p[i].innerText==="√"){
                sum++;
            }
        }

        if (sum===8){
            document.getElementById("sub").disabled=false;
        }
    }
    else{
        document.getElementById("sub").disabled=true;

    }


}
function success() {
    alert("账户创建成功！");

}