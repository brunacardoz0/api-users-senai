import { sql } from'./db.js'

export class Database{

async create(artigo) {
    const id = 11;
    const nome = artigo.nome;
    const descricao = artigo.descricao;
    const conteudo = artigo.conteudo;
    const imagem = artigo.imagem;
    const github = artigo.github;

    await sql`insert into artigos (id, nome. descricao, conteudo, imagem, github) 
    values (${id}, ${nome}, ${descricao}, ${conteudo}, ${imagem}, ${github})`
}

}