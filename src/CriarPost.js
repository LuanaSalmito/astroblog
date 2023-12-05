import React, { useState } from 'react';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [aviso, setAviso] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://luanasalmito.com.br/astroblogapi/blog_posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (response.ok) {
        setAviso('Blog post criado com sucesso!');
      } else {
        setAviso('Erro ao enviar o post do blog. Verifique a resposta da API.');
      }
    } catch (error) {
        setAviso('Erro ao enviar o post do blog:' + error);
    } finally{
        setTitle('');
        setContent('');
    }
  };

  return (
    <div>

      <h1>Novo Post do Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Conteúdo:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {aviso}

    </div>
  );
};

export default BlogPostForm;
