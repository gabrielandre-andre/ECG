

//Formato de onda

var dados;


function renderGrad(){
	const element = document.getElementById('graf');

	let options = {

		chart:{
			type: 'line'
		},


		series: [

			{
				name: 'teste',

				data: dados
			}

		],

		colors:['#5aff54']


	};


	let chart = new ApexCharts(element, options);

	chart.render();


}



//ESCOLHA DE LEITO


function pac1(){

	loading_load();

	sessionStorage.setItem('pac','one')

	window.location.reload();

	alert('LEITO 1 SELECIONADO');







}

function pac2(){

	loading_load();

	sessionStorage.setItem('pac','two')

	window.location.reload();

	alert('LEITO 2 SELECIONADO');




}

function pac3(){

	loading_load();

	sessionStorage.setItem('pac','three')

	window.location.reload();

	alert('LEITO 3 SELECIONADO');


	

}

function pac4(){

	loading_load();

	sessionStorage.setItem('pac','four')

	window.location.reload();

	alert('LEITO 4 SELECIONADO');



}






if(sessionStorage.pac == 'one'){
	dados = val_quad;
	renderGrad();	


	$('#pac1').addClass('border_select')
}

if(sessionStorage.pac == 'two'){
	dados = val_sen;
	renderGrad();

	$('#pac2').addClass('border_select')
}

if(sessionStorage.pac == 'three'){
	dados = val_serr;
	renderGrad();

	$('#pac3').addClass('border_select')
}

if(sessionStorage.pac == 'four'){
	dados = val_ecg;
	renderGrad();

	$('#pac4').addClass('border_select')
}







function loading_load(){


	$('body').css('overflow-y','hidden')
	
	$('.loading').addClass('loading_on')

	//$('body').css('overflow-y','hidden')

	

	$('.loading').animate({
		opacity: 100
	},1000)

	$('.loading').animate({
		opacity: 0
	},1000)

	function off_loading(){
		$('.loading').css('display','none')
		$('body').css('overflow-y','auto')
	}

	setTimeout(off_loading,2000)

}



loading_load();