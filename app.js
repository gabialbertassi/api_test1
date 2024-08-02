import express, { query } from "express"

const servidor = express();
servidor.use(express.json());

servidor.get('/calculadora/somar2/', (req, resp) => {

    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma = n1 + n2;

    resp.send({
        soma: soma
    })

})
servidor.listen(5051, () => console.log('api subiu na porta 5051'))