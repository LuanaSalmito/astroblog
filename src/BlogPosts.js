import React, { useState, useEffect } from 'react';

const BlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('https://luanasalmito.com.br/astroblogapi/blog_posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setBlogPosts(data);
                } else {
                    console.error('Erro ao obter os posts do blog. Verifique a resposta da API.');
                }
            } catch (error) {
                console.error('Erro ao obter os posts do blog:', error);
            }
        };

        fetchBlogPosts();
    }, []); // O segundo parâmetro vazio [] garante que useEffect seja executado apenas uma vez, sem depender de nenhum estado ou propriedade.

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title} - {post.id}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>

            <h1>Teste</h1>
            {blogPosts.length > 0 ? (
                <div>
                    <h2>{blogPosts[1].title}</h2>
                    <p>{blogPosts[1].content}</p>
                </div>
            ) : <></>}
        </div>
    );
};

export default BlogPosts;
