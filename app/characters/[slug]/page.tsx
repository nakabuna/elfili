import { notFound } from "next/navigation";
import { characters, slugOf } from "@/components/data";
import CharacterProfile from "@/components/CharacterProfile";

export function generateStaticParams() {
  return characters.map((c) => ({ slug: slugOf(c.name) }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const character = characters.find((c) => slugOf(c.name) === slug);
  if (!character) notFound();
  return <CharacterProfile character={character} others={characters.filter((c) => c !== character)} />;
}