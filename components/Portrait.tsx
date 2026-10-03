export default function Portrait({ src, className = "" }: { src: string; className?: string }) {
  return <div className={className} style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }} />;
}