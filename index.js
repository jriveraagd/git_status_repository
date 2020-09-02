var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var fileUpload = require('express-fileupload');
var cors = require('cors');
var morgan = require('morgan');
var _ = require('lodash');


const fs = require('fs');

app.use(fileUpload({
    createParentPath: true
}));

app.use(cors());

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', function(req, res){

	try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            let avatar = req.files.avatar;
            
            avatar.mv('./uploads/' + avatar.name);

			fs.readFile('/home/apps/git_status_repository/uploads/' + avatar.name,"utf8", (err, data) => {
			  if (err) {
			    console.error(err)
			    return
			  }


                var stringCut = function (str)
                {
                  if( !str.match(/\n/g) )
                  {
                    // si no tiene saltos de linea tomamos medidas aqui
                    return str;
                  }

                  var words = (str.split(/\n/g)).slice(0)
                  return words;
                }


                var today = new Date();
                var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = time+' '+date;


              var data_obj = {
                file: stringCut(data),
                date: dateTime
              }

			  io.sockets.emit('response_socket', data_obj);
			})

			res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });

        }
    } catch (err) {
        res.status(500).send(err);
    }

});

app.get('/listar', function(req, res){
    res.sendFile(__dirname + '/chat.html');
});



http.listen(8080, function(){
    console.log('listening on *:8080');
});
