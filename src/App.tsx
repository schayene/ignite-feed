import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl:
          "https://xesque.rocketseat.dev/users/avatar/profile-5c717960-17b5-44dd-91c4-3c16e950bc6a-1655937751065.jpg",
        name: "Schayene S. Royer",
        role: "Web Developer",
      },
      publishedAt: new Date("2023-04-21 14:23:57"),
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              content: "👉 ",
            },
            {
              type: "link",
              content: "jane.design/doctorcare",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "link",
              content: "#novoprojeto",
            },
            {
              type: "link",
              content: "#nlw",
            },
            {
              type: "link",
              content: "#rocketseat",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/schayene.png",
        name: "Devon Lane",
        role: "Dev Front-End",
      },
      publishedAt: new Date("2023-04-10 14:23:57"),
      content: [
        { type: "paragraph", content: "Fala pessoal 👋" },
        {
          type: "paragraph",
          content:
            "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              content: "Acesse e deixe seu feedback 👉 ",
            },
            {
              type: "link",
              content: "devonlane.design",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "link",
              content: "#uiux",
            },
            {
              type: "link",
              content: "#userexperience",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
