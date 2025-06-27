function Track({ data, kurva }) {
  const { artist, track, album_pic } = data;
  return (
    <div className="post">
      <small>{artist}</small>
      <h1>{track}</h1>
      <img src={album_pic}/>
    </div>
  );
}

export default Track;