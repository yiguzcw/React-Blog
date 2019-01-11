module.exports = {
    host:process.env.HOST || 'localhost',
    port:process.env.PORT ||(process.env.NODE_ENV === 'production'?80:7777),
    apiHost:process.env.APIHOST || 'localhost',
    apiPort:process.env.APIPORT || '8791',
    app:{
        title:"personal blog",
        description:'Lex\'s personal blog demo',
        head:{
            titleTemplate:'blog',
            meta:[
                {
                    name:"description",
                    content:"react express demo"
                },
                {charset:"utf-8"}
            ]
        }
    }
};