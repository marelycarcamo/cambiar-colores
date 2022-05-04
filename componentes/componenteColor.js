app.component("hijo",{
	
	template: //html
	`
	
	<div class="container border border-grey border-2 p-5" :style="this.estiloFondo">

	<h3 :style="this.estiloTexto">Lorem Ipsum</h3>
		<p :style="this.estiloTexto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus enim deleniti quae, quo harum voluptates id earum? Aliquam ab voluptatem quidem dicta porro eveniet quod magni commodi explicabo accusantium! Cum, doloremque pariatur. Nihil aliquam ullam doloremque, at ducimus qui recusandae accusamus? Eum iste sequi sint tempore, culpa molestiae aspernatur nobis. Quas aspernatur unde temporibus deleniti repellendus, sed reprehenderit eius eum deserunt odit! Assumenda fuga sed facilis provident, consectetur dolorem porro iste minus voluptates temporibus iure aliquam blanditiis aut vitae minima est commodi molestias nulla labore voluptatem nesciunt impedit debitis reprehenderit tempora. Nam iure corrupti at dolor obcaecati assumenda nesciunt ad.</p>
		<br>
		<input type="button" value="Cambiar fondo" @click="cambiarColorFondo">
		<input type="button" value="Cambiar texto" @click="cambiarColorTexto">
	</div>
	`,
	props:["fondo","texto"],
	data(){
		return{
			estiloFondo:"",
			estiloTexto:""
		}
		
	},
	methods:{
		cambiarColorFondo(){
			console.log("hola")
			console.log(this.fondo)
			this.estiloFondo="background-color:"+this.fondo;
         

			},
			cambiarColorTexto(){
				this.estiloTexto="color:"+this.texto;
				console.log(this.texto)
			}
	},
		


	
})	