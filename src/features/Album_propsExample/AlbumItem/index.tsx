import React from "react";
import "./style.scss";
export interface AlbumItem {
  id: number;
  name: string;
  url: string;
  image: string;
}

interface AlbumProps {
  items: AlbumItem;
}

// function Album({ id, name, url, image }: AlbumItem) {...}
function Album(props: Readonly<AlbumProps>) {
  const { items } = props;

  return (
    <div className="album">
      <div className="album_thumbnail">
        <img src={items.image} alt={items.name}></img>
      </div>
      <p className="album_name">{items.name}</p>
      <a href={items.url}>Download - {items.id}</a>
    </div>
  );
}

export default Album;
