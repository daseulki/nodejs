var output;
        var webSocket = new WebSocket('ws://localhoast:8005')

        function init() {
            output=document.getElementID("output")
            webSocket.onopen = function () {
                console.log('서버와 웹소켓 연결 성공')
                writeMessage('서버와 웹소켓 연결 성공')
            }
            webSocket.onmessage = function(e){
                console.log(e.data);
                webSocket.send('클라이언트에서 서버로 답장 ')
                writeMessage('클라이언트에서 서버로 답장 ')
            }

        }  

        function writeMessage(message) {
            var pre = document.createElement("p");
            pre.style.wordWrap="break-word";
            pre.innerHTML = message;
            output.appendChild(pre);
        }

        window.addEventListner("load", init, false)