import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "". name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Rocketseat.png',
      name: 'Leslie Alexander',
      role: 'UI Designer'
    },
    content: [
      { type: 'paragraph', content: 'Boa noite, esse é meu primeiro post por aqui!' },
      { type: 'paragraph', content: 'Gostei muito da plataforma, me ajudem deixando sua curtida 🚀' },
      { type: 'paragraph', content: 'Pessoal visitem meu GitHub para saber mais sobre os meus projetos' },
      { type: 'paragraph', content: 'Irei deixar o link logo abaixo: ' },
      { type: 'link', content: 'github.com/Rocketseat' },
    ],
    publishedAt: new Date('2023-07-26 16:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lohancodes.png',
      name: 'Vinícius Cardoso',
      role: 'Front-end Dev'
    },
    content: [
      { type: 'paragraph', content: 'Falaaaa rapaziada, primeiro post por aqui 👋' },
      { type: 'paragraph', content: 'Esse é meu primeiro projeto feito com o Rocketseat Ignite 🚀' },
    ],
    publishedAt: new Date('2023-07-20 13:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}