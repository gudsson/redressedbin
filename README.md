# RedressedBin👗

RedressedBin is a [RequestBin](https://requestbin.com/)-style application for collecting and analyzing HTTP/webhook requests in real-time.  It was built using React, Bootstrap, Express, MongoDB, and Socket.io.

View the working demo at https://bin.gudsson.ca

To run locally:

```
git clone https://github.com/gudsson/redressedbin.git
cd redressedbin
docker-compose up
```

Click "create bin" or navigate to `localhost:3000/newbin` to create a new bin

![No description available.](https://scontent.fyyc4-1.fna.fbcdn.net/v/t1.15752-9/269745398_936684427274403_11768741440334457_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gDjnq3u3CQcAX-CT9IA&_nc_ht=scontent.fyyc4-1.fna&oh=03_AVK40HEVQFrF2fC2F_TjGrKLUCokIiBP8u5DVCP7KCWBEQ&oe=61FAF3E3)

Once the bin has been created, you can hit the `localhost:3001/api/bin/[binId]` endpoint to fill the bin.  To inspect the bin, navigate to `localhost:3000/inspect/bin/[binId]

![No description available.](https://scontent.fyyc4-1.fna.fbcdn.net/v/t1.15752-9/271281215_2994431300774265_8425964763180459319_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=pGgnihpFvlUAX_MQkFs&_nc_ht=scontent.fyyc4-1.fna&oh=03_AVL2fenmflidLOaV3lLxaJmw02fkXaP57BOD1t1Yia39Qw&oe=61FAD574)