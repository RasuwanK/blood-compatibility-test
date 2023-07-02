import Message from './message';

function getDate() {
  return new Promise<{ username: string }>((resolve) => {
    setTimeout(() => {
      resolve({ username: "Kalhara" });
    }, 3000);
  });
}

export default async function Home() {
  const user = await getDate();
  return (
    <main><span>Username: {user.username}</span><Message /></main>
  )
}
