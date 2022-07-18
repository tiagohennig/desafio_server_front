import connection from "./connection";
import app from "./app";
import { getProdutos } from "./endpoints/getProdutos";
import { postProdutos } from "./endpoints/postProdutos";
import { updateProdutos } from "./endpoints/updateProdutos";
import { deleteProdutos } from "./endpoints/deleteProdutos";

app.get("/produtos/", getProdutos)
app.post("/produtos/", postProdutos)
app.put("/produtos/:codigo", updateProdutos)
app.delete("/produtos/:codigo", deleteProdutos)