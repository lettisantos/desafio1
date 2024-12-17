const usuario={
    id:1,
    nome:'Leticia Santos',
    email:'leticia.santos@gmail.com',
    perfil:{
        id:1,
        descricao: 'Analista SAP PP'
    }
};


function login(){
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve({
                toke:'sadfajkdhalkhdjcpbaspdhpudhapshd-2-89y23hd´qdq',
                usuario

            })
        })
    })
}

export default { login }