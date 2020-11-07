const status = document.getElementById('status');
      const output = document.getElementById('output');
      if (window.FileList && window.File && window.FileReader) {
        document.getElementById('file-selector').addEventListener('change', event => {
          output.src = '';
          status.textContent = '';
          const file = event.target.files[0];
          if (!file.type) {
            status.textContent = 'Error';
            return;
          }
          if (!file.type.match('image.*')) {
            status.textContent = 'Error.'
            return;
          }
          const reader = new FileReader();
          reader.addEventListener('load', event => {
            output.src = event.target.result;
          });
          reader.readAsDataURL(file);
        }); 
      }
	  
	  
	  
	  
	  var man= {
	"ФИО":"",
	"год_рождения":"",
	"телефон":"",
	"почта":"",
	"хобби":"",
	
};


function f1() {
	var out="";
	man.ФИО = document.forms["form1"]['name'].value;
	man.год_рождения = document.forms["form1"]['namef'].value;
	man.телефон = document.forms["form1"]['namez'].value;
	man.почта = document.forms["form1"]['nameq'].value;
	man.хобби = document.forms["form1"]['namea'].value;
	
	for (key in man){
		out += 	key + " " + man[key] + '<br>';
	}
	
	localStorage.setItem("out1",out);

}


var out = localStorage.getItem('out1');
document.getElementById('out').innerHTML = out;