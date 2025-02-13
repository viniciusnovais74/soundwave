import Image from "next/image";


export default function MusicList() {
  return (
    <table className="w-full">
      <thead>
        <th>#</th>
        <th>Titulo</th>
        <th>Album</th>
        <th>🕛</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Believer</td>
          <td>Evolve</td>
          <td>3:24</td>
        </tr>
      </tbody>
    </table>
  );
}
