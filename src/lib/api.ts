export interface Data {
  online: boolean;
  numplayers: number;
  maxplayers: number;
}

export async function getData() {
  const res = await fetch('https://pingwinek.bio/api.php');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
