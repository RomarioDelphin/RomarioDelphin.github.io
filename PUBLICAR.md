# Publicar no site de Romário Delphin

O site usa GitHub Pages e Jekyll. O Blog gera automaticamente a listagem e as páginas dos artigos. A Galeria gera os álbuns a partir de arquivos de conteúdo, sem precisar editar o layout.

## Escrever um artigo

1. No GitHub, abra este repositório e clique **Add file → Create new file**.
2. Nomeie o arquivo `_posts/AAAA-MM-DD-titulo-do-artigo.md` (data da publicação, título sem espaços/acentos).
3. Copie o conteúdo de `modelo-artigo.md`. Troque o título, a data, o resumo e a categoria. Remova `published: false` quando o texto estiver pronto.
4. Escreva abaixo do segundo `---`. `##` cria subtítulos, `**texto**` destaca, `-` cria listas.
5. Salve em uma branch para revisar. Os testes verificam o site antes de integrar à `main`.
6. Após o merge, aguarde o GitHub Pages. O artigo entra automaticamente no Blog, com URL própria, data, autoria e estimativa de leitura.

Para capa, envie a imagem para `assets/blog/` pelo **Add file → Upload files**, depois acrescente ao início do artigo:

```yaml
cover: /assets/blog/nome-da-capa.jpg
cover_alt: "Descrição da fotografia ou ilustração."
```

Para imagem no texto: `![Descrição acessível](/assets/blog/nome-da-foto.jpg)`.

Um arquivo com `published: false` não aparece no site, mas seu conteúdo fica visível no repositório público. Não use esse local para rascunhos confidenciais.

## Publicar fotos de palestra, curso ou consultoria

1. Envie as fotos reais para `assets/galeria/` pelo upload do GitHub. Prefira JPG/WebP, até aproximadamente 1600px de largura e nomes sem espaços.
2. Crie `_albums/nome-da-atividade.md` e copie `modelo-album.md`.
3. Preencha título, categoria, descrição, data e local com informações reais. Data/local podem ser omitidos.
4. Para cada foto, adicione um item na lista `photos`, com caminho `src`, descrição acessível `alt` e legenda `caption`.
5. Salve, confira os testes e faça o merge. O álbum e a categoria aparecem automaticamente na Galeria.

O primeiro álbum é um retrato profissional, identificado como tal. Não representa palestra ou curso realizado.

## Gerenciar o conteúdo

- Home e posicionamento: `index.html`.
- Projetos e cases: `portfolio.html`.
- Blog e seus artigos: `blog.html` e `_posts/`.
- Galeria e álbuns: `galeria.html` e `_albums/`.
- Cabeçalho, rodapé e layout dos artigos/álbuns: `_layouts/site.html`.
- Estilos: `light-theme.css` e `site-pages.css`.
- Domínio: veja `DOMINIO.md`.

Não há painel de edição dentro do site nem upload público. A publicação usa o acesso autenticado ao GitHub.
