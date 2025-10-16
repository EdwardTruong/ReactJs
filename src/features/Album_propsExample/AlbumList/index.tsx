import React from "react";
import type { AlbumItem } from "../AlbumItem";
import Album from "../AlbumItem";

export interface AlbumListProps {
  listAlbum: AlbumItem[];
}

function AlbumList(props: Readonly<AlbumListProps>) {
  const { listAlbum } = props;

  return (
    <div>
      <ul>
        {listAlbum.map((value) => (
          <li key={value.id}>
            <Album items={value}></Album>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
