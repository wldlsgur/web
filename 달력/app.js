const express = require('express');//express 프레임워크 사용
const app = express();//express를 호출 즉 함수다.
const indexRouter = require('./Router/index');//라우터 모음
const checkRouter = require('./Router/check');
const pageRouter = require('./Router/page');
const createRouter = require('./Router/create');

app.use(express.static('public'));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/',indexRouter);
app.use('/check',checkRouter);
app.use('/page', pageRouter);
app.use('/create', createRouter)

app.use(function(request, response, next){//무조건 맨 밑에 미들웨어는 순서대로 실행
    response.status(404).send('sorry cant find that!');
  });
app.use(function (err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Someting broke!');
});

app.listen(5000, () => console.log('App Listening on port 5000!'));