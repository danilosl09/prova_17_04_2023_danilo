var path = require('path')
const manipulation = {}

let indice = 4


var listProducts = [{"id": 1,"descricao": "Camiseta","preco": 29.99, "cores": ["preto", "branco", "cinza"]},
                     {"id": 2,"descricao": "Calça Jeans","preco": 79.99,"cores": ["azul claro", "azul escuro"]},
                     {"id": 3,"descricao": "Tênis Esportivo","preco": 149.99,"cores": ["preto", "branco", "cinza", "azul"]},
                     {"id": 4,"descricao": "Jaqueta de Couro","preco": 99.99,"cores": ["preto", "marrom"]}
                    ];

manipulation.getAllProducts = (req, res) => {
    res.status(200).send(listProducts)
};

manipulation.getProductById = (req, res) => {
    item = listProducts.find(i => i.id == req.params.id)

    if(item){
        res.status(200).send(item)
    }else{
        res.status(404).send("Product not find")
    }
};

manipulation.createProduct = (req,res)=>{
    const newProduct = req.body
    newProduct.id = indice + 1
    listProducts.push(newProduct)
    res.status(200).redirect("/indice")
};

manipulation.updateProductById = (req,res)=>{
    productIndice = listProducts.findIndex(p => p.id == req.params.id)
    console.log(productIndice)
    if(productIndice >= 0){
      const productUpdate = req.body;
      listProducts[productIndice] = productUpdate;
      res.status(200).send("OK")
    }else{
      res.status(404).send('Error 404')
    }
};

manipulation.deleteProductById = (req,res)=>{
    const productIndice = listProducts.findIndex(p => p.id == req.params.id);
    if (productIndice >= 0) {
        listProducts.splice(productIndice, 1);
      res.status(200).send("OK")
    }else{
      res.status(404).send('Error 404')
    }
  };


module.exports = manipulation