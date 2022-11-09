
import {React,ReactDOMServer,createApp,} from "./dep.ts"

const app=createApp()
let visitas:number=0

app.handle("/",async(req)=>{
    await req.respond({
        status:200,
        headers: new Headers({
            "content-type": "text/html; charset=UTF-8",
        }),
        body: ReactDOMServer.renderToString(
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <title>Desafío 48: Servidor en Deno</title>
                </head>
                <body>
                    <h1  style={{color:'blue'}}>Azul</h1>
                    <h2  style={{color:'green'}}>verde</h2>
                    <h3  style={{color:'red'}}>Rojo</h3>
                </body>
            </html>
        )
    })
})

app.listen({port:8899})
