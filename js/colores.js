const app = Vue.createApp({})
app.component("padre",{
	template: //html
	`
	<div class="d-flex flex-inline">
		<hijo fondo="aquamarine" texto="blue"></hijo>
		<hijo fondo="palegreen" texto="green"></hijo>
		<hijo fondo="pink" texto="red"></hijo>
	</div>
	`,

	data(){
		return{
			fondo:null,
			texto:null
		}
	}
})




	

	
