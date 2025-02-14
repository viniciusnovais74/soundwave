import { formatTime } from "@/lib/utils";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
export default function MusicList() {

  const musics = [
    {
      id: 1,
      title: 'Song 1',
      duration: 100,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    }, {
      id: 2,
      title: 'Song 2',
      duration: 120,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    }, {
      id: 3,
      title: 'Song 3',
      duration: 150,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }]

  return (
    <Table >
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Titulo</TableHead>
          <TableHead>Duração</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {musics.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.title}</TableCell>
            <TableCell>{formatTime(invoice.duration)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
