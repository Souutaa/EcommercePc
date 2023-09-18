#!/bin/bash
dos2unix mvnw
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" &
while true; do
  inotifywait -e modify,create,delete,move -r ./src/ && ./mvnw compile
done 
#này có 2 cách xuống dòng 1 là CRLF cái này là của window với 1 cái là LF cái này là của unix 
#(mac + linux) nãy cái vscode nó tự set là CRLF nên mình phải chỉnh lại
# chỉnh cái đó ở đây nè caí Sh là ubuntu nó chạy à đr ,mọi thứ thì unix chạy hết á tại mình quăng vào docker r maà, chắc thế kakakak
#